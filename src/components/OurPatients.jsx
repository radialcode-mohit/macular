import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/svg/patientsliderimg.svg";
import Slider from "react-slick";
const OurPatients = () => {
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
      <Container className="py-lg-5 mt-lg-5 custom_container_1140">
        <div className=" ">
          <p
            data-aos="fade-down"
            className="text-center  position-relative patient_arrow ff_plus fw_500 fs_4xl clr_white opacity_09"
          >
            What our patients say
          </p>
          <p
            data-aos="fade-up"
            className="text-center  ff_roboto fw-normal fs_md clr_white_fa opacity_07"
          >
            Viverra nisi integer convallis ultricies tellus mauris. Ante purus
            pretium ac vitae morbi in <br /> ultricies ut. Orci pharetra
            adipiscing ut.
          </p>
          <Row
            className="py-5 justify-content-center justify-content-lg-between 
           align-items-center"
          >
            <Col data-aos="flip-left" xs={10} lg={4}>
              <div className=" position-relative">
                <div className=" position-absolute  sliderimg_green_crcle"></div>
                <img src={mainimg} alt="sliderimg" className="w-100" />
              </div>
            </Col>
            <Col data-aos="flip-right" lg={6} className="pb-5">
              <Slider {...settings} className="patient_slider">
                <div>
                  <p className=" ff_plus fw_500 fs_xl clr_white_fa ">
                    Alex willson
                  </p>
                  <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                    Lectus adipiscing pulvinar et praesent justo libero luctus
                    tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                    fames ante in vestibulum duis in odio. Amet pharetra mauris
                    at pellentesque. Netus libero nulla eu id.
                  </p>
                  <a
                    href="#"
                    className=" ff_roboto fw-normal fs_md clr_neon opacity_07"
                  >
                    Read More...
                  </a>
                </div>
                <div>
                  <p className=" ff_plus fw_500 fs_xl clr_white_fa ">
                    Alex willson
                  </p>
                  <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum enim eaque consequatur optio sapiente quod quis
                    commodi dolorem architecto excepturi!
                  </p>
                  <a
                    href="#"
                    className=" ff_roboto fw-normal fs_md clr_neon opacity_07"
                  >
                    Read More...
                  </a>
                </div>
                <div>
                  <p className=" ff_plus fw_500 fs_xl clr_white_fa ">
                    Alex willson
                  </p>
                  <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                    Lectus adipiscing pulvinar et praesent justo libero luctus
                    tortor. A semper feugiat non dui ut
                  </p>
                  <a
                    href="#"
                    className=" ff_roboto fw-normal fs_md clr_neon opacity_07"
                  >
                    Read More...
                  </a>
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OurPatients;
