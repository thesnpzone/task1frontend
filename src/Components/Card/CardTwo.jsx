import React from "react";
import "./CardTwo.css";

const CardTwo = (props) => {
  return (
    <div className="card mb-3" >
      <div className="row no-gutters align-items-center">
        <div className="col-sm-3 d-flex justify-content-center">
          <div className="icon-container">
            <i className={props.icons}></i>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <p className="card-text">{props.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
