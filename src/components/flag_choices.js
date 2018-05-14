import React from "react";

const Choices = ({choices, selectedOption, handleOptionChange, rightAnswer, message, handleSubmit}) => {
    const choicesList = choices.map((choice, index) => (
        <div key= {index} className="radio-inline col form-check form-group">
            <label className="labelItem">
                <input className="inputItem" type="radio" name="flagOption"
                value={choice} checked={selectedOption===choice} onChange = {() => handleOptionChange(choice)} />
                <span className="label-text">
                <span>  {choice}</span>
                </span>
            </label>
        </div>
    ));

    return(
        <div className="container-fluid">
            <div className="row-fluid" >
                <form onSubmit = {handleSubmit} id="options" className="options">
                    <div className="c-list">
                    {choicesList}
                    <br/>
                    <button className="btn btn-light btn-sm guess-button" type="submit" form="options">GUESS</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Choices;