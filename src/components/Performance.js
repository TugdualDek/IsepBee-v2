import React, { useEffect, useState } from "react";
import ChartPerformance from "./ChartPerformance.js";
import "../style/performance.css";

function Performance() {
  return (
    <div className="performance">
      <p className="titlePerformance">Our performance</p>
      <p className="textPerformance">
        Our past performances don’t reflect our future performances. <br />
        We never know how the market can go, investing may leads to loss of
        money !
      </p>
      <div>
        <ChartPerformance />
      </div>
    </div>
  );
}

export default Performance;
