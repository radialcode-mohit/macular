import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ourteam1 from "../assets/images/svg/ourteam1.svg";
import ourteam2 from "../assets/images/svg/ourteam2.svg";
const OurTeam = () => {
  return (
    <section className=" position-relative">
      <div className="d-none d-xl-block position-absolute green_crcle end-0 top-0"></div>
      <div className="d-none d-xl-block position-absolute green_crcle end-0 bottom_minus_10percent"></div>
      <div className="d-none d-xl-block position-absolute green_crcle left_our_team_green_crcle"></div>
      <div className="d-none d-xl-block position-absolute green_crcle center_our_team_green_crcle"></div>
      <Container className="custom_container_1140">
        <p
          data-aos="flip-up"
          className="text-center ff_plus fw_500 fs_4xl clr_white_fa"
        >
          Our Team
        </p>
        <Row className=" justify-content-center  justify-content-lg-between align-items-center py-5">
          <Col data-aos="fade-right" sm={10} lg={5}>
            <img src={ourteam1} alt="oldman1" className="w-100" />
          </Col>
          <Col data-aos="fade-left" lg={6} className="pt-4 pt-lg-0">
            <div>
              <p className=" ff_plus fw_500 fs_3xl clr_white ">
                George W. Rozakis, MD
              </p>
              <p className=" ff_roboto fw-normal fs_md clr_white_fa oapcity_08">
                Dr. Rozakis is a board certified biomedical engineer who studied
                medicine at Cornell Medical Center and studied Ophthalmology at
                the Duke Eye Center. Dr. Rozakis worked in the field of Advanced
                Wellness / Functional Medicine & The Optimization of
                Biochemistry for over 15 years. He has applied this science
                age-related chronic conditions. Dr. Rozakis won the advancements
                in healthcare award in Cleveland, Ohio (beating out the
                Cleveland Clinic) in 2015 for his work in Advanced Wellness and
                advocates for this approach to health care to his patients and
                colleagues.
              </p>
              <p className=" ff_roboto fw-normal fs_md clr_white_fa oapcity_08 pt-1">
                Dr. Rozakis pioneered the field of Lasik refractive surgery,
                phakic refractive lenses, and the use of hormones and other
                advanced testing to treat macular degeneration, migraine,
                parkinson's, arthritis, insomnia, menopause, low testosterone,
                auto immune disease and other age-related chronic conditions.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="flex-column-reverse flex-lg-row justify-content-center justify-content-lg-between align-items-center py-lg-5">
          <Col data-aos="fade-right" lg={6} className="pt-4 pt-lg-0">
            <div>
              <p className=" ff_plus fw_500 fs_3xl clr_white ">
                Brian Bakke, Ph.D.
              </p>
              <p className=" ff_roboto fw-normal fs_md clr_white_fa oapcity_08">
                Dr. Bakke also holds a master’s degree in human nutrition from
                Columbia University. His master’s thesis work focused on
                studying the clinical nutrition practice patterns used by eye
                professionals in the prevention and treatment of Age-Related
                Macular Degeneration (AMD).
              </p>
              <p className=" ff_roboto fw-normal fs_md clr_white_fa oapcity_08 pt-1">
                Prior to partnering with the Advanced Wellness Program through
                Investihealth, Dr. Bakke spent 6 years working as chief science
                officer with a medical consulting company. His work as chief
                science officer focused on collaborating with primary care
                physicians in developing personalized nutrition and bioidentical
                hormone based care plans for improving clinical outcomes for
                patients with complex medical conditions. Previously, Dr. Bakke
                spent 7 years working with the multi- national chemistry,
                biotechnology and life science companies BASF and Syngenta as a
                senior chemist.
              </p>
            </div>
          </Col>
          <Col data-aos="fade-left" sm={10} lg={5}>
            <img src={ourteam2} alt="oldman2" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurTeam;
