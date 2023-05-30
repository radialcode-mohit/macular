import React from "react";
import { Container } from "react-bootstrap";
import Roadmap from "./Roadmap";

import AboutUsHero from "./AboutUsHero";
import OurTeam from "./OurTeam";
import MoreThen from "./MoreThen";
import SucessSec from "./SucessSec";
import OurPatients from "./OurPatients";
import FaqAboutUs from "./FaqAboutUs";
import Footer from "./Footer";
import MyNav from "./MyNav";

const AboutUs = () => {
  return (
    <>
      <MyNav underline2="underline" greencolor2="clr_darkgreen" />
      <AboutUsHero />
      <Roadmap />
      <OurTeam />
      <MoreThen />
      <SucessSec />
      <OurPatients />
      <FaqAboutUs />
      <Footer />
    </>
  );
};

export default AboutUs;
