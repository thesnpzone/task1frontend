import React from 'react'
import Heading_Subheading from '../Heading_Subheading/Heading_Subheading'
import NormalCard from '../Card/NormalCard'

import ina1 from '../../Assets/Img/ina1.png'
import ina2 from '../../Assets/Img/ina2.png'
import ina3 from '../../Assets/Img/ina3.png'
import ina4 from '../../Assets/Img/ina4.png'

const Action = () => {
  return (
    <>
    <div class="container-fluid">
      <div class="row">
        <div className="col-lg-12 text-center mt-5">
          <Heading_Subheading
            heaading=" Our Expertise in Action"
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
            imgg={ina1}
            headingText="Effective CTAs"
            para=" See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
          />
        </div>
        <div className="col-lg-2 mt-4"></div>
        <div className="col-lg-4 mt-4 text-center">
          <NormalCard
            imgg={ina2}
            headingText="Conversion-Optimized Landing Pages"
            para="Explore a case study where our landing page optimization increased property lead conversion rates by 30%"
          />
        </div>
        <div className="col-lg-1 mt-4"></div>
        {/* ---------------------------------------------------------------- */}
        <div className="col-lg-1 mt-4"></div>
        <div className="col-lg-4 mt-4 text-center">
          <NormalCard
            imgg={ina3}
            headingText="Trust Building with Social Proof"
            para="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
          />
        </div>
        <div className="col-lg-2 mt-4"></div>
        <div className="col-lg-4 mt-4 text-center">
          <NormalCard
            imgg={ina4}
            headingText="Mobile-First Success"
            para="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
          />
        </div>
        <div className="col-lg-1 mt-4"></div>
      </div>
    </div>
  </>
  )
}

export default Action