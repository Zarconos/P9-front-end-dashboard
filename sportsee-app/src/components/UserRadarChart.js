import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const UserRadarChart = ({ performanceData }) => {
  const { kind, data } = performanceData;

  const radarData = data.map((item) => ({
    category: kind[item.kind],
    value: item.value,
  }));

  return (
    <ResponsiveContainer width={258} height={263}>
      <RadarChart outerRadius={90} data={radarData} style={{ background: '#282D30', borderRadius: '5px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)' }}>
        <PolarGrid  />
        <PolarAngleAxis dataKey="category" tick={{ fill: 'white', fontSize: 12 }} axisLine={{ stroke: 'white' }} />
        <PolarRadiusAxis display="none" />
        <Radar
          name="Performance"
          dataKey="value"
          fill="red"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UserRadarChart;
