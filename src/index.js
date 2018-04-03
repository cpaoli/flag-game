import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.startGame = this.startGame.bind(this)
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
            .then(results => {
                return results.json();
            }).then(countries => {
                this.setState({countries});
                this.startGame();
        })
    }

    startGame(){
        const shuffledCountries = _.shuffle(this.state.countries).slice(0,4);
        const choices = shuffledCountries.map(c => c.name);
        const right = shuffledCountries[Math.floor(Math.random() * 4)];
        const rightAnswer = right.name;
        const flag = right.flag;
        this.setState({
            choices,
            flag,
            rightAnswer,
            message: ""
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.selectedOption !== ""){
            if(this.state.selectedOption === this.state.rightAnswer){
                this.setState({message: "Correct! " + this.state.rightAnswer, score: this.state.score+1});
            } else {
                this.setState({message: "Incorrect! Correct Answer: " + this.state.rightAnswer});
                if(this.state.score !== 0){
                    this.setState({score: this.state.score-1});
                }
            }
        }
        this.setState({selectedOption: ""});
    }

    render(){
        return (
            <div>
                <div>
                    {(this.state.message === "") ?
                            <Choices choices = {this.state.choices} selectedOption = {this.state.selectedOption}
                                     rightAnswer = {this.state.rightAnswer} message = {this.state.message}
                                     handleOptionChange = { selectedOption => this.setState({selectedOption})}
                                     handleSubmit = {this.handleSubmit} /> : <div style={{textAlign: "center"}}>
                                    <h2 style={{margin: "1em", color: "#C8C8C8"}}>
                                        {this.state.message}
                                    </h2>
                                    <button className="btn-sm btn btn-light" onClick={() => this.startGame()}>
                                        NEXT
                                    </button>
                                </div>}
                    <div style={{position: "fixed", top:" 50%", left: "50%", transform: "translate(-50%, -20%)"}} className="centerItem">
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