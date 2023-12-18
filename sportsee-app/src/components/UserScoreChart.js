import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const UserScoreChart = ({ score }) => {
  // Assurez-vous que le score est dans la plage [0, 100]
  const normalizedScore = Math.max(0, Math.min(score, 100));

  // Couleurs pour les sections du diagramme circulaire
  const colors = ['#8884d8', '#eee'];

  // Données pour le diagramme circulaire
  const data = [
    { name: 'Score', value: normalizedScore },
    { name: 'Reste', value: 100 - normalizedScore },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          startAngle={90}
          endAngle={-270}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserScoreChart;
