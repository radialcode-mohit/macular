import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import mainimg from "../assets/images/svg/3dslider.svg";
const Symptom = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <section className="py-5">
      <Container className="pt-3 pb-lg-5 custom_container_1140">
        <div className="pb-5">
          <div className=" text-center py_41 bg_rgb_0_0_0">
            <h2
              data-aos="fade-down"
              className=" ff_plus fw_500 fs_4xl clr_white opacity_09"
            >
              Symptoms of the disease
            </h2>
            <p
              data-aos="fade-up"
              className=" ff_roboto fw-normal fs_md clr_white_fa opacity_07"
            >
              Macular degeneration is a progressive eye disease that can cause a
              range of problems, including:
            </p>
          </div>
          <div className=" bg_rgb_39_162 px-md-4 px-2">
            {" "}
            <Row
              className="px-md-3 py-md-5 py-4 flex-column-reverse flex-lg-row justify-content-center justify-content-lg-between 
           align-items-center"
            >
              <Col data-aos="fade-right" lg={7} className="pb-5">
                <Slider {...settings} className="patient_slider secondsslider">
                  <div>
                    <p className=" ff_plus fw_500 fs_xl clr_white_fa ">
                      Blurred or distorted central vision
                    </p>
                    <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                      This is one of the primary symptoms of macular
                      degeneration. As the disease progresses, it can cause the
                      vision to become increasingly blurred or distorted, making
                      it difficult to read, recognize faces, or perform other
                      tasks that require clear vision.
                    </p>
                  </div>
                  <div>
                    <p className=" ff_plus fw_500 fs_xl clr_white_fa ">
                      Alex willson
                    </p>
                    <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                      This is one of the primary symptoms of macular
                      degeneration. As the disease progresses, it can cause the
                      vision to become increasingly blurred or distorted, making
                      it difficult to read, recognize faces, or perform other
                    </p>
                  </div>
                  <div>
                    <p className=" ff_plus fw_500 fs_xl clr_white_fa ">
                      Alex willson
                    </p>
                    <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                      This is one of the primary symptoms of macular
                      degeneration. As the disease progresses, it can cause the
                      vision to become increasingly blurred or distorted, making
                      e faces, or perform other tasks that require clear vision.
                    </p>
                  </div>
                </Slider>
              </Col>
              <Col data-aos="fade-left" xs={10} lg={5}>
                <div className=" position-relative">
                  <div className=" position-absolute  sliderimg_green_crcle"></div>
                  <img src={mainimg} alt="sliderimg" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Symptom;
