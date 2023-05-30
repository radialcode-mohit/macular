import React, { useState } from "react";
import { Container } from "react-bootstrap";
import mainimg from "../assets/images/png/utubeimgmain.png";
import utube from "../assets/images/svg/utube.svg";
const VideoTestimonial = () => {
  const [first, setfirst] = useState(false);
  return (
    <section className=" py-lg-5 position-relative ">
      <div className="green_crcle position-absolute testimonial_green_crcle_pos_left"></div>
      <div className="green_crcle position-absolute testimonial_green_crcle_pos_right"></div>
      <Container className="py-5 custom_container_1140">
        <h2
          data-aos="flip-right"
          className="pt-2 text-center arrow position-relative ff_plus fw_500 fs_4xl clr_white_fa"
        >
          Video Testimonials
        </h2>
        <div
          data-aos="zoom-in-down"
          className=" pt-5 pb-1 br_20 overflow-hidden "
        >
          {" "}
          <div
            className=" position-relative br_20 overflow-hidden"
            onClick={() => {
              setfirst(true);
            }}
          >
            <img
              src={mainimg}
              alt="mainimg"
              className="cursur_pointer w-100 position-relative z_1_plus br_20"
            />
            <img
              src={utube}
              alt="utube"
              className="cursur_pointer position-absolute top-50 start-50 translate-middle z_1 max_w77"
            />
            <div
              className={
                first
                  ? " position-absolute h-100 w-100 top-0 start-0 z_1"
                  : " position-absolute h-100 w-100 top-0 start-0 z_0"
              }
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UZc08gn4tF0"
                title="YouTube video player"
                frameborder="0"
                autoplay="true"
                playing={true}
                muted
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <p
          data-aos="zoom-out"
          className=" ff_plus fw_500 fs_3xl clr_white pt-4"
        >
          A patient named Paddy, was suffering from dry AMD and temporary vision
          loss. Our strategies cured her and now she is living happily.
        </p>
      </Container>
    </section>
  );
};

export default VideoTestimonial;
