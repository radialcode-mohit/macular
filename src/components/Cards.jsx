import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import old1 from "../assets/images/png/oldlady1.png";
import old2 from "../assets/images/png/oldman2.png";
import old3 from "../assets/images/png/old3.png";
import old4 from "../assets/images/png/old4.png";
import old5 from "../assets/images/png/old5.png";
import old6 from "../assets/images/png/old6.png";
import utube from "../assets/images/svg/utube.svg";
const Cards = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className=" position-relative">
      <div className=" position-absolute green_crcle left_green_crcle_cards"></div>
      <div className=" position-absolute green_crcle center_green_crcle_cards"></div>
      <div className=" position-absolute green_crcle right_green_crcle_cards"></div>
      <Container className="custom_container_1140">
        <Row>
          <Col data-aos="fade-right" sm={6} lg={4}>
            <div
              onClick={() => {
                setfirst(1);
              }}
              className={
                first === 1
                  ? "cursur_pointer border_neon overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
                  : "cursur_pointer border2px_black overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
              }
            >
              <div className=" position-relative">
                <a target="/blank" href="https://www.youtube.com/">
                  <img src={old1} alt="oldlady" className=" w-100" />
                </a>
                <img
                  src={utube}
                  alt="utube"
                  className=" position-absolute top-50 start-50 translate-middle  max_w30"
                />
              </div>
              <div className=" ps-3 pe-2">
                <p className="pt-3 ff_plus fw_500 fs_lg clr_white_fa">
                  Jenny Wilson
                </p>
                <p className="mb-0 ff_roboto fw-normal fs_md clr_white_fa">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </div>
          </Col>
          <Col data-aos="flip-up" sm={6} lg={4} className="pt-4 pt-sm-0">
            <div
              onClick={() => {
                setfirst(0);
              }}
              className={
                first === 0
                  ? "cursur_pointer border_neon overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
                  : "cursur_pointer border2px_black overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
              }
            >
              <div className=" position-relative">
                <a target="/blank" href="https://www.youtube.com/">
                  <img src={old2} alt="oldlady" className=" w-100" />
                </a>
                <img
                  src={utube}
                  alt="utube"
                  className=" position-absolute top-50 start-50 translate-middle  max_w30"
                />
              </div>
              <div className=" ps-3 pe-2">
                <p className="pt-3 ff_plus fw_500 fs_lg clr_white_fa">
                  Dianne Russell
                </p>
                <p className="mb-0 ff_roboto fw-normal fs_md clr_white_fa">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left" sm={6} lg={4} className="pt-4 pt-lg-0">
            <div
              onClick={() => {
                setfirst(2);
              }}
              className={
                first === 2
                  ? "cursur_pointer border_neon overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
                  : "cursur_pointer border2px_black overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
              }
            >
              <div className=" position-relative">
                <a target="/blank" href="https://www.youtube.com/">
                  <img src={old3} alt="oldlady" className=" w-100" />
                </a>
                <img
                  src={utube}
                  alt="utube"
                  className=" position-absolute top-50 start-50 translate-middle  max_w30"
                />
              </div>
              <div className=" ps-3 pe-2">
                <p className="pt-3 ff_plus fw_500 fs_lg clr_white_fa">
                  Jacob Jones
                </p>
                <p className="mb-0 ff_roboto fw-normal fs_md clr_white_fa">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </div>
          </Col>
          <Col
            data-aos="fade-down-right"
            sm={6}
            lg={4}
            className="pt-4 pt-lg-5 mt-xl-3"
          >
            <div
              onClick={() => {
                setfirst(3);
              }}
              className={
                first === 3
                  ? "cursur_pointer border_neon overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
                  : "cursur_pointer border2px_black overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
              }
            >
              <div className=" position-relative">
                <a target="/blank" href="https://www.youtube.com/">
                  <img src={old4} alt="oldlady" className=" w-100" />
                </a>
                <img
                  src={utube}
                  alt="utube"
                  className=" position-absolute top-50 start-50 translate-middle  max_w30"
                />
              </div>
              <div className=" ps-3 pe-2">
                <p className="pt-3 ff_plus fw_500 fs_lg clr_white_fa">
                  Cameron Williamson
                </p>
                <p className="mb-0 ff_roboto fw-normal fs_md clr_white_fa">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </div>
          </Col>
          <Col
            data-aos="flip-down"
            sm={6}
            lg={4}
            className="pt-4 pt-lg-5 mt-xl-3"
          >
            <div
              onClick={() => {
                setfirst(4);
              }}
              className={
                first === 4
                  ? "cursur_pointer border_neon overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
                  : "cursur_pointer border2px_black overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
              }
            >
              <div className=" position-relative">
                <a target="/blank" href="https://www.youtube.com/">
                  <img src={old5} alt="oldlady" className=" w-100" />
                </a>
                <img
                  src={utube}
                  alt="utube"
                  className=" position-absolute top-50 start-50 translate-middle  max_w30"
                />
              </div>
              <div className=" ps-3 pe-2">
                <p className="pt-3 ff_plus fw_500 fs_lg clr_white_fa">
                  Esther Howard
                </p>
                <p className="mb-0 ff_roboto fw-normal fs_md clr_white_fa">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </div>
          </Col>
          <Col
            data-aos="fade-down-left"
            sm={6}
            lg={4}
            className="pt-4 pt-lg-5 mt-xl-3"
          >
            <div
              onClick={() => {
                setfirst(5);
              }}
              className={
                first === 5
                  ? "cursur_pointer border_neon overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
                  : "cursur_pointer border2px_black overflow-hidden border_neon_on_hover transition pb-5 border_radius_10 bg_39_187_162 box_shadow_0_4_42"
              }
            >
              <div className=" position-relative">
                <a target="/blank" href="https://www.youtube.com/">
                  <img src={old6} alt="oldlady" className=" w-100" />
                </a>
                <img
                  src={utube}
                  alt="utube"
                  className=" position-absolute top-50 start-50 translate-middle  max_w30"
                />
              </div>
              <div className=" ps-3 pe-2">
                <p className="pt-3 ff_plus fw_500 fs_lg clr_white_fa">
                  Eleanor Pena
                </p>
                <p className="mb-0 ff_roboto fw-normal fs_md clr_white_fa">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </div>
          </Col>
          <div className=" text-center pt_40">
            {" "}
            <button
              data-aos="zoom-out-up"
              className="border_radius_51 ff_plus fw-semibold fs_md clr_white border-0 bg_linear_hover bg_linear_green p_15_45 "
            >
              See all
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
