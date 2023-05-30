import React from "react";
import { Container } from "react-bootstrap";
import leftplus from "../assets/images/svg/plus.svg";
import lefteye from "../assets/images/svg/btmlefteye.svg";
import rightplus from "../assets/images/svg/btmrghtplus.svg";
import righteye from "../assets/images/svg/rghttopeye.svg";
const TestiHeroSec = () => {
  return (
    <section className="bg_testimonial_hero_sec py-5 overflow-hidden">
      <Container className="py-5 custom_container_1140">
        <div className=" position-relative ">
          <img
            src={leftplus}
            alt="leftplus"
            className=" position-absolute left_plus_pos hero_sec_animation"
          />
          <img
            src={lefteye}
            alt="lefteye"
            className=" position-absolute lefteye_pos hero_sec_animation"
          />
          <img
            src={rightplus}
            alt="rightplus"
            className=" position-absolute rightplus_pos hero_sec_animation"
          />
          <img
            src={righteye}
            alt="righteye"
            className=" position-absolute righteye_pos hero_sec_animation"
          />
          <h1
            data-aos="flip-down"
            className="py-4 position-relative people_say_bg ff_plus fw-semibold fs_5xl clr_white  text-center"
          >
            What people say
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default TestiHeroSec;
