import React from "react";
import { Container } from "react-bootstrap";

const Roadmap = () => {
  return (
    <section className=" py-5 mb-lg-5 position-relative">
      <div className=" position-absolute green_crcle start-0 top-0"></div>
      <div className=" position-absolute green_crcle roadmapgreen_div_right d-none d-lg-inline-block"></div>
      <div className=" position-absolute green_crcle roadmapgreen_div_center d-none d-lg-inline-block"></div>
      <Container className="pb-0 pb-md-5 py-sm-4">
        <p
          data-aos="flip-left"
          className="roadmap_arrow position-relative  ff_plus fw_500 fs_4xl clr_white_fa text-center "
        >
          Our Journey
        </p>
        <div className="pt-5">
          <div class="timeline">
            <div class="timeline_container right">
              <div
                data-aos="fade-left"
                class="content roadmap_box_hsaodw_hover"
              >
                <h2 className=" ff_plus fw_500 fs_xl clr_white ">
                  16 May, 2013
                </h2>
                <p className="pt-3 ff_roboto fw-normal fs_md clr_white_fa opacity_08 pe-lg-5">
                  My mother had macular degeneration for the last 15 years.
                  After conducting research on the disease, I successfully
                  treated her, and she showed improvement within six months.
                </p>
              </div>
            </div>
            <div class="timeline_container me_140 left">
              <div
                data-aos="fade-right"
                class="content roadmap_box_hsaodw  mt-4 mt-lg-0"
              >
                <h2 className=" ff_plus fw_500 fs_xl clr_white ">2015</h2>
                <p className="pt-3 ff_roboto fw-normal fs_md clr_white_fa opacity_08 pe-lg-5">
                  A patient named Paddy did not respond to injections for her
                  eye treatment. I conducted research and found an alternative
                  treatment that did not involve injections. As a result,
                  Paddy's vision improved, and she was able to see clearly.
                </p>
              </div>
            </div>
            <div class="timeline_container right">
              <div
                data-aos="fade-left"
                class="content roadmap_box_hsaodw_hover mt-4 mt-lg-0"
              >
                <h2 className=" ff_plus fw_500 fs_xl clr_white ">2017</h2>
                <p className="pt-3 ff_roboto fw-normal fs_md clr_white_fa opacity_08 pe-lg-5">
                  In 2017, I studied migraines and worked with 69 patients.
                  Within three to six months of treatment, 54 patients showed
                  improvement in their vision.
                </p>
              </div>
            </div>
            <div class="timeline_container me_140 left">
              <div
                data-aos="fade-right"
                class="content roadmap_box_hsaodw_hover  mt-4 mt-lg-0"
              >
                <h2 className=" ff_plus fw_500 fs_xl clr_white ">2021</h2>
                <p className="pt-3 ff_roboto fw-normal fs_md clr_white_fa opacity_08 pe-lg-5">
                  In 2020, I studied 365 cases of eye disease and conducted
                  research on them. In 2021, I conducted a test based on my
                  research, and the results showed a recovery rate of 48% for
                  dry AMD and 60% for wet AMD patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
