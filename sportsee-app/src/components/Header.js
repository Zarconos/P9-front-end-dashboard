import React from "react";
import logo from "../assets/logo.svg"; // Assurez-vous d'importer le chemin correct du logo

import "../style/header.css"; // Assurez-vous d'importer le fichier CSS

export default function Header() {
    return (
      <header className="header">
        <div id="Head_Logo">
        <img src={logo} alt="sportSee" className="logo" aria-label="logo sportSee" />
        <h1>SportSee</h1>
        </div>
        <nav className="nav">
          <a href="/">Accueil</a>
          <a href="/">Profil</a>
          <a href="/">Réglage</a>
          <a href="/">Communauté</a>
        </nav>
      </header>
    );
  };
