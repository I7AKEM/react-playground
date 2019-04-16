import * as React from "react";
import IndicitorCard from "../../components/IndicitorCard";
import SelectionList from "../../components/SelectionList";
import "./Indicitors.css";

class Indicitors extends React.Component {
  public cities = [
      { name: "riyadh", imageURL: "riyadh", type: "City" },
      { name: "makkah", imageURL: "makkah", type: "City" },
      { name: "madinah", imageURL: "madinah", type: "City" },
      { name: "jeddah", imageURL: "jeddah", type: "City" },
      { name: "dammam", imageURL: "dammam", type: "City" }
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
