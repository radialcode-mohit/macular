import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homingimg from "../assets/images/svg/homingimg.svg";

const Homing = () => {
  return (
    <section className="py-5">
      <Container className="py-xl-5 custom_container_1140">
        <Row className="pt-lg-5 align-items-center flex-column-reverse flex-lg-row">
          <Col data-aos="fade-down-right" lg={6} xl={7}>
            <div>
              <p className="  ff_plus fw_500 fs_3xl clr_white ">
                The HOMING Method{" "}
              </p>
              <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pe-xl-5 ">
                We will start by taking a detailed medical history, including
                any symptoms you may be experiencing. They will ask about your
                family history of eye diseases and other medical conditions.
              </p>
              <div className=" max_w_530 pt-4">
                <div className=" border_btm_1px">
                  <div className="ps-4  position-relative  homing_tick_img">
                    <p className="ps-2 mb-0 pb-2 mv-1 ff_plus fw_500 fs_md clr_white">
                      Medical History - Patient Portal
                    </p>
                    <p className="ps-2 ff_roboto fw-normal fs_md clr_white_fa opacity_07 pb-3">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In{" "}
                    </p>
                  </div>
                </div>
                <div className=" border_btm_1px pt-4">
                  <div className="ps-4  position-relative  homing_tick_img">
                    <p className="ps-2 mb-0 pb-2 mv-1 ff_plus fw_500 fs_md clr_white">
                      Medical History - Patient Portal
                    </p>
                    <p className="ps-2 ff_roboto fw-normal fs_md clr_white_fa opacity_07 pb-3">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In{" "}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="ps-4  position-relative  homing_tick_img">
                    <p className="ps-2 mb-0 pb-2 mv-1 ff_plus fw_500 fs_md clr_white">
                      Medical History - Patient Portal
                    </p>
                    <p className="ps-2 ff_roboto fw-normal fs_md clr_white_fa opacity_07 pb-3">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down-left" lg={6} xl={5} className="pt-5">
            <div className=" position-relative ">
              <div className=" position-absolute green_crcle homing_green_div_right"></div>
              <img src={homingimg} alt="homingimg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Homing;
