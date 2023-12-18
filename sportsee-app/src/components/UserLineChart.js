import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const UserLineChart = ({ averageSessionsData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={averageSessionsData.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(136, 132, 216, 1)"
          strokeWidth={2}
          name="Durée de session (minutes)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserLineChart;
