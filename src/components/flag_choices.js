import React from "react";

const Choices = ({choices, selectedOption, handleOptionChange, rightAnswer, message, handleSubmit}) => {
    const choicesList = choices.map((c, index) => (
        <div key= {index} className="radio-inline col form-check form-group" style={{marginTop: "2em"}}>
            <label className="labelItem">
                <input className="inputItem" type="radio" name="flagOption" value={c} checked={selectedOption===c} onChange = {() => handleOptionChange(c)} /> <span
                className="label-text">
                   <span>  </span>{c}
                </span>
            </label>
        </div>
    ));

    return(
        <div className="container-fluid">
            <div className="row-fluid" >
                <form onSubmit = {handleSubmit} id="options" className="">
                    <div style={{textAlign: "center"}}>
                    {choicesList}
                    <br/>
                    <button className="btn btn-light btn-sm" style={{marginTop: "1.5em"}} type="submit" form="options">GUESS</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Choices;