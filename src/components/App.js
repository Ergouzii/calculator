import React from 'react';
import './App.css';
import Result from './Result';
import KeyPad from './KeyPad';
import ClearBtn from './ClearBtn'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      result: '0' // the result is initially 0
    };

    this.onClick = this.onClick.bind(this)
  }

  onClick() {

  }

  render() {
    return (
        <div className="App">
          <h1>React Calculator</h1>
          <div className="wrapper">
            <Result result={this.state.result}/>
            <KeyPad onClick={this.onClick}/>
          </div>
        </div>
    );
  }

}

export default App;
