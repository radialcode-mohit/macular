import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import greentick from "../assets/images/svg/egligblegreentick.svg";
import redcross from "../assets/images/svg/egligleredcross.svg";
const Egligible = () => {
  return (
    <section className="py-5 my-lg-5">
      <div className="py-xl-5">
        {" "}
        <Container className="py-lg-5 my-xl-5 position-relative">
          <div className=" position-absolute green_crcle right_egligble_green_crcle"></div>
          <p
            data-aos="fade-down"
            className=" text-center ff_plus fs_4xl clr_white opacity_09 position-relative eligible_arrow"
          >
            Who will be eligible for <br /> the Program
          </p>
          <Row className=" justify-content-center pt-5 mt-1">
            <Col data-aos="fade-up-right" md={6} lg={5}>
              <div className="position-relative overflow-hidden  bg_rgba_37_174_134 border1px_black border_1px_rgba transition br_16 p_50">
                <div className=" position-absolute green_crcle z_1_minus egligble_greencrcle"></div>
                <img src={greentick} alt="greentick" />
                <div className="pt-4 mt-3">
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Prevention vision loss
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Drusen
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Wet in an eye
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Diabetic Retinopathy
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Prevention wet AMD
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Vision loss
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Wet in both eyes
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Cataract + AMD
                  </p>
                </div>
              </div>
            </Col>
            <Col data-aos="fade-up-left" md={6} lg={5} className="mt-4 mt-md-0">
              {" "}
              <div className="position-relative overflow-hidden h-100 bg_rgba_37_174_134 border1px_black border_1px_rgba transition br_16 p_50">
                <div className=" position-absolute green_crcle z_1_minus egligble_greencrcle"></div>
                <img src={redcross} alt="redcross" />
                <div className="pt-4 mt-3">
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Macular hole
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Irreversible legal Blindness
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Macular Puckar
                  </p>
                  <p className=" ff_roboto fw-normal position-relative ps_31 egligble_tick fs_md clr_white_fa ">
                    Chemotherapy
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" text-center mt_40">
            {" "}
            <button
              data-aos="fade-up"
              className="ff_plus fw-semibold fs_md clr_white bg_linear_green border-0 border_radius_51 padding_15_30 bg_linear_hover transition mt-4 "
            >
              Book Call
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Egligible;
