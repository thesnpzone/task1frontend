import React from "react";
import Button from "../Button/Button";

const Home = () => {
  return (
    <>
      <div className="container-fluid home_bg text-center">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center vh-100">
            <div>
              <h1 className="text-center mb-2">
                Elevate{" "}
                <span style={{ color: "#0078FF" }}>Real Estate Success</span>{" "}
                with <br /> Osumare's Digital Expertise
              </h1>
              <p>
                Tailored Solutions for Thriving in the Digital Real Estate
                Landscape
              </p>

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
        </div>
      </div>
    </>
  );
};

export default Home;
