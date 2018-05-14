import _ from 'lodash';

export function startGame() {
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

export function handleSubmit(e) {
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