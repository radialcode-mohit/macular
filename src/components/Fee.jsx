import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/svg/feestructureimg.svg";
import lineleft from "../assets/images/svg/feeleft.svg";
import lineright from "../assets/images/svg/feeright.svg";
const Fee = () => {
  return (
    <section className="pb-5 mb-lg-5">
      <Container className="pb-lg-5">
        <Row className=" justify-content-center justify-content-lg-between align-items-lg-center align-items-xl-start">
          <Col xs={9} lg={4}>
            <div>
              <p
                data-aos="fade-down"
                className="text-center text-xl-start ff_plus fw_500 fs_4xl clr_white opacity_09 position-relative feearrow"
              >
                Fee Structure
              </p>
              <div data-aos="fade-up-right" className=" text-center ">
                {" "}
                <img src={mainimg} alt="girlimg" className="w-100" />
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left" lg={6} className="mt-5 mt-lg-0">
            <div className=" position-relative pe-xl-5 ">
              <div className=" position-absolute fee_sec_greencrcle"></div>
              <img
                src={lineleft}
                className="line_left_fee_sec position-absolute d-none d-xl-inline-block"
                alt="lineleft"
              />
              <img
                src={lineright}
                className="line_right_fee_sec position-absolute d-none d-xl-inline-block"
                alt="lineleft"
              />

              <div className="bg_rgba_37_174_134 br_16 p_26_20 border_1px_rgb_hover border_trans">
                <p className=" ff_plus fw_500 fs_xl clr_white mb-1 pb-1">
                  One Time Enrollment $3000/y
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pe-sm-5 mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim{" "}
                </p>
              </div>
              <div className="bg_rgba_37_174_134 br_16 p_26_20 my-4 border_1px_rgb">
                <p className=" ff_plus fw_500 fs_xl clr_white mb-1 pb-1">
                  Medical Grade Supplements $80-125/m
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pe-sm-5 mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim{" "}
                </p>
              </div>
              <div className="bg_rgba_37_174_134 br_16 p_26_20 border_1px_rgb_hover border_trans">
                <p className=" ff_plus fw_500 fs_xl clr_white mb-1 pb-1">
                  Maintenance $450/ Lab check
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pe-sm-5 mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Fee;
