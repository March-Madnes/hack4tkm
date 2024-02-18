import React, { useState, useEffect } from "react";
import "./farmTasks.css";
import { FarmHeader } from "../components/Farm";
import Tasks from "../library/tapioca.json";
import { Link } from "react-router-dom";

const FarmTasks = () => {
  const [tasks, setTasks] = useState(Tasks);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.status === "complete");
    const completedPercentage = (completedTasks.length / tasks.length) * 100;
    setProgress(completedPercentage);
  }, [tasks]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="p-3">
      <FarmHeader />

      <div className="mt-4 p-3 bg-white">
        <div class="flex justify-between mb-1 mt-2">
          <span class="text-base font-medium">Task Completion</span>
          <span class="text-sm font-medium">{progress.toFixed(2)}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div class="pt-3 w-full">
        <div class="">
          <div class="p-4 md:p-5">
            <ol class="relative border-s border-gray-200 ms-3.5 mb-4">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task.title}
                  status={task.status}
                  content={task.content}
                  dueDate={task.due_date}
                  points={task.points}
                  handleTaskCompletion={handleTaskCompletion}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmTasks;

const Task = ({
  task,
  status,
  content,
  dueDate,
  points,
  handleTaskCompletion,
}) => {
  const boxStyle =
    status == "active" ? "border-[1px] border-green-600" : "border-none";
  let statusPillColor = "";
  if (status === "active") {
    statusPillColor =
      "border-green-600 border-[1px] bg-green-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-3xl  ms-3";
  } else if (status === "complete") {
    statusPillColor =
      "border-blue-400 border-[1px] bg-blue-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-3xl  ms-3";
  } else if (status === "missed") {
    statusPillColor =
      "border-red-400 border-[1px] bg-red-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-3xl  ms-3";
  } else if (status === "overdue") {
    statusPillColor =
      "border-red-400 border-[1px] bg-red-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-3xl  ms-3";
  } else {
    statusPillColor =
      "border-gray-400 border-[1px] bg-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-3xl  ms-3";
  }
  return (
    <li
      className={`mb-4 ms-8 bg-white rounded-3xl shadow px-3.5 py-3 ${boxStyle}`}
    >
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-8 ring-white ">
        <svg
          className="w-4 h-4 text-gray-500 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 0 0 2-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v-1h-1v1h1Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
          />
        </svg>
      </span>
      <h3 className="flex items-start justify-between mb-1 text-lg font-semibold text-gray-900 ">
        {task}
        <span className={statusPillColor}>{status}</span>
      </h3>
      <div className="flex flex-row justify-between items-center">
        <time className="block mb-3 text-sm font-normal leading-none text-gray-500 ">
          {dueDate}
        </time>
        <time className="block mb-3 text-sm font-normal leading-none text-orange-500 px-3">
          {points} points
        </time>
      </div>
      <time className="block mb-3 text-sm font-normal leading-none text-gray-500 ">
        {content}
      </time>
      {status === "active" ? (
        <div className="flex w-full justify-end">
          <Link to = "/camera" state={{ from: "update" }} >
          <button className="px-4 py-2 bg-green-700 text-white rounded-xl flex flex-row justify-center gap-3 items-center">
            <p>Upload Image</p>
            <img
              src="/icons/camera-solid.svg"
              alt="camera"
              className="w-5 h-5"
            />
          </button>
          </Link>
        </div>
      ) : null}
    </li>
  );
};