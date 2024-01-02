import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const UserScoreChart = ({ score }) => {
  // Vérifier si le score est défini
  if (score === undefined || score === null) {
    // Vous pouvez afficher un message d'erreur ou un indicateur de chargement ici
    return <div>Score non disponible</div>;
  }
  const normalizedScore = Math.max(0, Math.min(score * 100, 100));  // Conversion en pourcentage
  const rest = 100 - normalizedScore;

  const data = [
    { name: 'Score', value: normalizedScore },
    { name: 'Reste', value: rest },
  ];

  const COLORS = ['#ff0000', '#ffffff']; // Couleur pourcentage et couleur reste

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          paddingAngle={5} // Augmente l'espace entre les sections
          startAngle={90} // Commence à 90 degrés (haut du cercle)
          endAngle={-270} // Termine à -270 degrés (360 - 90)
          dataKey="value"
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
          fill={COLORS[0]} // Couleur du pourcentage
          fontSize="20"
        >
           {`${parseFloat(normalizedScore.toFixed(2))}% de votre objectif`}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserScoreChart;
