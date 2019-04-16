import * as React from "react";
import IndicitorCard from "../../components/IndicitorCard";
import SelectionList from "../../components/SelectionList";
import "./Indicitors.css";

class Indicitors extends React.Component {
  public render() {
    return (
      <div className="Indicitors">
        <div className="select-city">
        <SelectionList/>
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
