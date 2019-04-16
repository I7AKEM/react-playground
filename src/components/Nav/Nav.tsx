import * as React from "react";
import Icon from '../Icon';
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
            <nav>
            <ul className="hide-on-mobile">
              <li>Indicitors</li>
            </ul>
            <div className="hamburger-menu">
                <Icon name="menu"/>
            </div>
        </nav>
    </div>
  );
}
