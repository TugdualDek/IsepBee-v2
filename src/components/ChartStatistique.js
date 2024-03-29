import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import "../style/wallet.css";
import CustomToolTip from "./CustomToolTip";
import fakeData from "../data/fakeData.json";

function ChartStatistique() {
  const [data, setData] = useState();

  const fetchData = () => {
    return fetch("http://127.0.0.1:3000/api/performance")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Unable to contact the server");
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
        setData(fakeData);
      });
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chartStatistique">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6EDCB5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6EDCB5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} tick={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip content={<CustomToolTip />} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartStatistique;
