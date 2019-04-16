import * as React from "react";
import "./App.css";
import Header from './components/Header';
import Indicitors from './containers/Indicitors';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Indicitors/>
      </div>
    );
  }
}

export default App;
