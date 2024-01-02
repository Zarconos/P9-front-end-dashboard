import React from "react";
import swim from "../assets/swim.svg";
import ride from "../assets/ride.svg";
import zen from "../assets/zen.svg";
import lift from "../assets/lift.svg";
import "../style/SideBar.css";
import "../style/Style.css"

export default function SideBar() {
    return (
        <div className="sidebar">
          <div className="side-container">
            
            <img src={zen} alt="side" />
          </div>
          <div className="side-container">
            <img src={swim} alt="side" />
          </div>
          <div className="side-container">
            <img src={ride} alt="side" />
          </div>
          <div className="side-container">
            <img src={lift} alt="side" />
          </div>
          <div className="copyright-container">
            <p className="copyright-text">© SportSee 2020</p>
          </div>
        </div>
      );
    };

