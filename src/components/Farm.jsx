import React from "react";
import { Link } from "react-router-dom";

export const FarmHeader = () => {
  return (
    <div
      className="w-full rounded-3xl bg-cover bg-center flex flex-col justify-between items-end gap-8 shadow-lg"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg)",
      }}
    >
      <h1 className="p-3 text-3xl text-green-700 font-black bg-white rounded-bl-3xl text-right">
        Alphonsa's Farm
      </h1>
      <div className="p-3 bg-white rounded-tl-3xl rounded-br-3xl list-none flex flex-col items-stretch gap-2 text-right">
        <div className="p-1">
          <div className="text-xs text-gray-400">Last Updated:</div>
          <li className="text-green-700 font-semibold">16 Feb 2024</li>
        </div>
        <div className="p-1">
          <div className="text-xs text-gray-400">Soil Status</div>
          <li className="text-red-700 font-semibold">Severe Underhydration</li>
        </div>
        <button className="px-4 py-2 bg-green-700 text-white rounded-xl flex flex-row justify-center gap-3 items-center">
          <p>Add Update</p>
          <img src="/icons/camera-solid.svg" alt="camera" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const Overview = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold text-green-700 py-3">Overview</h1>
      <div className="flex flex-wrap gap-4 w-full">
        <div className="flex flex-row w-full gap-4 justify-evenly">
          <div className="flex flex-col gap-2 shadow-lg p-2 w-1/2 rounded-xl">
            <div className="text-xs text-gray-400">Total Area</div>
            <div className="text-lg font-semibold text-green-700">
              2.5 Acres
            </div>
          </div>
          <div className="flex flex-col gap-2 shadow-lg p-2 w-1/2 rounded-xl">
            <div className="text-xs text-gray-400">Crop</div>
            <div className="text-lg font-semibold">Rice</div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4 justify-evenly">
          <div className="flex flex-col gap-2 shadow-lg p-2 w-1/2 rounded-xl">
            <div className="text-xs text-gray-400">Cultivation Type</div>
            <div className="text-lg font-semibold text-orange-700">Organic</div>
          </div>
          <Link to={"./tasks"} className="w-1/2">
            <div className="px-4 py-2 bg-green-700 text-white rounded-xl flex flex-row justify-between gap-3 items-center">
              <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-200">Tasks Completed</div>
                <div className="text-lg font-semibold text-white">6/9</div>
              </div>
              <img
                src="/icons/angle-right-solid.svg"
                alt="arrow"
                className="w-5 h-5"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Graph = () => {
  return (
    <div className="p-3 rounded-3xl shadow-lg">
      <h1 className="text-2xl font-semibold text-green-700 py-3">
        Moisture Evaluation
      </h1>
      <img
        src="https://img.freepik.com/premium-vector/business-profit-increasing-concept-graph-chart-vector-stock-market-price-rising-with-green-infographic-chart-vector-share-market-business-financial-growth-success-info-vector_585735-700.jpg?w=360"
        alt="graph"
        className="w-full rounded-3xl"
      />
    </div>
  );
};

export const FarmChip = ({ date, status }) => {
  return (
    <div>
      <Link to={"farm/1"}>
        <div
          className="w-full rounded-3xl bg-cover bg-center flex flex-col justify-between items-end gap-8 shadow-lg"
          style={{
            backgroundImage:
              "url(https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg)",
          }}
        >
          <div className="p-3 bg-white rounded-tl-3xl rounded-br-3xl list-none flex flex-col items-stretch gap-2 text-right w-2/3">
            <div className="p-1">
              <div className="text-xs text-gray-400">Last Updated:</div>
              <li className="text-sm text-green-700 font-semibold">
                16 Feb 2024
              </li>
            </div>
            <div className="p-1">
              <div className="head5 text-gray-400">Soil Status</div>
              <li className="text-sm text-red-700 font-semibold">
                Severe Underhydration
              </li>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};