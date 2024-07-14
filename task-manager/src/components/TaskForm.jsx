import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 

function TaskForm({ task, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [due_date, setDueDate] = useState(new Date());

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(new Date(task.due_date)); 
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = due_date.toISOString().split('T')[0];
    onSubmit({ title, description, due_date: formattedDate });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <DatePicker
          selected={due_date}
          onChange={(date) => setDueDate(date)}
          className="form-control"
          dateFormat="yyyy-MM-dd"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Task
      </Button>
    </Form>
  );
}

export default TaskForm;
