import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import fakePieData from "../data/fakePieData.json";
const Piechart = () => {
  //const [data, setData] = useState(fakePieData);

  const [data, setData] = useState();

  const fetchData = () => {
    return fetch("http://127.0.0.1:3000/api/wallet")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

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
