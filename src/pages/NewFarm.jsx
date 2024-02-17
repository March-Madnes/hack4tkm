import React, { useState } from "react";
import { ReactCam } from "../components/ReactCam";
import { FarmHeader } from "../components/Farm";
import Recommend from "./recommend/Recommend";
import { Link } from "react-router-dom";

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
        <label className="py-3 font-bold">
          1. Enter a name for your farm:
          <input
            type="text"
            className="text-lg pt-4 px-2 text-green-700 font-medium border-b-2 border-dashed border-green-700 w-full"
            placeholder="My New Farm..."
          />
        </label>
        <div className="py-3">
          <div className="font-bold">
            2. Enter soil nutrients details of the land:
          </div>
          <div className="flex flex-row gap-2 justify-center items-center p-1 mt-2 border-red-100 border-2 rounded-md">
            <p className="w-1/2 text-xs text-orange-500 p-0">
              You can get these from govt. issued Soil Health Card
            </p>
            <a
              href="https://soilhealth.dac.gov.in/print-shc"
              className="bg-green-700 p-2 rounded-md text-white w-1/2 text-center"
            >
              Print SHC
            </a>
          </div>
          <label className="p-2">
            <input
              type="text"
              className="text-lg text-green-700 font-medium border-b-2 border-dashed border-green-700 pt-4 px-2 w-fit"
              placeholder="Nitrogen KG/HA"
            />
          </label>
          <label className="p-2">
            <input
              type="text"
              className="text-lg text-green-700 font-medium border-b-2 border-dashed border-green-700 pt-4 px-2 w-fit"
              placeholder="Phosphorus KG/HA"
            />
          </label>
          <label className="p-2">
            <input
              type="text"
              className="text-lg text-green-700 font-medium border-b-2 border-dashed border-green-700 pt-4 px-2 w-fit"
              placeholder="Potassium KG/HA"
            />
          </label>
        </div>
        {/* <label>
          Dropdown:
          <select value={selectedValue} onChange={handleDropdownChange}>
            <option value="default">Default Value</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label> */}
        <div className="py-3">
          <Recommend />
        </div>
        {/* Add more form fields here */}
        <div className="flex flex-row w-full gap-4 justify-evenly">
          <div className="flex flex-col justify-center items-center">
          <Link to="/camera" state={{ from: "newFarm" }} >
            <button
              type="submit"
              className="rounded-full bg-blue-700 p-3 w-fit"
            >
              <img
                src="icons/camera-solid.svg"
                className="h-6 w-6"
                alt="submit"
              ></img>
            </button></Link>
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
