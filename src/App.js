import React, { Component } from 'react';
import Note from "./Note";

class App extends Component {

  state = {  }

  handleValueChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        {/* <Note /> */}
        <div className="columns">
          <div className="column has-background-grey-darker has-text-grey-lighter is-2">
            Notebooks
          </div>

          <div className="column has-background-white-ter is-3">
            Note previews
          </div>

          <div className="column has-background-white">
            Note canvas
          </div>
        </div>
      </div>
    )
  };
}

export default App;
