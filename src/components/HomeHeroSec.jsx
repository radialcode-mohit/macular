import React from "react";
import { Container } from "react-bootstrap";
import heroeye from "../assets/images/svg/heroseceye.svg";
import lefteye from "../assets/images/svg/herolefteye.svg";
import leftplus from "../assets/images/svg/heroleftplus.svg";
import leftbtmplus from "../assets/images/svg/heroleftbtmplus.svg";
import righteye from "../assets/images/svg/herorighteye.svg";
const HomeHeroSec = () => {
  return (
    <section className="py-5 position-relative bg_big_eye">
      <div className="position-absolute green_crcle hero_green_div_right d-none d-md-inline-block"></div>
      <Container className="py-sm-5 position-relative custom_container_1140">
        <img
          src={leftbtmplus}
          alt="leftbtmplus"
          className="hero_sec_animation d-none d-lg-inline-block position-absolute left_btm_plus_home"
        />

        <div className=" max_w_1050 mx-auto bg_big_eye_before position-relative">
          <img
            src={leftplus}
            alt="leftplus"
            className="hero_sec_animation d-none d-lg-inline-block position-absolute hero_right_plus_home"
          />{" "}
          <img
            src={righteye}
            alt="righteye"
            className="hero_sec_animation d-none d-lg-inline-block position-absolute hero_right_eye_home"
          />
          <img
            src={lefteye}
            alt="lefteye"
            className="hero_sec_animation d-none d-lg-inline-block position-absolute hero_left_eye_home"
          />
          <img
            src={leftplus}
            alt="leftplus"
            className="hero_sec_animation d-none d-lg-inline-block position-absolute hero_left_plus_home"
          />
          <div className="position-absolute green_crcle hero_green_div_left"></div>{" "}
          <div className=" max_w_750 mx-auto">
            <p className="line_h_120 text-center ff_plus fw-semibold fs_5xl clr_white">
              Seeing life <span className=" bg_clearly_line">clearly,</span>{" "}
              with <br />
              Macular Program
            </p>
            <div className="  position-relative">
              <div className=" position-absolute white_blur_div no_white_left_div animation_trans1">
                <p className="mb-0 ff_plus fw_500 fs_md clr_white p_20">
                  No Injection
                  <br />
                  Required
                </p>
              </div>
              <div className=" position-absolute white_blur_div no_white_right_div animation_trans">
                <p className="mb-0 ff_plus fw_500 fs_md clr_white p_20 pe-4">
                  Certificated <br /> Method
                </p>
              </div>
              <div className="text-center">
                <img
                  src={heroeye}
                  alt="heroeye"
                  className="pt-5 w_90_percent   w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="d-none d-lg-block  position-absolute scroll_pos  mb-0 ttranslate_90_deg text-uppercase ff_plus fw-semibold fs_md clr_white opacity_07">
          scroll
        </p>
      </Container>
    </section>
  );
};

export default HomeHeroSec;
