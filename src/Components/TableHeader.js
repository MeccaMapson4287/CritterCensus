import React from "react";
import "./TableStyle.css";

function TableHeader() {
  return (
    <div>
      <h1>Critter Facts</h1>
      <div className="table-header">
        <div>Squirrel Map</div>
        <div>Groundhog Facts</div>
        <div>Chipmunk Facts</div>
        <div>Wombat Facts</div>
      </div>
    </div>
  );
}

export default TableHeader;
