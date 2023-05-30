import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import rightarrow from "../assets/images/svg/rightarrow.svg";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="pb-5">
      <Container className="pb-xl-5 custom_container_1140">
        <p
          data-aos="fade-up"
          className="text-center ff_plus fw_500 fs_4xl clr_white opacity_09 position-relative faqarrow"
        >
          Frequently Asked Questions
        </p>
        <Row className=" justify-content-center py-5">
          <Col data-aos="fade-right" lg={4}>
            <div>
              <div className="pe-xl-5">
                <div
                  onClick={() => {
                    setfirst(0);
                  }}
                  className={
                    first === 0
                      ? "cursur_pointer d-flex align-items-center justify-content-between  bg_linear_green_faq br_10 p-3 p-xl-4"
                      : "cursur_pointer d-flex align-items-center justify-content-between bg_transparent br_10 p-3 p-xl-4"
                  }
                >
                  <p className=" ff_roboto fw-semibold fs_lg clr_white_fa mb-0 ">
                    Customer Questions
                  </p>
                  <img src={rightarrow} alt="rightarrow" />
                </div>

                <div
                  onClick={() => {
                    setfirst(1);
                  }}
                  className={
                    first === 1
                      ? "cursur_pointer d-flex align-items-center justify-content-between  bg_linear_green_faq br_10 p-3 p-xl-4"
                      : "cursur_pointer d-flex align-items-center justify-content-between bg_transparent br_ 10 p-3 p-xl-4 brdr_btm_1px_fa"
                  }
                >
                  <p className=" ff_roboto fw-semibold fs_lg clr_white_fa mb-0 ">
                    Tech Support Questions
                  </p>
                  <img src={rightarrow} alt="rightarrow" />
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left" lg={7} className="pt-4 pt-lg-0">
            <div className={first === 0 ? "d-block" : "d-none"}>
              <Accordion defaultActiveKey="8">
                <div className=" border-bottom pb_22">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className=" ff_plus fw_500 fs_lg clr_white_fa ">
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body className=" ff_plus fw_500 fs_md clr_white_fa ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Do Blood Tests Improve?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
            <div className={first === 1 ? "d-block" : "d-none"}>
              <Accordion defaultActiveKey="8">
                <div className=" border-bottom pb_22">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className=" ff_plus fw_500 fs_lg clr_white_fa ">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body className=" ff_plus fw_500 fs_md clr_white_fa ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Do Blood Tests Improve?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom py_22 py_16">
                  {" "}
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
