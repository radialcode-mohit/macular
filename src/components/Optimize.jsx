import React from "react";
import { Container } from "react-bootstrap";
import leftplus from "../assets/images/svg/bioleftplus.svg";
import lefteye from "../assets/images/svg/biolefteye.svg";
import centerplus from "../assets/images/svg/biocenterplus.svg";
import rightplus from "../assets/images/svg/biorightplus.png";
import righteye from "../assets/images/svg/biorighteye.svg";
const Optimize = () => {
  return (
    <section>
      <Container data-aos="flip-left" className="custom_container_1140">
        <div className="bg_rgba_38_180_156 border_radius_197 position-relative py-5">
          <img
            src={leftplus}
            alt="leftplus"
            className=" position-absolute leftplus_bio_pos d-none d-lg-block"
          />
          <img
            src={lefteye}
            alt="lefteye"
            className=" position-absolute lefteye_bio_pos d-none d-lg-block"
          />
          <img
            src={centerplus}
            alt="centerplus"
            className=" position-absolute center_plus_bio_pos d-none d-lg-block"
          />
          <img
            src={rightplus}
            alt="rightplus"
            className=" position-absolute right_plus_bio_pos d-none d-lg-block"
          />
          <img
            src={righteye}
            alt="righteye"
            className=" position-absolute right_eye_bio_pos d-none d-lg-block"
          />
          <div className=" biometry_green_div position-absolute "></div>
          <div className="max_w_650 text-center mx-auto py-2 ">
            <p className=" clr_white text-uppercase ff_plus pt-2 fw_500 fs_4xl">
              Optimize Biochemistry
            </p>
            <p className=" ff_roboto fw-normal fs_md clr_white px_12 opacity_07">
              Lectus adipiscing pulvinar et praesent justo libero luctus tortor.
              A semper feugiat non dui ut egestas eu. Euismod eu fames ante in
              vestibulum duis in odio. Amet pharetra mauris at pellentesque.
              Netus libero nulla eu id.
            </p>
            <button className="ff_plus fw-semibold fs_md clr_white bg_linear_green border-0 border_radius_51 padding_15_30 bg_linear_hover transition mt-4 mt-md-5">
              Book Call
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Optimize;
