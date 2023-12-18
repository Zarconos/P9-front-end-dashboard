import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserChartActivity = ({ userData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={userData.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="rgba(136, 132, 216, 0.2)" stroke="rgba(136, 132, 216, 1)" strokeWidth={1} name="Poids (kg)" />
        <Bar dataKey="calories" fill="rgba(130, 202, 157, 0.2)" stroke="rgba(130, 202, 157, 1)" strokeWidth={1} name="Calories brûlées (kCal)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserChartActivity;