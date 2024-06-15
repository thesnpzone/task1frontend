import React from "react";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Services = () => {
  return (
    <>
      <div class="container-fluid mb-5 pb-5" style={{backgroundColor:"#F9F9F9"}}>
        <div class="container-fluid">
          <div class="row">
            <div className="col-lg-12 text-center mt-5">
              <Heading_Subheading
                heaading="Our Service Offerings"
                sub_heaading=" Strategies that Drive Property Market Excellence"
              />
            </div>

            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-bar-chart-line-fill custom-icon"
                htext="Automotive SEO    "
                para="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-cursor-fill custom-icon"
                htext="PPC Precision"
                para="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-circle-square custom-icon"
                htext="Social Acceleration"
                para=" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-journal-album custom-icon"
                htext="Content Excellence"
                para="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-image-fill custom-icon"
                htext="Web Design"
                para="Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-graph-up-arrow custom-icon"
                htext="Data-Driven Insights"
                para="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-person-add custom-icon"
                htext="End-to-End Solutions"
                para="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
              />
            </div>
            <div className="col-lg-3 mt-5">
              <Card
                icon="bi bi-camera-reels-fill custom-icon"
                htext="Video marketing"
                para="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
              />
            </div>
            <div className="col-lg-12 mt-5 text-center">
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
      </div>
    </>
  );
};

export default Services;
