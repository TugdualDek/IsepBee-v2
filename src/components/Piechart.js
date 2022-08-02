import React, { useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import fakePieData from "../data/fakePieData.json";
const Piechart = () => {
  const [data, setData] = useState(fakePieData);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="students"
        outerRadius={150}
        label="true"
        width={300}
        height={300}
      ></Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Piechart;
