import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import PosterDisplayContainer from "./Containers/PosterDisplayContainer";
import { PDFViewer } from "react-pdf";
import "./App.css";
import PosterComponent from "./Components/PosterComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <PosterDisplayContainer />
        <PDFViewer>
          <PosterComponent />
        </PDFViewer>
      </Fragment>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
