import React from "react";
import Meathodlogy from "./Meathodlogy";
import Homing from "./Homing";
import Optimize from "./Optimize";
import MoreThen from "./MoreThen";
import SucessSec from "./SucessSec";
import Egligible from "./Egligible";
import Faq from "./Faq";
import OurPatients from "./OurPatients";
import HomeHeroSec from "./HomeHeroSec";

import Experts from "./Experts";
import Fee from "./Fee";
import Footer from "./Footer";
import MyNav from "./MyNav";
import Symptom from "./Symptom";

const Home = () => {
  return (
    <div>
      <MyNav underline="underline" greencolor="clr_darkgreen" />
      <HomeHeroSec />
      <Symptom />
      <Meathodlogy />
      <Homing />
      <Optimize />
      <MoreThen />
      <SucessSec />
      <Egligible />
      <Fee />
      <Experts />
      <OurPatients />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
