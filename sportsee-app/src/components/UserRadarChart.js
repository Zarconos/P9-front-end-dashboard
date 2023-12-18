import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const UserRadarChart = ({ performanceData }) => {
  const { kind, data } = performanceData;

  const radarData = data.map((item) => ({
    category: kind[item.kind],
    value: item.value,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={150} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis />
        <Radar
          name="Performance"
          dataKey="value"
          fill="rgba(136, 132, 216, 0.6)"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UserRadarChart;
