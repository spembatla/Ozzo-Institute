import React from "react";
import "./admission.css";

export const Admission = () => {
  return (
    <div>
      <section className="sec-pad pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="addm">Admission form</h4>
              <div className="form-card">
                <form>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Course Name</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Course Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Perferred university</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Enter University Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>remark</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Your Message"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Level of the Course</label>
                        <select
                          name="loc"
                          className="form-control"
                          type="select"
                          required
                        >
                          <option value="">Select Course Level</option>
                          <option value="UG">UG</option>
                          <option value="PG">PG</option>
                          <option value="PG Deploma">PG Diploma</option>
                          <option value="Deploma certificate">
                            Diploma certificate
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Mode of admission </label>
                        <select
                          name="moa"
                          className="form-control"
                          type="select"
                          required
                        >
                          <option value="">Select Mode of Admission</option>
                          <option value="Reguler">Reguler</option>
                          <option value="Distance">Distance</option>
                          <option value="Online">Online</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Passport size photo</label>
                        <input
                          name="photo"
                          className="form-control"
                          type="file"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>name of candidate :</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Father/Husband Name :</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Father's Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Mother name :</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Mother's Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>DOB :</label>
                        <input
                          name="dob"
                          className="form-control"
                          type="date"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="form-group gender">
                        <h5>Gender</h5>
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class=""
                            name="gender"
                            value="Male"
                            required
                          />{" "}
                          Male
                        </label>{" "}
                        &nbsp; &nbsp;
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class=""
                            name="gender"
                            value="Female"
                            required
                          />{" "}
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>category </label>
                        <select
                          name="category"
                          className="form-control"
                          type="select"
                          required
                        >
                          <option value="">Select Category</option>
                          <option>Gen</option>
                          <option>OBC</option>
                          <option>S.C</option>
                          <option>S.T</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Email Id :</label>
                        <input
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Enter Your Email "
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Mobile Number:</label>
                        <input
                          name="number"
                          className="form-control"
                          type="number"
                          placeholder="+91xxxxxxxxxx"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>alternate number:</label>
                        <input
                          name="num"
                          className="form-control"
                          type="number"
                          placeholder="+91xxxxxxxxxx"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>correspondence address:</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>permanent address:</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>city:</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="Enter Your City"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>pincode:</label>
                        <input
                          name="code"
                          className="form-control"
                          type="number"
                          placeholder="pincode"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>district:</label>
                        <input
                          name="course"
                          className="form-control"
                          type="name"
                          placeholder="District"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Select state</label>
                        <select
                          name="religion"
                          class="form-control"
                          required=""
                        >
                          <option value="">Select Religion</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar ">Bihar </option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat ">Gujarat </option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu Kashmir">Jammu Kashmir</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman Nicobar">
                            Andaman Nicobar
                          </option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra Nagar Haveli">
                            Dadra Nagar Haveli
                          </option>
                          <option value="Daman Diu">Daman Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Puducherry">Puducherry</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>nationality:</label>
                        <input
                          name="nation"
                          className="form-control"
                          type="name"
                          placeholder="Nationality"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Adhar no (optional):</label>
                        <input
                          name="number"
                          className="form-control"
                          type="number"
                          placeholder="xxxx-xxxx-xxxx"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h5>Qualification</h5>
                      <div className="table-responsive">
                        <div className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Subject</th>
                              <th>Year of Passing</th>
                              <th>Name of College/University</th>
                              <th>Division Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="sub10th"
                                    type="text"
                                    class="form-control"
                                    placeholder="10th Subject"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="year"
                                    type="text"
                                    class="form-control"
                                    placeholder="10th Passing year"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="center"
                                    type="text"
                                    class="form-control"
                                    placeholder="10th Center Name"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="grade"
                                    type="text"
                                    class="form-control"
                                    placeholder="10th Division Grade"
                                    required=""
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="sub12th"
                                    type="text"
                                    class="form-control"
                                    placeholder="12th Subject"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="year"
                                    type="text"
                                    class="form-control"
                                    placeholder="12th Passing year"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="center"
                                    type="text"
                                    class="form-control"
                                    placeholder="12th Center Name"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="grade"
                                    type="text"
                                    class="form-control"
                                    placeholder="12th Division Grade"
                                    required=""
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="sub"
                                    type="text"
                                    class="form-control"
                                    placeholder="UG Subject"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="year"
                                    type="text"
                                    class="form-control"
                                    placeholder="UG Passing year"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="center"
                                    type="text"
                                    class="form-control"
                                    placeholder="UG Center Name"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="grade"
                                    type="text"
                                    class="form-control"
                                    placeholder="UG Division Grade"
                                    required=""
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="sub"
                                    type="text"
                                    class="form-control"
                                    placeholder="PG Subject"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="year"
                                    type="text"
                                    class="form-control"
                                    placeholder="PG Passing year"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="center"
                                    type="text"
                                    class="form-control"
                                    placeholder="PG Center Name"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="grade"
                                    type="text"
                                    class="form-control"
                                    placeholder="PG Division Grade"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="sub10th"
                                    type="text"
                                    class="form-control"
                                    placeholder="Other Subject"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="year"
                                    type="text"
                                    class="form-control"
                                    placeholder="Other Passing year"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="center"
                                    type="text"
                                    class="form-control"
                                    placeholder="Other Center Name"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="form-group">
                                  <input
                                    name="grade"
                                    type="text"
                                    class="form-control"
                                    placeholder="Other Division Grade"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={4}>
                                <button
                                  type="submit"
                                  class="submit-btn pull-right"
                                >
                                  Submit{" "}
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </div>
                      </div>
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
