import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import suceesnewsimg from "../assets/images/png/sucessnews.png";
import suceesnewssmallimg from "../assets/images/png/sucesimgsmall.png";
const SucessSec = () => {
  return (
    <section className="bg_rgba_37_174_134 br_20 py-5">
      <Container className="custom_container_1140">
        <Row className="flex-column-reverse flex-lg-row">
          <Col data-aos="fade-right" lg={6}>
            <div className="pt-lg-5"></div>
            <div className="pt-5"></div>
            <div className="pt-lg-2"></div>
            <div className=" sucess_white_div p_27_35">
              <p className=" ff_plus fw_500 fs_4xl clr_white_fa ">
                Success: Strive, Thrive, and Shine
              </p>
              <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_07">
                When it comes to achieving success, there are certain qualities
                that can help you reach your goals. Had it not been for our
                success in many patients we may never have pursued macular
                degeneration
              </p>
              <button className="mt_40 ff_plus fw-semibold fs_md linear_text_green border_green_2px p_11_30 br_5">
                Learn More
              </button>
            </div>
          </Col>
          <Col data-aos="fade-right" lg={6}>
            <img
              className=" position_absolute_min_992 end_0 z_minus_1 d-none d-lg-block"
              src={suceesnewsimg}
              alt="suceesnewsimg"
            />
            <img
              className="w-100 d-lg-none"
              src={suceesnewssmallimg}
              alt="suceesnewssmallimg"
            />
          </Col>
        </Row>
      </Container>
      <div className="pb-lg-5"></div>
      <div className="pb-lg-4"></div>
    </section>
  );
};

export default SucessSec;
