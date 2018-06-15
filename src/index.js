import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Cell extends React.Component {
    render(props){
        return(
            <div
                className="calc-cell"
                onClick = {this.props.onClick}
            >{this.props.value}</div>
        )
    }
}


class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstNum : "",
            operator: null,
            secondNum: "",
            firstNumDone: false,
            result: "no result",
        };
    }

    handleClick(i){
        if (i == "="){
            var f = Number(this.state.firstNum);
            var s = Number(this.state.secondNum);
            var r;

            if (this.state.operator == "+"){
                r = f + s;
            } else if (this.state.operator == "-"){
                r = f - s;
            } else if (this.state.operator == "*"){
                r = f * s;
            } else if (this.state.operator == "/"){
                r = f / s;
            } else {

            }
            this.setState({
                result: r,
                firstNum: "",
                operator: null,
                secondNum: "",
                firstNumDone: false,
            });
        } else if (Number.isInteger(i) && !this.state.firstNumDone) {
            this.setState({
                firstNum: this.state.firstNum + i,
            });
        } else if ( !Number.isInteger(i)){
            this.setState({
                operator: i,
                firstNumDone: true,
            })
        } else if (Number.isInteger(i) && this.state.firstNumDone){
            this.setState({
                secondNum: this.state.secondNum + i,
            });
        } else {

        }

        //....................USING EVAL FUNCTION.................//
        // if (i == "="){
        //     this.setState({
        //         result: eval(this.state.firstNum),
        //         firstNum: null,
        //     });
        // } else {
        //     this.setState({
        //         firstNum: this.state.firstNum + i,
        //     });
        // }


    }

    callCell(i){
        return (
           <Cell
               value={i}
               onClick={ () => this.handleClick(i)}
           />
        );
    }

    render() {
        return(
            <div>
                <h2>CALCULATOR</h2>
                <h4>Screen: {this.state.firstNum} {this.state.operator} {this.state.secondNum}</h4>
                <h4>Result: {this.state.result}</h4>
                <div className="calc-row">
                    {this.callCell(1)}
                    {this.callCell(4)}
                    {this.callCell(7)}
                </div>
                <div className="calc-row">
                    {this.callCell(2)}
                    {this.callCell(5)}
                    {this.callCell(8)}
                </div>
                <div className="calc-row">
                    {this.callCell(3)}
                    {this.callCell(6)}
                    {this.callCell(9)}
                </div>
                <div className="calc-row">
                    {this.callCell("+")}
                    {this.callCell(0)}
                    {this.callCell("=")}
                </div>
                <div className="calc-row">
                    {this.callCell("/")}
                    {this.callCell("-")}
                    {this.callCell("*")}
                </div>
            </div>

        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
registerServiceWorker();
