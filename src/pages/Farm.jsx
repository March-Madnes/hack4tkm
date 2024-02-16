import React from "react";
import { FarmHeader, Graph, Overview } from "../components/Farm";
import LineChart from "../components/Chart";

const Farm = () => {
  return (
    <div className="p-3">
      <FarmHeader />
      <Overview />
      {/* <Graph /> */}
      <LineChart />
    </div>
  );
};

export default Farm;
