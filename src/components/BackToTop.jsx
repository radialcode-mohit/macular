import React, { useState } from "react";
import arrowimg from "../assets/images/png/top.png";
const TopToBottom = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 80) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className=" position-fixed arrow_pos cursur_pointer toptobtm_animation">
      <img
        src={arrowimg}
        alt="arrowimg"
        onClick={() => clikontop()}
        className={first ? "d-none w-100" : "d-block w-100"}
      />
    </section>
  );
};

export default TopToBottom;
