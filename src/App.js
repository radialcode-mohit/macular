import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import TopToBottom from "./components/BackToTop";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000,
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/testimonial" element={<Testimonials />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
        <TopToBottom />
        <Preloader />
      </div>
    </>
  );
}

export default App;
