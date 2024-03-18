import React from "react";
import "./pay.css";

export const Pay = () => {
  return (
    <div>
      <section className="back">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="function">
                <a href="#">
                  <i className="fa fa-home" />
                </a>
                <span>
                  <i className="fa fa-angle-double-right" />
                  Online payment
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="function">
                <h5>Online Payment</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10">
              <h5 className="fill">Fill The Details For Online Payment</h5>
              <div className="form-card">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Student Name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Student Email<span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Student Number<span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          name="name"
                          placeholder="Enter Your Number"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Student Addrss<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Address"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Fees Amount<span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          name="fees"
                          placeholder="Enter Your Fees"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Course<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Course Name"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <input
                            className="custom"
                            type="checkbox"
                            id="customCheck1"
                          />
                          <label for="customCheck1" className="mr-3">Accept terms & conditions & Privacy Policy </label>
                            
                          <label className="text-info ">Click For Term & Condition & Privacy Policy Details</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 last">
                        <button type="button" className="submit-btn">Pay Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
