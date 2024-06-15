import React from "react";
import Button from "../Button/Button";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";

const Cat = () => {
  return (
    <div className="container-fluid cta_bg text-center p-5 ">
      <div className="row p-5"> 
       <div className="col-lg-3"></div>
       <div className="col-6 ">
          <div>
            <Heading_Subheading
              heaading="Your Peace of Mind"
              sub_heaading=" Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market"
            />
            <Button
              text="Get started"
              style={{
                gap: "4px",
                width: "286px",
                height: "46px",
                color: "white",
                border: "none",
                backgroundColor: " #0078FF",
                borderRadius: "32px",
                padding: "0px, 136px, 0px, 136px",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                textAlign: "center",
              }}
            />
          </div>
        </div>
       <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Cat;
