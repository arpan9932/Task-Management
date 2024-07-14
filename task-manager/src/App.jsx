import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TaskTable from './components/TaskTable';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail.jsx';
import { Modal, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/tasks');
    const data = await response.json();
    setTasks(data);
    };

  const handleAddTask = () => {
    setSelectedTask(null);
    setShowFormModal(true);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setShowFormModal(true);
  };

  const handleViewTask = (task) => {
    setSelectedTask(task);
    navigate(`/task/${task.id}`);
  };

  const handleDeleteTask = async (taskId) => {
    await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
      method: 'DELETE'
    });
    fetchTasks();
  };

  const handleSubmit = async (task) => {
    if (selectedTask) {
      await fetch(`http://127.0.0.1:8000/api/tasks/${selectedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
    } else {
      await fetch('http://127.0.0.1:8000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
    }
    fetchTasks();
    setShowFormModal(false);
  };

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="app-header">
        <h1>Task Management</h1>
      </div>
      <div className="app-button">
        <Button onClick={handleAddTask}>Add Task</Button>
      </div>
      <TaskTable tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onView={handleViewTask} />

      <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTask ? 'Update Task' : 'Add Task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm task={selectedTask} onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default AppWithRouter;
