import * as React from "react";
import { connect } from 'react-redux';
import IndicitorCard from "../../components/IndicitorCard";
import SelectionList from "../../components/SelectionList";
import "./Indicitors.css";

interface IProps {
  periodicity?: number;
  onChangePeriodicity?: any
}

class Indicitors extends React.Component<IProps> {
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
        { this.props.periodicity }
        <button onClick={this.props.onChangePeriodicity}>Change periodicity</button>
        </div>
      </div>
    );
  }
}

const mapStatetoProp = (state: { periodicity: any; }) => {
  return {
    periodicity: state.periodicity
  }
}

const mapDispatchtoProp = (dispatch: any) => {
  return {
    onChangePeriodicity: () => dispatch({type: "onChangePeriodicity", })
  }
}

export default connect(mapStatetoProp, mapDispatchtoProp)(Indicitors);
