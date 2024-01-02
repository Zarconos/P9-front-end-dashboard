import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const UserLineChart = ({ averageSessionsData }) => {
  // Vérifier si averageSessionsData et averageSessionsData.sessions sont définis
  if (!averageSessionsData || !averageSessionsData.sessions) {
    // Vous pouvez afficher un message d'erreur ou un indicateur de chargement ici
    return <div>Données non disponibles</div>;
  }
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <ResponsiveContainer width={258} height={263}>
      <LineChart data={averageSessionsData.sessions} style={{ background: 'red', borderRadius: '5px', }}margin={{ left: -55, top: 50, }}>
        <CartesianGrid strokeDasharray="3 3" stroke={{ display: 'none' }} />
        <XAxis dataKey="day" tick={{ fill: 'white' }} axisLine={{ stroke: 'none' }} tickLine={{ stroke: 'none' }} tickFormatter={(value) => days[value - 1]}/>
        <YAxis tick={{ display: 'none' }} axisLine={{ stroke: 'none' }} tickLine={{ stroke: 'none' }} />
        <Tooltip labelStyle={{ display: 'none' }}
        itemStyle={{ color: 'black' }} formatter={(value) => [`${value} min`]}/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          name="Durée de session (minutes)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserLineChart;

