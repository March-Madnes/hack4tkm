import React from 'react'
import CropCard from '../../components/CropCard'
import FarmTasks from "../FarmTasks";

const Recommend = () => {
  return (
    <div>
      <div>
        <h1 className="mb-2 text-green-700 text-xl font-bold">
          Crop Recommendations
        </h1>
        <p className="text-xs text-gray-500">
          Below are a list of crops which fit the farm. Please Select any one of
          them to move forward.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 py-4">
          <div className="w-2/5">
            <CropCard />
          </div>
          <div className="w-2/5">
            <CropCard />
          </div>
          <div className="w-2/5">
            <CropCard />
          </div>
          <div className="w-2/5">
            <CropCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend