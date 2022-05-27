import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import "./App.css";
import NavBar from "./Components/Navbar";
import Information from "./Components/Information";
const earnings = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Information />
        <div className="card">
          <VictoryChart domainPadding={20} them={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Squirrels", "Chipmunks", "Wombats", "Groundhogs"]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />

            <VictoryBar data={earnings} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default App;
