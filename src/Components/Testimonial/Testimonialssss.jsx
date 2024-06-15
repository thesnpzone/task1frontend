import React from "react";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
import Testimonial from "./Testimonial";

const Testimonialssss = () => {
  return (
    <>
      <div class="container-fluid mb-5 pb-5">
        <div class="row">
          <div className="col-lg-12 text-center mt-5">
            <Heading_Subheading
              heaading="What Our Pharma Partners Say"
              sub_heaading="Driving Transformations, One Brand at a Time"
            />
            <Testimonial/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonialssss;
