import React from "react";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
import Button from "../Button/Button";
import about_img from "../../Assets/Img/about_img.png";
const About = () => {
  return (
    <>
      <div class="container-fluid  mt-5 mb-5 pb-5">
        <div class="row mt-5">
          <div className="col-12  p-5 mt-5 ">
            <Heading_Subheading
              heaading="Real Estate-Focused Digital Mastery"
              sub-heading=""
            />
          </div>

          <div className="col-lg-7 text-center">
            <img src={about_img} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-5 text-left">
            <h1>Unlock the Potential of Digital Real Estate Excellence</h1>
            <p>
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <Button
              text="Get started"
              style={{
                gap: "4px",
                width: "208px",
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
      </div>
    </>
  );
};

export default About;
