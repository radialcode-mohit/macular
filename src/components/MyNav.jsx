import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import navicon from "../assets/images/svg/navicon.svg";
import close from "../assets/images/png/close.png";
import { Link } from "react-router-dom";
const MyNav = (props) => {
  const [first, setfirst] = useState(0);

  const [navbar, setnavbar] = useState(true);
  if (navbar) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className=" bg-bl ack py-3">
      <Container className="custom_container_1140">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <Link to="/">
            {" "}
            <a href="#" data-aos="fade-down">
              <img src={navicon} alt="navicon" />
            </a>
          </Link>
          <ul
            data-aos="fade-down"
            className={
              navbar
                ? "d-flex mb-0 ps-0 nav_mobile_view flex-column flex-lg-row align-items-center justify-content-center  left_minus_100"
                : "d-flex mb-0 ps-0 nav_mobile_view flex-column flex-lg-row align-items-center justify-content-center left_0"
            }
          >
            <Link to="/">
              {" "}
              <li
                onClick={() => {
                  setnavbar(true);
                }}
                className=" mt-5 mt-lg-0"
              >
                <a
                  href="#"
                  className={`ff_plus clr_white_opacity_07   ${props.greencolor} fw-normal fs_md  hover_underline ${props.underline} position-relative`}
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/about">
              {" "}
              <li
                onClick={() => {
                  setnavbar(true);
                }}
                className="ms_40 mt-5 mt-lg-0"
              >
                <a
                  href="#"
                  className={`ff_plus clr_white_opacity_07   ${props.greencolor2} fw-normal fs_md  hover_underline ${props.underline2} position-relative`}
                >
                  About
                </a>
              </li>
            </Link>
            <Link to="/testimonial">
              <li
                onClick={() => {
                  setnavbar(true);
                }}
                className="ms_40 mt-5 mt-lg-0"
              >
                <a
                  onClick={() => {
                    setfirst(2);
                  }}
                  href="#"
                  className={`ff_plus clr_white_opacity_07   ${props.greencolor3} fw-normal fs_md  hover_underline ${props.underline3} position-relative`}
                >
                  Testimonials
                </a>
              </li>
            </Link>
            <li
              onClick={() => {
                setnavbar(true);
              }}
              className="ms_40 mt-5 mt-lg-0"
            >
              <a
                href="#"
                className={
                  first == 3
                    ? "ff_plus fw-normal fs_md clr_darkgreen underline position-relative"
                    : "ff_plus fw-normal fs_md  clr_white_opacity_07 hover_underline position-relative hover_clr_green"
                }
              >
                Location
              </a>
            </li>
            <li
              onClick={() => {
                setnavbar(true);
              }}
              className="ms_40 mt-5 mt-lg-0"
            >
              <a
                href="#"
                className={
                  first == 4
                    ? "ff_plus fw-normal fs_md clr_darkgreen underline position-relative"
                    : "ff_plus fw-normal fs_md  clr_white_opacity_07 hover_underline position-relative hover_clr_green"
                }
              >
                Process
              </a>
            </li>
            <li
              onClick={() => {
                setnavbar(true);
              }}
              className=" mt-5 d-lg-none"
            >
              <button className=" ff_plus fw-semibold fs_md clr_white bg_linear_green border-0 border_radius_51 padding_15_30 bg_linear_hover transition">
                Contact Us
              </button>
            </li>
            <img
              src={close}
              onClick={() => {
                setnavbar(true);
              }}
              alt="close"
              className="max_w_40 position-absolute close_img_pos d-lg-none"
            />
          </ul>

          <button
            data-aos="fade-down"
            className="d-none d-lg-inline-block ff_plus fw-semibold fs_md clr_white bg_linear_green border-0 border_radius_51 padding_15_30 bg_linear_hover transition"
          >
            Contact Us
          </button>

          <a
            href="#"
            className="nav_icon_container d-lg-none"
            onClick={() => {
              setnavbar(false);
            }}
          >
            <span></span>
            <span className="my-2"></span>
            <span></span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
