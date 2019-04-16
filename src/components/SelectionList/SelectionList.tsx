import * as React from "react";
import "./SelectionList.css";

export default function SelectionList() {
  const style1 = {
    background: "green"
  }
  const style2 = {
    background: "blue"
  }
  return (
    <div className="SelectionList show">
      <ul className="no-list-style">
        <li className="option">
        {/* <div /> */}
        </li>
        <li className="option active" style={style1}>
        {/* <div /> */}
        </li>
        <li className="option" style={style2}>
        {/* <div /> */}
        </li>
      </ul>
    </div>
  );
}
