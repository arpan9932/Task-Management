import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function TaskTable({ tasks, onEdit, onDelete, onView }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.due_date}</td>
            <td>
              <Button variant="info" onClick={() => onView(task)}>View</Button>
              {' '}
              <Button variant="warning" onClick={() => onEdit(task)}>Edit</Button>
              {' '}
              <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TaskTable;
