import React from "react";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
import Testimonial from "../Testimonial/Testimonial";

import inq1 from "../../Assets/Img/inq1.png";
import inq2 from "../../Assets/Img/inq2.png";
import inq3 from "../../Assets/Img/inq3.png";
import inq4 from "../../Assets/Img/inq4.png";
import NormalCard from "../Card/NormalCard";

const Inquiries = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div className="col-lg-12 text-center mt-5">
            <Heading_Subheading
              heaading=" Driving Property Inquiries to Conversions"
            />
          </div>
        </div>

        {/* <Testimonial/> */}
      </div>

      <div class="container">
        <div class="row">
          <div className="col-lg-1 mt-4"></div>
          <div className="col-lg-4 mt-4 text-center">
            <NormalCard
              imgg={inq1}
              headingText="Call-to-Action Optimization"
              para="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
            />
          </div>
          <div className="col-lg-2 mt-4"></div>
          <div className="col-lg-4 mt-4 text-center">
            <NormalCard
              imgg={inq2}
              headingText="Landing Page Efficiency"
              para="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
            />
          </div>
          <div className="col-lg-1 mt-4"></div>
          {/* ---------------------------------------------------------------- */}
          <div className="col-lg-1 mt-4"></div>
          <div className="col-lg-4 mt-4 text-center">
            <NormalCard
              imgg={inq3}
              headingText="Social Proof Utilization"
              para="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
            />
          </div>
          <div className="col-lg-2 mt-4"></div>
          <div className="col-lg-4 mt-4 text-center">
            <NormalCard
              imgg={inq4}
              headingText="Mobile-Friendly Experience"
              para="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
            />
          </div>
          <div className="col-lg-1 mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default Inquiries;
