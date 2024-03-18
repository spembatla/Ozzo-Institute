import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header-top d-lg-block d-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-xl-3 d-flex">
              <div className="note">
                <button className="btn btn-danger">Notification</button>
              </div>
              <div className="texts">
                <marquee behavior="scroll" direction="left">
                  Admissions are open : 2023-2024
                </marquee>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5">
              <div className="phone text-center">
                <p>
                  <i className="fa fa-brands fa-whatsapp"></i>+91 8484814515
                  &nbsp; | &nbsp; <i className="fa fa-envelope-o"></i>
                  ozzo@gmail.com &nbsp; | &nbsp;
                  <i className="fa fa-light fa-phone"></i>+91 9167715371
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="border-none text-center">
                <ul className="header-btn">
                  <li>
                    <i className="fa fa-graduation-cap"></i>
                    <a href="#">Exam Details</a>
                  </li>
                  <li>
                    <i className="fa fa-duotone fa-credit-card"></i>
                    <a href="../online_payment"><Link to={'./online_payment'}/>Pay Fees Online</a>
                  </li>
                  <li>
                    <i className="fa fa-user"></i>
                    <a href="../login"> <Link to={"/login"}/>Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container header-title">
        <div className="row">
          <div className="col-md-4 ">
            <div className="logo">
              <img src="https://weblordinstitute.com/assets/images/footer-logo.png" alt="logo" className="tag" />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/137/2022/04/istockphoto-1211151590-612x612-1.jpg" alt="" className="tag"/>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="logo">
              <img src="https://aquanerio.com/assetsweb/images/logo1.png" alt="logo" className="tag" />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid header-nav">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon">
              <i className="fa fa-bars" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="../home">
                  <Link to={"/home"}/>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../about">
                  <Link to={"/about"}/>
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Student Zone
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="../login">
                      <Link to={"/login"}/>
                      Login Student
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../admission">
                    <Link to={"/admission"}/>
                      Admission Booking
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../admission">
                    <Link to={"/admission"}/>
                      Admission Form
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Franchie Zone
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="../about">
                      <Link to={"/about"}/>
                      Register Franchie
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../login">
                    <Link to={"/login"}/>
                      Login Franchie
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Placements
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../contact">
                  <Link to={"/contact"}/>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
