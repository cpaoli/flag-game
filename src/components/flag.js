import React from "react";

const Flag = ({flag}) => {
    return(
        <div>
            <img src={flag} alt="flag" className="img-responsive center-block img-thumbnail flag-img"/>
        </div>
    );
};

export default Flag;