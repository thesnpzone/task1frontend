import React from "react";
import Button from "../Button/Button";
import logo from "../../Assets/Img/logo.png";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-light" style={{ backgroundColor: "#F8FCFF" }}>
        <div class="container">
          <img src={logo} alt="" />

          <Button
            text="Contact Us"
            style={{
              padding: "8px 50px",
              gap: "4px",
              borderRadius: "32px",
              border: "1px solid #000C1A",
              fontFamily: "Inter, sans-serif", 
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "center",
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
