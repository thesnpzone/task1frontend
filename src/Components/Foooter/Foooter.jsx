import React from "react";
import logo from "../../Assets/Img/logo.png";

import social from '../../Assets/Img/social.png'
const Foooter = () => {
  return (
    <>
      <div
        class="container p-3 mb-3"
        style={{ borderRadius: "50px", backgroundColor: "#B2D6FF" }}
      >
        <div class="row p-5">
          <div className="col-lg-4">
            <img src={logo} alt="" />
            <p>
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>

            <h3>Address</h3>
            <p>
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>

            <h3>Contacts</h3>
            <i class="bi bi-envelope-fill"></i>
            <span>hello@osumare.in</span>
            <br />
            <i class="bi bi-telephone-fill"></i>
            <span>+91 8459 8762 26</span>
          </div>
          <div className="col-lg-4">
            <h3 className="">Menu</h3>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Work</p>
            <p>Blog</p>
            <p>Career</p>

          </div>
          <div className="col-lg-4">
            <h3>Social</h3>
            <img src={social} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Foooter;
