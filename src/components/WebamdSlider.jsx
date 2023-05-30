import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import wetsliderimg from "../assets/images/svg/lastslidermainimg.svg";
import stars from "../assets/images//svg/stars.svg";
import wetsliderimg2 from "../assets/images//svg/cmd2ndimg.svg";
import Slider from "react-slick";
const WebamdSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [first, setfirst] = useState(0);
  return (
    <section className="py-5">
      <Container className="py-5 custom_container_1140">
        <div className="ps_24 d-flex  justify-content-center justify-content-md-start">
          <div className="text-center text-md-start">
            <button
              data-aos="fade-down"
              onClick={() => {
                setfirst(0);
              }}
              className={
                first === 0
                  ? "bg_linear_green_faq_hover transition  ff_roboto fw_500 fs_lg clr_white_fa bg_linear_green_faq br_6  border1px_trans p_10_18"
                  : "bg_linear_green_faq_hover transition   ff_roboto fw_500 fs_lg clr_white_fa bg_transparent br_6 bordr_1px_rgb  p_10_18"
              }
            >
              Wet AMD Testimonials
            </button>
            <button
              data-aos="fade-up"
              onClick={() => {
                setfirst(1);
              }}
              className={
                first === 1
                  ? "mt_40px_max_420 ms_20 bg_linear_green_faq_hover transition  ff_roboto fw_500 fs_lg clr_white_fa bg_linear_green_faq br_6 bordr_1px_r gb border1px_trans p_10_18"
                  : "mt_40px_max_420 ms_20 bg_linear_green_faq_hover transition   ff_roboto fw_500 fs_lg clr_white_fa bg_transparent br_6 bordr_1px_rgb border1px_trans p_10_18"
              }
            >
              Dry AMD Testimonials
            </button>
          </div>
        </div>
        <Slider {...settings} className="cmd_slider">
          <div className="pe-4 pe-sm-0 ps-4">
            <div className="p_74_63_125_70 my-5 br_33 bg_rgba_37_174_134">
              {" "}
              <Row className=" justify-content-center justify-content-lg-between align-items-center">
                <Col xs={10} md={9} lg={4}>
                  <img src={wetsliderimg} alt="girl" className="w-100" />
                </Col>
                <Col lg={7} className="mt-5">
                  <div>
                    <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_08 position-relative quotes line_h_150">
                      My experience with the Rozakis institute/Advanced-Wellness
                      has been a success. I was receiving the eye shots, but
                      after the nutritional program recommended by Dr. Rozakis,
                      my eyesight in my damaged eye improved and now I have gone
                      from monthly shots to a five month period, and I am
                      expecting to stop them altogether, soon These research
                      have their hands on a valuable remedy and are successful
                      with their pioneering <br /> Thanks to them!
                    </p>
                    <div>
                      <p className=" ff_plus fw_500 fs_4xl clr_white_fa">
                        {" "}
                        Rodney Gunther
                      </p>
                      <img src={stars} alt="stars" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="pe-4 pe-sm-0 ps-4">
            {" "}
            <div className="p_74_63_125_70 my-5 br_33 bg_rgba_37_174_134">
              {" "}
              <Row className=" justify-content-center justify-content-lg-between align-items-center">
                <Col xs={10} md={9} lg={4}>
                  <img src={wetsliderimg2} alt="girl" className="w-100" />
                </Col>
                <Col lg={7} className="mt-5">
                  <div>
                    <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_08 position-relative quotes line_h_150">
                      My experience with the Rozakis institute/Advanced-Wellness
                      has been a success. I was receiving the eye shots, but
                      after the nutritional program recommended by Dr. Rozakis,
                      my eyesight in my damaged eye improved and now I have gone
                      from monthly shots to a five month period, and I am
                      expecting to stop them altogether, soon These research
                      have their hands on a valuable remedy and are successful
                      with their pioneering <br /> Thanks to them!
                    </p>
                    <div>
                      <p className=" ff_plus fw_500 fs_4xl clr_white_fa">
                        {" "}
                        Rodney Gunther
                      </p>
                      <img src={stars} alt="stars" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="pe-4 pe-sm-0 ps-4">
            {" "}
            <div className="p_74_63_125_70 my-5 br_33 bg_rgba_37_174_134">
              {" "}
              <Row className=" justify-content-center justify-content-lg-between align-items-center">
                <Col xs={10} md={9} lg={4}>
                  <img src={wetsliderimg} alt="girl" className="w-100" />
                </Col>
                <Col lg={7} className="mt-5">
                  <div>
                    <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_08 position-relative quotes line_h_150">
                      My experience with the Rozakis institute/Advanced-Wellness
                      has been a success. I was receiving the eye shots, but
                      after the nutritional program recommended by Dr. Rozakis,
                      my eyesight in my damaged eye improved and now I have gone
                      from monthly shots to a five month period, and I am
                      expecting to stop them altogether, soon These research
                      have their hands on a valuable remedy and are successful
                      with their pioneering <br /> Thanks to them!
                    </p>
                    <div>
                      <p className=" ff_plus fw_500 fs_4xl clr_white_fa">
                        {" "}
                        Rodney Gunther
                      </p>
                      <img src={stars} alt="stars" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="pe-4 pe-sm-0 ps-4">
            {" "}
            <div className="p_74_63_125_70 my-5 br_33 bg_rgba_37_174_134">
              <Row className=" justify-content-center justify-content-lg-between align-items-center">
                <Col xs={10} md={9} lg={4}>
                  <img src={wetsliderimg} alt="girl" className="w-100" />
                </Col>
                <Col lg={7} className="mt-5">
                  <div>
                    <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_08 position-relative quotes line_h_150">
                      My experience with the Rozakis institute/Advanced-Wellness
                      has been a success. I was receiving the eye shots, but
                      after the nutritional program recommended by Dr. Rozakis,
                      my eyesight in my damaged eye improved and now I have gone
                      from monthly shots to a five month period, and I am
                      expecting to stop them altogether, soon These research
                      have their hands on a valuable remedy and are successful
                      with their pioneering <br /> Thanks to them!
                    </p>
                    <div>
                      <p className=" ff_plus fw_500 fs_4xl clr_white_fa">
                        {" "}
                        Rodney Gunther
                      </p>
                      <img src={stars} alt="stars" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default WebamdSlider;
