import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}`);
    const data = await response.json();
    setTask(data);
    console.log("data",task);
  };

  if (!task) return <div>Loading...</div>;
  const formattedCreatedAt = task.created_at;
  const formattedDate = formattedCreatedAt.substring(0, 10);
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <p className="card-text">
            <strong>Title:</strong> {task.title}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {task.description}
          </p>
          <p className="card-text">
            <strong>Due Date:</strong> {task.due_date}
          </p>
          <p className="card-text">
            <strong>Created Date:</strong> {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
