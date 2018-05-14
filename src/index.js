import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {startGame, handleSubmit} from './utils/flag-utils'
import Flag from './components/flag';
import Choices from './components/flag_choices';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            flag: "",
            choices: [],
            rightAnswer: "",
            selectedOption: "",
            message: "",
            score: 0
        };

        this.handleSubmit = handleSubmit.bind(this)
        this.startGame = startGame.bind(this)
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
            .then(results => {
                return results.json();
            }).then(countries => {
                this.setState({countries});
                startGame.call(this);
        })
    }     

    render(){
        return (
            <div>
                <div>
                    {(this.state.message === "") ?
                        <Choices choices = {this.state.choices} selectedOption = {this.state.selectedOption}
                            rightAnswer = {this.state.rightAnswer} message = {this.state.message}
                            handleOptionChange = { selectedOption => this.setState({selectedOption})}
                            handleSubmit = {this.handleSubmit} /> : <div className = "div-message">
                        <h2 className="message">
                            {this.state.message}
                        </h2>
                        <button className="btn-sm btn btn-light guess-button" onClick={() => this.startGame()}>
                            NEXT
                        </button>
                    </div>}
                    <div className="centerItem flag">
                        <Flag flag = {this.state.flag}/>
                        <div className="score">
                            <h1>Score: {this.state.score}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));