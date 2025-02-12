import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import "../style/Style.css"

const UserRadarChart = ({ userData }) => {
  if (!userData || !userData.data.kind || !userData.data.data) {
    return <div>Données non disponibles</div>;
  }

  const kindData = userData.data.kind;
  const performanceData = userData.data.data.map(item => ({ category: kindData[item.kind], value: item.value }));

  return (
    <ResponsiveContainer width={258} height={263}>
      <RadarChart
        outerRadius={90}
        data={performanceData}
        style={{
          background: '#282D30',
          borderRadius: '5px',
          boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
        }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="category"
          tick={{ fill: 'white', fontSize: 12 }}
          axisLine={{ stroke: 'white' }}
        />
        <PolarRadiusAxis display="none" />
        <Radar name="Performance" dataKey="value" fill="red" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UserRadarChart;

