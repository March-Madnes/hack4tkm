import React, { useEffect } from 'react'
import './project.css'
import { Link } from "react-router-dom";
import { FarmChip } from "../Farm";
import Navbar from '../Navbar';

export const Project = () => {
  return (
    <div className="mx-auto max-w-screen-md">
      <div className="back-banner h-20 p-3 bg-green-700 flex justify-between">
        <div>
          <div className="head3 text-[#fff]">i-Moisture</div>
          <div className="head1 text-[#fff] tracking-wide">
            <b>Kollam</b>
          </div>
        </div>
        <div className="text-white pr-3">
          <div className="flex justify-end align-center pb-3">
            <>25°C</>
            <i className="fa-solid fa-temperature-three-quarters pl-3"></i>
          </div>
          <div className="flex justify-end align-center">
            17/02/2024
            <i className="fa-solid fa-calendar-days pl-3"></i>{" "}
          </div>
        </div>
      </div>

      <div className="head2 px-3 pt-3 font-normal">Your Farms</div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
        <FarmChip date={"16 Feb 2024"} status={"Severe Underhydration"} />
        <FarmChip date={"16 Feb 2024"} status={"Severe Underhydration"} />
        <FarmChip date={"16 Feb 2024"} status={"Severe Underhydration"} />
        <div class="p-6 border rounded-3xl shadow-lg border-green-700 flex align-center flex-col items-center justify-center text-center">
        <Link to="/camera" state={{ from: "newFarm" }} > <img
            src="icons/camera-solid.svg"
            alt="camera"
            className="w-16 h-16 m-auto  bg-green-700 p-5 rounded-full"
        /></Link>
          <h5 className="text-sm font-bold tracking-wide text-gray-500">
            Add new Farm
          </h5>
        </div>
      </div>

      {/* // update for today page */}
      <div className="p-3">
        <div className="head2 pb-3 pt-2 font-normal">Daily Updates</div>
        <NewsChip
          title="Local Cashew Crop Prices"
          content="Local cashew prices have skyrocketed due to increased demand."
        />
        <NewsChip
          title="Icoming Heavy Rainfall Warning"
          content="Kerala is expected to recieve very heavy rainfall from the coming monsoon"
        />
      </div>
      <Navbar />
    </div>

  );
};

export const NewsChip = ({ title, content }) => {
  return (
    <div
      id="toast-notification"
      class="w-full p-4 text-gray-900 bg-white rounded-3xl border shadow-lg mb-3 "
      role="alert"
    >
      <div class="flex items-center">
        <div class="relative inline-block shrink-0">
          <span class=" inline-flex items-center justify-center w-8 h-8 bg-[#00b251] rounded-full p-2 fill-white">
            <img
              src="icons/message-icon.svg"
              alt="message icon"
              className="w-8 h-8 m-auto fill-white"
            />
          </span>
        </div>
        <div class="ms-3 text-sm font-normal">
          <div class="text-sm font-semibold text-gray-900">{title}</div>
          <div class="text-sm font-normal">{content}</div>
        </div>
      </div>
    </div>
  );
};