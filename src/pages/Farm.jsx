import React from "react";
import { FarmHeader, Graph, Overview } from "../components/project/Farm";

const Farm = () => {
  return (
    <div className="p-3">
      <FarmHeader />
      <Overview />
      <Graph />
    </div>
  );
};

export default Farm;
