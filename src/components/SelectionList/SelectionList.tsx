import * as React from "react";
import { useState } from "react";
import "./SelectionList.css";

export interface IListProps {
  list: IOption[];
}

export interface IOption {
  name: string;
  type?: string;
  imageURL: string;
}

export default function SelectionList(props: IListProps) {
  const [showAllList, setShow] = useState(true);
  const [selectionListClasses, setClass] = useState(["SelectionList", "show"]);
  const [selected, setSelected] = useState(0);
  const optionClickedHandler = (index: number) => {
    setShow(!showAllList);
    setSelected(index);
  };
  React.useEffect(() => {
    if (showAllList) {
      console.log(showAllList);
      setClass(["SelectionList", "show"]);
    } else {
      setClass(["SelectionList"]);
    }
  }, [showAllList]);
  return (
    <div className={selectionListClasses.join(" ")}>
      <ul className="no-list-style">
        {props.list.map((option: any, index: number) => {
          return (
            <li
              key={index}
              className={"option" + (selected === index ? " active" : "")}
              onClick={optionClickedHandler.bind(null, index)}
              style={{
                background:
                  "url(" +
                  require(`../../assets/img/${option.imageURL}.png`) +
                  ") no-repeat"
              }}
            >
            <div className="content">
              <div className="title">
                <span>{option.name}</span>
              </div>
              <div className="type">
                <span>{option.type}</span>
              </div>
            </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
