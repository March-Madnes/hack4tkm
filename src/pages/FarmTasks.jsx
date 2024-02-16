import React, { useState } from "react";
import "./farmTasks.css";
import { FarmHeader } from "../components/Farm";

const FarmTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
    // Add more tasks as needed
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="p-3">
      <FarmHeader />
      <div className="vertical-timeline">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`timeline-card ${task.completed ? "completed" : ""}`}
            style={{ opacity: task.completed ? 0.5 : 1 }}
          >
            <div>
              <h2 className="text-2xl font-semibold">{task.title}</h2>
              <p className="text-xs">Due Date</p>
              <h3 className="text-xl text-orange-700">12/02/2024</h3>
              <p>Task description goes here</p>
            </div>
            <input
              type="checkbox"
              className="h-6 w-6"
              checked={task.completed}
              onChange={() => handleTaskCompletion(task.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmTasks;
