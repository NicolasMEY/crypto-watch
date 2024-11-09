import React from "react";
import imgToTop from "../imgs/arrow-icon.svg";

const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      {/* 0;0 signifie le plus haut possible de la page */}
      <img src={imgToTop} alt="arrow" />
    </div>
  );
};

export default ToTop;
