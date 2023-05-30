import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import morethenimg from "../assets/images/svg/morethenimg.svg";
import arrow from "../assets/images/svg/morethenarrow.svg";
import blureye from "../assets/images/svg/mroetheneye.svg";
import blurowl from "../assets/images/svg/morethenowl.svg";
const MoreThen = () => {
  return (
    <section className=" py-5 position-relative">
      <div className=" position-absolute green_crcle more_then_sec_left"></div>
      <div className="py-xl-5">
        <Container className="pt-5 py-xl-5 custom_container_1140">
          <Row className="py-3 align-items-center justify-content-between">
            <Col data-aos="flip-up" lg={5}>
              <div className=" position-relative">
                <div className="animation_trans1 d-flex  py-2 px-3 px-md-4 macular_blur_div_pos align-items-center white_blur_div position-absolute">
                  <img src={blureye} alt="blureye" />
                  <div className="ms-4">
                    <p className="mb-0 ff_poppins fw-normal fs_md clr_white_fa">
                      Macular <br /> Degeneration
                    </p>
                  </div>
                </div>
                <div className="animation_trans position-absolute white_blur_div py-2 py-md-4 px-2 px-md-3 right_white_blur_div">
                  <div className="d-flex align-items-center">
                    <img src={blurowl} alt="blurowl" />
                    <div className="ms-4">
                      <p className="mb-0 ff_poppins fw-semibold fs_md clr_white_fa">
                        Patient Recover
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 ff_poppins fw-normal fs_md clr_white_fa opacity_09">
                    We are using an injection <br /> to stop the growth factor{" "}
                    <br /> of Retina
                  </p>
                </div>
                <img
                  src={arrow}
                  alt="arrow"
                  className="d-none d-xl-block position-absolute morethen_sec_arrow_img_pos"
                />
                <img src={morethenimg} alt="morethenimg " className="w-100 " />
              </div>
            </Col>
            <Col data-aos="flip-down" lg={6} className="pt-4">
              <div className=" pb-xl-5">
                <p className=" ff_plus fw_500 fs_4xl clr_white opacity_09">
                  More than 50% patients recovered
                </p>
                <p className=" ff_poppins fw-normal fs_md clr_white_fa opacity_07">
                  In 2013, We conducted a test with 365 dry and wet AMD
                  patients. In this test recovery rate of patients is 48% of dry
                  AMD and 60% of wet AMD. Another patient named Paddy, was
                  suffering from dry AMD and temporary vision loss. Our
                  strategies cured her and now she is living happily.
                </p>
                <button className="ff_plus fw-semibold fs_md clr_white bg_linear_green border-0 border_radius_51 padding_15_30 bg_linear_hover transition mt-4 mt_40">
                  Book Call
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MoreThen;
