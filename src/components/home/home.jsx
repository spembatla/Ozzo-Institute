import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://weblordinstitute.com/assets/images/slider/2.jpg"
                alt="bg-1"
                class="backgroundImage"
              />
              <div class="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="slider-content pt-30 text-center">
                        <h1>
                          Education
                          <span>For Everyone</span>
                        </h1>
                        <h2
                          data-animation="fadeInUp"
                          data-delay="1s"
                          className="text"
                        >
                          Take admission and complete your dreams with trusted
                          institute and U.G.C. approved universities..
                        </h2>
                        <a
                          data-animation="fadeInUp"
                          data-delay="2s"
                          className="up"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://weblordinstitute.com/assets/images/slider/1.jpg"
                alt="bg-3"
                class="backgroundImage"
              />
              <div class="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="slider-content pt-30 text-center">
                        <h1>
                          Education
                          <span>At Right Place</span>
                        </h1>
                        <h2
                          data-animation="fadeInUp"
                          data-delay="1s"
                          className="text"
                        >
                          Take admission and complete your dreams with trusted
                          institute and U.G.C. approved universities..
                        </h2>
                        <a
                          data-animation="fadeInUp"
                          data-delay="2s"
                          className="up"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="abouts">
                <h2>About Us</h2>
                <h4>THE BEST EDUCATION IN OUR INSTITUTE</h4>
                <p className="abt-cont">
                  We started our institute in 2010 as weblord education ,Now it
                  is known as weblord institute and we have also 20 to 25
                  franchise partners in diffrent type states. Weblord is leading
                  skill building and education Eos consulting firm dedicated in
                  providing excellence in the field of distance education as
                  well as regular education across India.
                </p>
                <a data-animation="fadeInUp" data-delay="2s" className="up">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/images/aboutus.jpg"
                  class="img-fluid "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12">
              <div className="pro-title">
                <h2>Our Courses</h2>
                <h6>---Carrer oriented courses---</h6>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/img/sports.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className="cou-cont">
                <h4>
                  <a href="#"> SPORTS MANAGEMENT COURSES. </a>
                </h4>
                <p className="abt-cont">
                  Sports as a career option - Courses &amp; Scope.. sports as a
                  hot career does offers a plethora of opportunities for you.
                  Down the ages, the popular mindset has been that sports are
                  good for the mind and body but it cannot help you earn your
                  daily bread...
                  <a href="#">Read Full Details.</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/img/paramedical.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className="cou-cont">
                <h4>
                  <a href="#"> paramedical COURSES. </a>
                </h4>
                <h5>Your hobby is your profession</h5>
                <p className="abt-cont">
                  Paramedical courses trains students and turns them into
                  skilled and qualified allied healthcare workers and
                  technicians...
                  <a href="#">Read Full Details.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/img/teacher-training.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className="cou-cont">
                <h4>
                  <a href="#"> teacher's training COURSES. </a>
                </h4>
                <p className="abt-cont">
                  Term generally used to describe the courses and qualifications
                  that teachers undertake and receive at the outset of their
                  careers...
                  <a href="#">Read Full Details.</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/img/engineering.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className="cou-cont">
                <h4>
                  <a href="#"> engineering & Technology. </a>
                </h4>
                <p className="abt-cont">
                  Technology is also an application of knowledge gained through
                  science and engineering fields to make or produce complex
                  structures...
                  <a href="#">Read Full Details.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/img/law.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className="cou-cont">
                <h4>
                  <a href="#"> law </a>
                </h4>
                <p className="abt-cont">
                  Law is a system of rules that are created and enforced through
                  social or governmental institutions to regulate behavior.
                  <a href="#">Read Full Details.</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  src="https://weblordinstitute.com/assets/img/business_science.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className="cou-cont">
                <h4>
                  <a href="#"> Science / Business mangement. </a>
                </h4>
                <p className="abt-cont">
                  The BBA syllabus broadly consists of subjects like Business
                  Organisation, Business Communication, Fundamentals of
                  Accounting, Business Mathematics...
                  <a href="#">Read Full Details.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rating-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="rating">
                <div>
                  <img
                    src="https://weblordinstitute.com//assets/7.png"
                    alt="#"
                  />
                  <h2 className="counter">1250</h2>
                  <h5>Happy Students</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="rating">
                <div>
                  <img
                    src="https://weblordinstitute.com//assets/8.png"
                    alt="#"
                  />
                  <h2 className="counter">350</h2>
                  <h5>Our Courses</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="rating">
                <div>
                  <img
                    src="https://weblordinstitute.com//assets/9.png"
                    alt="#"
                  />
                  <h2 className="counter">50</h2>
                  <h5>Franchie</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="rating">
                <div>
                  <img
                    src="https://weblordinstitute.com//assets/10.png"
                    alt="#"
                  />
                  <h2 className="counter">10</h2>
                  <h5>Awards Won</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pro-title">
                <h2>Achievements</h2>
                <h6>......</h6>
              </div>
            </div>
            <Slider {...settings}>
              <div className="col-lg-3 col-md-3 mt-10">
                <div className="reward">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5f8a85fc2ad7a514c3fdaf60/1606584921821-OW4H0O5ZKZBG4XGMPSAM/NAAC.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mt-10">
                <div className="reward">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5f8a85fc2ad7a514c3fdaf60/f26b819f-11ca-49e5-859e-2f9424d7e05f/NIRF+MEDICAL+2022.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mt-10">
                <div className="reward">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5f8a85fc2ad7a514c3fdaf60/1607266360608-35FHDSKOWOHL4FEDA5BY/iet+2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mt-10">
                <div className="reward">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5f8a85fc2ad7a514c3fdaf60/3dab0a33-4de3-44a8-8b76-e14bbcde98c5/11+WORLD+RANK-2.png"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pro-title">
                <h2>Why choose us?</h2>
                <h6>---Ozzo Institute---</h6>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="acco">
                <button className="accordion">Our Company mission</button>
                <div className="panels">
                  <p>
                    To help keep youth and curious working professionals to get
                    the best of service and support in education industry to
                    become the highly equated, well trained and skilled
                    professionals as per the demanding insdustrial requirements.
                  </p>
                </div>
              </div>
              <div className="acco">
                <button className="accordion">Why Distance Education?</button>
                <div className="panel">
                  <p>
                    1. Learning at your own space, Anytime And Anywhere.
                    <br />
                    2. Interactive Learning with Modern Technology.
                    <br />
                    3. Cost Effective Compared to full Time Courses.
                    <br />
                    4. Flexibility of Timings for Working Class.
                    <br />
                    5. Webinars and E-Libraries to Attend.
                  </p>
                </div>
              </div>
              <div className="acco">
                <button className="accordion">
                  {" "}
                  An Investment in knowledge pays the best interest.
                </button>
                <div className="panel">
                  <p>
                    Any successfull career starts with advance higher education.
                    At our university.You will have a deeper knowledge of the
                    subjects that will be perticularly useful when climbing the
                    career ladder.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="acc-cont">
                <h5>Global locations</h5>
                <p>
                  We provide you college / university according to your comfort.
                </p>
                <h5>Group Management</h5>
                <p>Our customer service is always ready for you.</p>
                <h5>Real-world practice</h5>
                <p>
                  Case studies, simulations, debates, and case challenges with
                  real business clients.
                </p>
                <h5>Career development</h5>
                <p>
                  We offer to complete your graduation for developing youe
                  career.....
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="acc-cont">
                <h5>Acceleration opportunities</h5>
                <p>
                6 out of 10 students graduate from Us within 3 years.
                </p>
                <h5>Skills</h5>
                <p>Diversified skills Develop specialized career capabilities with a Graduate Diploma in Computer Science or Design.</p>
                <h5>Inspiring faculty</h5>
                <p>
                Our faculty hail from all cities around .
                </p>
                <h5>Personalization</h5>
                <p>
                Personalized attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
