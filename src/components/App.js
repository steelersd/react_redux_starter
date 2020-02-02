import React from "react";
import NameFormContainer2 from "../containers/SampleFormContainer";
import DisplayContainer from "../containers/DisplayContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guid: "",
      fetching: false
    };
  }

  render() {
    return (
      <div className="App">
        <NameFormContainer2 />
        <DisplayContainer speak={"Hello"} />
      </div>
    );
  }
}

export default App;
