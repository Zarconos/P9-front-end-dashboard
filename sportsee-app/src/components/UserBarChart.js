import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Barchart.css"
import "../style/Style.css"

const UserBarChart = ({ userData }) => {
  // Vérifier si userData.sessions est défini
  if (!userData || !userData.data || !userData.data.sessions) {
    // Vous pouvez afficher un message d'erreur ou un indicateur de chargement ici
    return <div>Données non disponibles</div>;
  }
  
  // Extracting weight values to calculate YAxis domain
  const weightValues = userData.data.sessions.map(session => session.kilogram);
  const caloriesValues = userData.data.sessions.map(session => session.calories);
  const minWeight = Math.min(...weightValues);
  const maxWeight = Math.max(...weightValues)
  const maxCalories = Math.max(...caloriesValues);
  const minCalories = Math.min(...caloriesValues);

  return (
    <div className="bar-chart-container"> {/* Ajoutez une classe pour styler le conteneur du graphique */}
      <h4 className="chart-title">Activité quotidienne</h4> {/* Ajoutez un titre au-dessus à gauche */}

      <ResponsiveContainer width={702} height={250}>
        <BarChart data={userData.data.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickFormatter={(value) => value + 1} axisLine={{ stroke: 'none' }} tickLine={{ stroke: 'none' }}/>
        <YAxis dataKey="kilogram" yAxisId="left"orientation="right" type="number" domain={[minWeight - 2, maxWeight + 1]} axisLine={{ stroke: 'none' }} tickLine={{ stroke: 'none' }} />
        <YAxis dataKey="calories" yAxisId="right" orientation="left" domain={[minCalories -100, maxCalories +100]} hide width={0} />

        <Tooltip
          contentStyle={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '5px',
            fontSize: '12px',
            height: '82px',
            width: '39px',
          }}
          labelStyle={{ color: 'red' }}
          itemStyle={{ color: 'white' }}
          label="" // Cacher le label
          formatter={(value, name) => {
            if (name === 'Poids (kg)') {
              return [`${value} kg`, '']; // Ajouter un retour à la ligne
            } else if (name === 'Calories brûlées (kCal)') {
              return [`${value} kCal`, '']; // Inclure "Calories:" et ajouter un retour à la ligne
            }
            return [value];
          }}
        />
        <Legend 
        iconType="circle" // Utilisez des icônes de cercle pour la légende
            wrapperStyle={{ color: '#000' }} />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#000"
          stroke="#000"
          strokeWidth={1}
          barSize={7}
          radius={[10, 10, 0, 0]}
          stackId="a"
          yAxisId="left" // Ajoutez cela si votre axe Y par défaut est à gauche
        />
        <Bar
          dataKey="calories"
          fill="#F00"
          stroke="#F00"
          strokeWidth={1}
          name="Calories brûlées (kCal)"
          barSize={7}
          radius={[10, 10, 0, 0]}
          stackId="b"
          yAxisId="right"
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default UserBarChart;
