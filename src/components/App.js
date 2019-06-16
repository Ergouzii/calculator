import React from 'react';
import './App.css';
import Result from './Result';
import KeyPad from './KeyPad';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: '' // the result is initially 0
        };

        this.onClick = this.onClick.bind(this)
    }

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line no-eval
                result: eval(this.state.result)
            })
        } catch (e) {
            this.handleError()
        }

    };

    reset = () => {
        this.setState({
            result: ''
        })
    };

    // if invalid input, prompt error message and reset automatically after 1 second
    handleError = () => {
        this.setState({
            result: 'invalid input!'
        });
        setTimeout(() => {
            this.reset()
        }, 1000)
    };

    onClick = button => {
        if (button === '=') {
            this.calculate()
        } else if (button === 'AC') {
            this.reset()
        } else if (button === 'CE') {
            this.setState({
                result: this.state.result.slice(0, -1)
            })
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

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
