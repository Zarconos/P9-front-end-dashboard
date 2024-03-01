import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import "./style/header.css"
import "./style/Style.css"
import SideBar from './components/Sidebar';


const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(18);

  const handleUserChange = (userId) => {
    setSelectedUserId(Number(userId));
    // ajouter booleen pour switch data //
  };

  return (
    <div>
      <Header />
        <div id="main">
          


          <SideBar />
          <UserProfile userId={selectedUserId} />

        </div>
        <div id="User_Select" className="red-background">
        <label id="User_Select_Tag">Sélectionner un utilisateur :</label>
          <select value={selectedUserId} onChange={(e) => handleUserChange(e.target.value)}>
            <option value="12">Utilisateur 12</option>
            <option value="18">Utilisateur 18</option>
          </select>
          </div>
    </div>
  );
};

export default App;

