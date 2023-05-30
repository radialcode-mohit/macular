import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expert1 from "../assets/images/png/expert1.png";
import expert2 from "../assets/images/png/expert2.png";
const Experts = () => {
  return (
    <section className=" bg_expert_img mx_35 br_20 mb-5 py-5">
      <Container className=" custom_container_1140">
        <div className=" max_w_774 mx-auto">
          <p
            data-aos="fade-down"
            className=" ff_plus fw_500 fs_4xl clr_white opacity_09 text-center"
          >
            The Experts behind the Program
          </p>
          <Row className="pt-4 pt-md-5 justify-content-center">
            <Col data-aos="fade-up-right" xs={10} lg={6}>
              <div>
                <img
                  src={expert1}
                  alt="expertoldman"
                  className=" w-100 br_12 border_2px_solid_white"
                />
                <div className="d-flex align-items-start justify-content-between pt-3">
                  <div>
                    <p className=" ff_plus fw-semibold fs_xl clr_white mb-2">
                      Brian A. Bakke, PhD
                    </p>
                    <p className=" ff_roboto fw-normal fs_md clr_white_fa">
                      PhD Biochemistry
                    </p>
                  </div>
                  <span className=" cursur_pointer">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.995 11.0328C24.3193 11.326 23.6047 11.5198 22.8734 11.6082C23.6449 11.1473 24.223 10.4222 24.5006 9.56751C23.7756 9.99907 22.982 10.3031 22.1543 10.4665C21.601 9.86648 20.8642 9.46709 20.0595 9.33094C19.2548 9.1948 18.4276 9.3296 17.7078 9.71421C16.9879 10.0988 16.4161 10.7115 16.0819 11.4561C15.7478 12.2007 15.6703 13.0352 15.8615 13.8286C14.3956 13.7545 12.9618 13.3728 11.6531 12.7084C10.3444 12.044 9.19009 11.1117 8.26519 9.97204C7.94079 10.5385 7.77033 11.1801 7.77076 11.8329C7.76961 12.4392 7.91838 13.0363 8.20384 13.5711C8.4893 14.106 8.90258 14.5619 9.40688 14.8984C8.82073 14.8824 8.24711 14.7252 7.7348 14.4399V14.4849C7.73919 15.3343 8.03685 16.1561 8.57742 16.8114C9.11798 17.4666 9.86828 17.915 10.7014 18.0807C10.3807 18.1783 10.0477 18.2298 9.71253 18.2336C9.4805 18.2309 9.24904 18.2098 9.02032 18.1706C9.25757 18.9013 9.71669 19.5399 10.3338 19.9975C10.9509 20.4551 11.6953 20.7089 12.4634 20.7237C11.1663 21.7443 9.565 22.3013 7.91459 22.3059C7.6141 22.3069 7.31384 22.2889 7.01562 22.252C8.70068 23.3399 10.6644 23.9175 12.6701 23.915C14.0543 23.9294 15.4274 23.6678 16.7093 23.1456C17.9912 22.6234 19.1562 21.8509 20.1363 20.8734C21.1163 19.8959 21.8917 18.7328 22.4173 17.4523C22.9428 16.1717 23.2079 14.7993 23.1971 13.4151C23.1971 13.2623 23.1971 13.1005 23.1971 12.9386C23.9025 12.4126 24.5109 11.7677 24.995 11.0328Z"
                        fill="#26B390"
                      />
                      <rect
                        x="0.5"
                        y="1.10742"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#26B390"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Col>
            <Col data-aos="fade-up-left" xs={10} lg={6}>
              <div className="ps-2">
                <img
                  src={expert2}
                  alt="expert2oldman"
                  className=" w-100 br_12 border_2px_solid_white"
                />
                <div className="d-flex align-items-start justify-content-between pt-3">
                  <div>
                    <p className=" ff_plus fw-semibold fs_xl clr_white mb-2">
                      Brian A. Bakke, PhD
                    </p>
                    <p className=" ff_roboto fw-normal fs_md clr_white_fa">
                      PhD Biochemistry
                    </p>
                  </div>
                  <span className=" cursur_pointer">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.995 11.0328C24.3193 11.326 23.6047 11.5198 22.8734 11.6082C23.6449 11.1473 24.223 10.4222 24.5006 9.56751C23.7756 9.99907 22.982 10.3031 22.1543 10.4665C21.601 9.86648 20.8642 9.46709 20.0595 9.33094C19.2548 9.1948 18.4276 9.3296 17.7078 9.71421C16.9879 10.0988 16.4161 10.7115 16.0819 11.4561C15.7478 12.2007 15.6703 13.0352 15.8615 13.8286C14.3956 13.7545 12.9618 13.3728 11.6531 12.7084C10.3444 12.044 9.19009 11.1117 8.26519 9.97204C7.94079 10.5385 7.77033 11.1801 7.77076 11.8329C7.76961 12.4392 7.91838 13.0363 8.20384 13.5711C8.4893 14.106 8.90258 14.5619 9.40688 14.8984C8.82073 14.8824 8.24711 14.7252 7.7348 14.4399V14.4849C7.73919 15.3343 8.03685 16.1561 8.57742 16.8114C9.11798 17.4666 9.86828 17.915 10.7014 18.0807C10.3807 18.1783 10.0477 18.2298 9.71253 18.2336C9.4805 18.2309 9.24904 18.2098 9.02032 18.1706C9.25757 18.9013 9.71669 19.5399 10.3338 19.9975C10.9509 20.4551 11.6953 20.7089 12.4634 20.7237C11.1663 21.7443 9.565 22.3013 7.91459 22.3059C7.6141 22.3069 7.31384 22.2889 7.01562 22.252C8.70068 23.3399 10.6644 23.9175 12.6701 23.915C14.0543 23.9294 15.4274 23.6678 16.7093 23.1456C17.9912 22.6234 19.1562 21.8509 20.1363 20.8734C21.1163 19.8959 21.8917 18.7328 22.4173 17.4523C22.9428 16.1717 23.2079 14.7993 23.1971 13.4151C23.1971 13.2623 23.1971 13.1005 23.1971 12.9386C23.9025 12.4126 24.5109 11.7677 24.995 11.0328Z"
                        fill="#26B390"
                      />
                      <rect
                        x="0.5"
                        y="1.10742"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#26B390"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experts;
