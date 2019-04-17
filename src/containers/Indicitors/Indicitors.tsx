import * as React from "react";
import IndicitorCard from "../../components/IndicitorCard";
import SelectionList from "../../components/SelectionList";
import "./Indicitors.css";

class Indicitors extends React.Component {
  public cities = [
      { name: "Riyadh", imageURL: "riyadh", type: "City" },
      { name: "Makkah", imageURL: "makkah", type: "City" },
      { name: "Madinah", imageURL: "madinah", type: "City" },
      { name: "Jeddah", imageURL: "jeddah", type: "City" },
      { name: "Dammam", imageURL: "dammam", type: "City" }
    ]
  public render() {
    return (
      <div className="Indicitors">
        <div className="select-city">
        <SelectionList list={this.cities}/>
        </div>
        <div className="toolbar">{/* TODO */}</div>
        <div className="list-of-indicitors">
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        <IndicitorCard/>
        </div>
      </div>
    );
  }
}

export default Indicitors;
