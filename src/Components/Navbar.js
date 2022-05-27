import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div class="bg-img">
      <div class="container">
        <div class="topnav">
          <a href="#home">Squirrel Map</a>
          <a href="#news">Groundhog Facts</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#home">Squirrel Facts </a>
          <a href="#home">Chipmunk Facts</a>
        </div>

        <p id="logo" className="logo"></p>
      </div>
    </div>
  );
}

export default Navbar;
