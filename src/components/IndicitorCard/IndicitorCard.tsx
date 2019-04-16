import * as React from "react";
import "./IndicitorCard.css";

export default function IndicitorCard() {
  return (
    <div className="IndicitorCard  lg-shadow">
      <a>
        <div className="Card">
          <h3 className="small-title">District</h3>
          <div className="card-content">
            <div className="lg-text">
              <span>0000</span>
            </div>
            <div className="sm-text">
              <span>SR</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
