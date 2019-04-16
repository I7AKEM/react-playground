import * as React from "react";
import "./Icon.css";

export default function Icon(porps: {name: string}) {
  const iconName = "icon-" + porps.name;
  return (
    <div className="Icon">
      <i className={iconName} />
    </div>
  );
}
