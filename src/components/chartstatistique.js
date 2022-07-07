import React, { useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import "../style/wallet.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {`Date : ${label}`}
          <br />
          {`Price : ${payload[0].value} $`}
        </p>
      </div>
    );
  }

  return null;
};

const data = [
  {
    name: "01 Avril",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "05 Avril",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "10 Avril",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "15 Avril",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "20 Avril",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25 Avril",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "30 Avril",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "05 Mai",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "10 Mai",
    uv: 2685,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "15 Mai",
    uv: 3496,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "20 Mai",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25 Mai",
    uv: 4268,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "30 Mai",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "05 Juin",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "10 Juin",
    uv: 1247,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "15 Juin",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "20 Juin",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25 Juin",
    uv: 4132,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "30 Juin",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function App() {
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
          <Tooltip content={<CustomTooltip />} />
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
