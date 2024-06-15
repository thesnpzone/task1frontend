import React from "react";

const NormalCard = (props) => {
  return (
    <>

      <img src={props.imgg} className="img-fluid mb-4" alt="" />
      <h3>{props.headingText}</h3>
      <p>{props.para}</p>
    </>
  );
};

export default NormalCard;
