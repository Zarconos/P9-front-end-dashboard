import React, { useState } from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(12); // Par défaut, affiche le user 12

  const handleUserChange = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <h1>Application SportSee</h1>

      <label>Sélectionner un utilisateur :</label>
      <select value={selectedUserId} onChange={(e) => handleUserChange(e.target.value)}>
        <option value={12}>Utilisateur 12</option>
        <option value={18}>Utilisateur 18</option>
      </select>

      <UserProfile userId={selectedUserId} />
    </div>
  );
};

export default App;