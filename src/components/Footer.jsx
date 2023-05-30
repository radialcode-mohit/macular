import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import navicon from "../assets/images/svg/navicon.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg_dark_blue ">
      <Container className="custom_container_1140 py-5">
        <Row className="py-lg-5 justify-content-between">
          <Col lg={3}>
            <div>
              <Link to="/">
                {" "}
                <a data-aos="fade-down" href="#">
                  {" "}
                  <img src={navicon} alt="navicon" />
                </a>
              </Link>
              <p className=" ff_roboto fw-normal fs_md clr_white_opacity_07 pt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit
              </p>
              <div className="d-flex footersvg">
                <div className="transition translate_on_hver cursur_pointer">
                  <a
                    target="/blank"
                    href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804944%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804944&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007766%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#23A370" />
                      <path
                        d="M12.9616 14.0632H14.7335L15.4423 11.2281H12.9616V9.81048C12.9616 9.08042 12.9616 8.39289 14.3791 8.39289H15.4423V6.01134C15.2113 5.98086 14.3387 5.91211 13.4173 5.91211C11.4929 5.91211 10.1264 7.08658 10.1264 9.24344V11.2281H8V14.0632H10.1264V20.088H12.9616V14.0632Z"
                        fill="#FBFBFB"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mx-3 transition translate_on_hver cursur_pointer">
                  <a target="/blank" href="https://twitter.com/tweeter?lang=en">
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#23A370" />
                      <path
                        d="M20.1239 7.74767C19.5781 7.99574 18.9898 8.15877 18.3802 8.23673C19.004 7.86107 19.486 7.26569 19.7128 6.5498C19.1245 6.9042 18.4724 7.15228 17.7848 7.29404C17.2249 6.68448 16.4381 6.33008 15.5451 6.33008C13.8794 6.33008 12.5185 7.69096 12.5185 9.3708C12.5185 9.61179 12.5469 9.8457 12.5965 10.0654C10.0732 9.93784 7.82629 8.7258 6.33074 6.89003C6.06848 7.33657 5.91964 7.86107 5.91964 8.41393C5.91964 9.47004 6.45123 10.4056 7.27343 10.9372C6.77019 10.9372 6.30239 10.7955 5.89129 10.5828V10.6041C5.89129 12.0784 6.9403 13.3117 8.32954 13.5881C7.88351 13.7102 7.41526 13.7272 6.96156 13.6377C7.15408 14.242 7.53111 14.7707 8.03965 15.1496C8.5482 15.5284 9.16269 15.7384 9.79674 15.75C8.72195 16.6008 7.38967 17.0607 6.01887 17.0541C5.77788 17.0541 5.53689 17.04 5.2959 17.0116C6.64261 17.8763 8.24448 18.3796 9.95976 18.3796C15.5451 18.3796 18.6141 13.7441 18.6141 9.7252C18.6141 9.59053 18.6141 9.46295 18.607 9.32828C19.2024 8.903 19.7128 8.36432 20.1239 7.74767Z"
                        fill="#FBFBFB"
                      />
                    </svg>
                  </a>
                </div>
                <div className="transition translate_on_hver cursur_pointer">
                  <a target="/blank" href="https://www.instagram.com/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#23A370" />
                      <path
                        d="M15.279 5.08887H8.89988C7.91329 5.08992 6.96741 5.48231 6.26978 6.17994C5.57216 6.87756 5.17977 7.82344 5.17871 8.81004V15.1892C5.17977 16.1758 5.57216 17.1217 6.26978 17.8193C6.96741 18.5169 7.91329 18.9093 8.89988 18.9103H15.279C16.2656 18.9093 17.2115 18.5169 17.9091 17.8193C18.6067 17.1217 18.9991 16.1758 19.0002 15.1892V8.81004C18.9991 7.82344 18.6067 6.87756 17.9091 6.17994C17.2115 5.48231 16.2656 5.08992 15.279 5.08887ZM12.0895 15.1892C11.4586 15.1892 10.8419 15.0021 10.3174 14.6516C9.7929 14.3012 9.38408 13.803 9.14267 13.2202C8.90126 12.6374 8.8381 11.9961 8.96117 11.3774C9.08424 10.7586 9.38801 10.1903 9.83408 9.74424C10.2802 9.29817 10.8485 8.99439 11.4672 8.87132C12.0859 8.74825 12.7272 8.81142 13.31 9.05283C13.8929 9.29424 14.391 9.70305 14.7415 10.2276C15.092 10.7521 15.279 11.3688 15.279 11.9996C15.2781 12.8453 14.9418 13.656 14.3438 14.254C13.7459 14.852 12.9351 15.1883 12.0895 15.1892ZM16.0764 8.81004C15.9187 8.81004 15.7645 8.76327 15.6334 8.67565C15.5023 8.58803 15.4001 8.4635 15.3397 8.31779C15.2794 8.17209 15.2636 8.01176 15.2943 7.85708C15.3251 7.7024 15.4011 7.56032 15.5126 7.4488C15.6241 7.33728 15.7662 7.26134 15.9209 7.23057C16.0755 7.1998 16.2359 7.21559 16.3816 7.27595C16.5273 7.3363 16.6518 7.4385 16.7394 7.56963C16.827 7.70076 16.8738 7.85493 16.8738 8.01264C16.8738 8.22412 16.7898 8.42694 16.6403 8.57648C16.4907 8.72602 16.2879 8.81004 16.0764 8.81004ZM14.2158 11.9996C14.2158 12.4202 14.0911 12.8313 13.8575 13.181C13.6238 13.5306 13.2917 13.8032 12.9032 13.9641C12.5146 14.1251 12.0871 14.1672 11.6746 14.0851C11.2621 14.0031 10.8833 13.8006 10.5859 13.5032C10.2885 13.2058 10.086 12.8269 10.0039 12.4144C9.92188 12.002 9.96399 11.5744 10.1249 11.1859C10.2859 10.7973 10.5584 10.4652 10.9081 10.2316C11.2578 9.99794 11.6689 9.87323 12.0895 9.87323C12.6534 9.87323 13.1943 10.0973 13.593 10.496C13.9918 10.8948 14.2158 11.4357 14.2158 11.9996Z"
                        fill="#FBFBFB"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <Row className=" justify-content-between">
              <Col data-aos="fade-up" xs={6} lg={2} className="px-2">
                <ul className="ps-0 mb-0 pt-3">
                  <li className=" ff_roboto fw_900 fs_md clr_white">
                    Quick Links
                  </li>
                  <li className="pt-3">
                    <Link to="/">
                      {" "}
                      <a
                        href="#"
                        className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="pt-3">
                    <Link to="/about">
                      {" "}
                      <a
                        href="#"
                        className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#"
                      className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                    >
                      Location
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#"
                      className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                    >
                      Process
                    </a>
                  </li>
                  <li className="pt-3">
                    <Link to="/testimonial">
                      {" "}
                      <a
                        href="#"
                        className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                      >
                        Testimonials
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col data-aos="fade-down" xs={6} lg={3} className="px-2">
                <ul className="ps-0 mb-0 pt-3">
                  <li className=" ff_roboto fw_900 fs_md clr_white">Support</li>
                  <li className="pt-3">
                    <a
                      href="#"
                      className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                    >
                      +0 00 000 0000
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#"
                      className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                    >
                      info@macularpro.com
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#"
                      className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#"
                      className="clr_white_on_hover ff_roboto fw-normal fs_md clr_white_fa opacity_07"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                data-aos="fade-up"
                xs={12}
                sm={6}
                lg={5}
                className="pt-4 pt-lg-0 "
              >
                <ul className=" mb-0 ps-0">
                  <li className=" ff_roboto fw_900 fs_md clr_white pb-1">
                    Search
                  </li>
                  <li className="br_8 bg_rbg_48_48_48 d-flex align-items-center justify-content-between">
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-100 border-0 outline_0 p_10 ff_roboto fw-semibold fs_md bg-transparent border-0 clr_white_fa"
                    />
                    <span className="cursur_pointer me-1">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="38"
                          height="38"
                          rx="4"
                          fill="#00FFCC"
                          fill-opacity="0.5"
                        />
                        <path
                          opacity="0.7"
                          d="M23.1563 21.375H22.2181L21.8856 21.0544C23.0896 19.6579 23.7513 17.8751 23.75 16.0313C23.75 14.5046 23.2973 13.0123 22.4492 11.7429C21.601 10.4736 20.3955 9.48427 18.9851 8.90006C17.5747 8.31584 16.0227 8.16299 14.5254 8.46082C13.0281 8.75865 11.6528 9.49379 10.5733 10.5733C9.49379 11.6528 8.75865 13.0281 8.46082 14.5254C8.16299 16.0227 8.31584 17.5747 8.90006 18.9851C9.48427 20.3955 10.4736 21.601 11.7429 22.4492C13.0123 23.2973 14.5046 23.75 16.0313 23.75C17.9431 23.75 19.7006 23.0494 21.0544 21.8856L21.375 22.2181V23.1563L27.3125 29.0819L29.0819 27.3125L23.1563 21.375ZM16.0313 21.375C13.0744 21.375 10.6875 18.9881 10.6875 16.0313C10.6875 13.0744 13.0744 10.6875 16.0313 10.6875C18.9881 10.6875 21.375 13.0744 21.375 16.0313C21.375 18.9881 18.9881 21.375 16.0313 21.375Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </li>
                  <ul className="ps-0 mb-0 pt-3">
                    <li className=" ff_roboto fw_900 fs_md clr_white pt-2">
                      Legal
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="clr_white_on_hover  ff_roboto fw-normal clr_white opacity_06 fs_md"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="clr_white_on_hover  ff_roboto fw-normal clr_white opacity_07 fs_md"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <p className="mb-0 ff_roboto fw-normal fs_md text-center clr_white oapcity_08 border_top  py-3">
        MacularProgram© 2023 | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
