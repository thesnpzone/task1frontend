import React from "react";

import user from "../../Assets/Img/userV1.png";
import avtar from "../../Assets/Img/Avatar1.png";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="card mb-3 p-5">
        <div className="row no-gutters align-items-center">
          <div className="col-sm-6 d-flex justify-content-center">
            <div className="">
              <img src={user} class="img-fluid " alt="" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <div class="container-fluid">
                <div class="row">
                  <div className="col-2">
                    <img src={avtar} alt="" style={{width:"80px", height:'80px'}} />
                  </div>
                  <div className="col-8 userName mt-4">
                    <h3>Tabish khan</h3>
                  </div>
               
                  <div className="col-12">
                 
                    <p className="card-text userName">Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
