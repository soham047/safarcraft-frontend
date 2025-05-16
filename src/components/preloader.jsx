// src/components/Preloader.jsx
import React from "react";
import "./Preloader.css"; // We'll write animation CSS here

export default function Preloader() {
  return (
    <div className="preloader-container">
      <div className="balls-loader">
        <span className="ball ball1"></span>
        <span className="ball ball2"></span>
        <span className="ball ball3"></span>
      </div>
    </div>
  );
}
