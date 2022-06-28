import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Piechart = () => {
  const data = [
    { name: "Bitcoin", students: 400, fill: "#8884d8" },
    { name: "Ethereum", students: 700, fill: "#1af624" },
    { name: "DogeCoin", students: 200, fill: "red" },
    { name: "Solana", students: 1000, fill: "white" },
  ];
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
