import React from "react";

import TestiHeroSec from "../components/TestiHeroSec";
import VideoTestimonial from "../components/VideoTestimonial";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import WebamdSlider from "./WebamdSlider";
import FaqTestimonials from "./FaqTestimonials";
import MyNav from "./MyNav";
const Testimonials = () => {
  return (
    <div>
      <MyNav underline3="underline" greencolor3="clr_darkgreen" />
      <TestiHeroSec />
      <VideoTestimonial />
      <Cards />
      <WebamdSlider />
      <FaqTestimonials />
      <Footer />
    </div>
  );
};

export default Testimonials;
