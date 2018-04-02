import React from "react";

const Flag = ({flag}) => {
    return(
        <div>
            <img src={flag} alt="flag" className="img-responsive center-block img-thumbnail"
                 style={{ background: "cover", maxHeight: "300px", maxWidth:"400px"}}/>
        </div>
    );
};

export default Flag;