import React from "react";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className="container-fluid cta_bg  p-5 ">
      <div className="row p-5">
        <div className="col-lg-3"></div>
        <div className="col-6 ">
          <div>
            <Heading_Subheading
              heaading="Connect with Our Digital Marketing Experts"
              sub_heaading="Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together"
            />

            <div
              class="container-fluid"
              style={{ backgroundColor: "white", borderRadius: "30px" }}
            >
              <div class="row">
                <div className="col-lg-6">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form class="was-validated">
                    <div class="mb-3">
                      <label for="validationTextarea" class="form-label">
                        Textarea
                      </label>
                      <textarea
                        class="form-control is-invalid"
                        id="validationTextarea"
                        placeholder="Required example textarea"
                        required
                      ></textarea>
                      <div class="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                  </form>
                </div>

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
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Contact;
