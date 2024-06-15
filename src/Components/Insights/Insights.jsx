import React from "react";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
import CardTwo from "../Card/CardTwo";
import ibg from '../../Assets/Img/ibg.png'
const Insights = () => {
  return (
    <>
      <div class="container pb-5">
        <div class="row">
          <div className="col-lg-12">
            <Heading_Subheading
              heaading="Navigating Real Estate's Digital Landscape"
              sub-heading="Insights for Real Estate Marketing Advantage"
            />
          </div>

          <div className="col-lg-6">
            <CardTwo
              icons="bi bi-stars custom-icon"
              heading="Market Trends Analysis"
              para="Predictive insights to guide real estate strategies."
            />
            <CardTwo
              icons="bi bi-lightning-fill custom-icon"
              heading="Targeted Buyer Persona"
              para="Understand and connect with your ideal property buyers."
            />
            <CardTwo
              icons="bi bi-shield-fill-check custom-icon"
              heading="Competitor Insights"
              para="Stand out in the property market with informed strategies."
            />
            <CardTwo
              icons="bi bi-search-heart custom-icon"
              heading="Visual Content Appeal"
              para="Captivate buyers with appealing visuals and immersive experiences."
            />
          </div>

          <div className="col-lg-6 ">

            <img src={ibg} alt="" className="img-fluid" />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
