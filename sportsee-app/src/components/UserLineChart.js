import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import '../style/Style.css';

const CustomDot = ({ cx, cy, stroke, onMouseEnter, onMouseLeave }) => {
  const rectangleWidth = "100%";
  const rectangleHeight = "100%";

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={0.2}
        fill="transparent"  // Rend le cercle invisible
        stroke="transparent"
        strokeWidth={10}
        onMouseEnter={() => {
          setIsMouseOver(true);
          onMouseEnter && onMouseEnter();
        }}
        onMouseLeave={() => {
          setIsMouseOver(false);
          onMouseLeave && onMouseLeave();
        }}
      />
      {isMouseOver && (
        <rect

        />
      )}
    </>
  );
};

const UserLineChart = ({ userData }) => {
  if (!userData || !userData.data.sessions) {
    return <div>Données non disponibles</div>;
  }

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <ResponsiveContainer width={258} height={263}>
      <LineChart
        data={userData.data.sessions}
        style={{ background: 'red', borderRadius: '5px' }}
        margin={{ left: -55, top: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={{ display: 'none' }} />
        <XAxis
          dataKey="day"
          tick={{ fill: 'white' }}
          axisLine={{ stroke: 'none' }}
          tickLine={{ stroke: 'none' }}
          tickFormatter={(value) => days[value - 1]}
        />
        <YAxis
          tick={{ display: 'none' }}
          axisLine={{ stroke: 'none' }}
          tickLine={{ stroke: 'none' }}
        />
<Tooltip 
  labelStyle={{display: 'none'}}
  itemStyle={{color: 'black'}} 
  formatter={(value) => [`${value} min`]}
  cursor={false} // disable tooltip cursor
  stroke="none" // remove connector line

/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF80"
          strokeWidth={2}
          dot={<CustomDot />}
          name="Durée de session (minutes)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserLineChart;
