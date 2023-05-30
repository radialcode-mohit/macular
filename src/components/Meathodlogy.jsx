import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import meathodlogyimg from "../assets/images/svg/meathodlogy.svg";
const Meathodlogy = () => {
  return (
    <secttion className=" position-relative">
      <div className=" position-absolute green_crcle  meathodlogy_green_crcle_left"></div>
      <Container className="custom_container_1140">
        <Row className=" align-items-center justify-content-between ">
          <Col data-aos="fade-up-right" lg={6} xl={5}>
            <img
              src={meathodlogyimg}
              alt="meathodlogyimg"
              className="w-100 br_175_0_0_175"
            />
          </Col>
          <Col data-aos="fade-up-left" lg={6}>
            <p className="meathodlogy_arrow position-relative ff_plus fw_500 fs_4xl clr_white opacity_09">
              Our Methodology
            </p>
            <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_07">
              Quisque arcu erat aenean iaculis nisl molestie et tellus. In purus
              aliquam mauris quis molestie ornare mauris egestas nibh. Arcu sed
              neque est lacus vivamus mattis libero.
            </p>
            <p className=" ff_roboto fw-normal fs_md clr_white_fa opacity_07">
              Quisque arcu erat aenean iaculis nisl molestie et tellus. In purus
              aliquam mauris quis molestie ornare mauris egestas nibh. Arcu sed
              neque est lacus vivamus mattis libero.
            </p>
            <button className=" ff_plus fw-semibold fs_md clr_white bg_linear_green border-0 border_radius_51 padding_15_30 bg_linear_hover transition mt-xl-4">
              Learn more
            </button>
          </Col>
        </Row>
      </Container>
    </secttion>
  );
};

export default Meathodlogy;
