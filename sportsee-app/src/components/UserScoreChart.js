import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../style/Style.css"

const UserScoreChart = ({ userData }) => {
  if (!userData || (!userData.data.todayScore && !userData.data.score)) {
    return <div>Données non disponibles</div>;
  }


  const score = userData.data.todayScore || userData.data.score;

  const normalizedScore = Math.max(0, Math.min(score * 100, 100)); 
  const rest = 100 - normalizedScore;

  const data = [
    { name: 'Score', value: normalizedScore },
    { name: 'Reste', value: rest },
  ];

  const COLORS = ['#ff0000', '#ffffff']; 
  const startAngle = 90; 
  const endAngle = 360; 
  
  return (
    <div style={{ position: 'relative', top: '-81px', left: '-44px' }}>
    <ResponsiveContainer width={258} height={400} >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          paddingAngle={5}
          startAngle={startAngle}
          endAngle={endAngle}
          dataKey="value"
          cornerRadius={15}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <text
        x="50%"
        y="50%"
        dy={8}
        textAnchor="middle"
        fill="#282D30" 
        fontSize="26px"
        fontFamily="Roboto"
        fontWeight="700"
      >
         {`${parseFloat(normalizedScore.toFixed(2))}%`}
      </text>
      <text
        x="50%"
        y="60%"
        dy={8}
        textAnchor="middle"
        fill="#74798C" 
        fontSize="16px"
        fontFamily="Roboto"
        fontWeight="500"
        className="com_percentage"
      >
         {`de votre objectif`}
      </text>
      </PieChart>
    </ResponsiveContainer></div>
  );
};

export default UserScoreChart;
