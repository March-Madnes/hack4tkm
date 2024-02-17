import React from "react";
import { FarmHeader, Graph, Overview } from "../components/Farm";
import LineChart from "../components/Chart";
import Navbar from "../components/Navbar";


const Farm = () => {
  return (
    <div className="p-3">
      <FarmHeader />
      <Overview />
      {/* <Graph /> */}
      <LineChart />
      <Navbar />
    </div>
  );
};


export default Farm;
