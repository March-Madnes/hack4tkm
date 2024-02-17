import React, { useState } from "react";
import { ReactCam } from "../components/ReactCam";
import { FarmHeader } from "../components/Farm";

const NewFarm = () => {
  const [selectedValue, setSelectedValue] = useState("default");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-3 flex flex-col justify-center items-center">
      <div
        className="w-full h-60 rounded-3xl bg-cover bg-center flex flex-col justify-between items-center gap-8 shadow-lg"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg)",
        }}
      ></div>
      <div className="p-3 bg-white w-4/5 rounded-3xl list-none flex flex-col items-stretch gap-2 -mt-4 shadow-lg">
        <h1 className="text-2xl text-green-700 font-bold">Analytics Report</h1>
        <div className="p-1 flex flex-row flex-wrap">
          <div className="p-1 w-1/2">
            <div className="text-xs text-gray-400">Soil Type</div>
            <li className="text-green-700 font-semibold">Red Soil</li>
          </div>
          <div className="p-1 w-1/2">
            <div className="text-xs text-gray-400">Soil Moisture(%)</div>
            <li className="text-green-700 font-semibold">50</li>
          </div>
          <div className="p-1 w-1/2">
            <div className="text-xs text-gray-400">Location</div>
            <li className="text-green-700 font-semibold">50</li>
          </div>
          <div className="p-1 w-1/2">
            <div className="text-xs text-gray-400">Expected Rainfall</div>
            <li className="text-green-700 font-semibold">50</li>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white w-4/5 rounded-3xl list-none flex flex-col items-stretch gap-2 shadow-lg mt-2"
      >
        <label className="py-3">
          Enter a name for your farm:
          <input
            type="text"
            className="text-2xl pt-4 text-green-700 font-bold border-b-2 border-dashed border-green-700 p-2 w-full"
            placeholder="My New Farm"
          />
        </label>
        {/* <label>
          Dropdown:
          <select value={selectedValue} onChange={handleDropdownChange}>
            <option value="default">Default Value</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label> */}
        {/* Add more form fields here */}
        <div className="flex flex-row w-full gap-4 justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="rounded-full bg-blue-700 p-3 w-fit"
            >
              <img
                src="icons/camera-solid.svg"
                className="h-6 w-6"
                alt="submit"
              ></img>
            </button>
            <span className="text-xs text-gray-500 pt-1">Retake</span>
          </div>
          {/* <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="rounded-full border-green-700 border-2 p-3 w-fit"
            >
              <img
                src="icons/pencil-solid.svg"
                className="h-6 w-6"
                alt="submit"
              ></img>
            </button>
            <span className="text-xs text-gray-500 pt-1">Edit</span>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="rounded-full bg-green-700 p-3 w-fit"
            >
              <img
                src="icons/check-solid.svg"
                className="h-6 w-6"
                alt="submit"
              ></img>
            </button>
            <span className="text-xs text-gray-500 pt-1">Submit</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewFarm;
