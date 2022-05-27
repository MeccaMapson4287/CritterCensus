import React from "react";
import "./TableStyle.css";

function TableRow(props) {
  return (
    <div className="table-rows">
      <div>{props.squirrel.facts}</div>
      <div>{props.Groundhog.facts}</div>
      <div>{props.chipmunk.facts}</div>
      <div>{props.Wombat.facts}</div>
    </div>
  );
}

export default TableRow;
