import React from "react";
import c from "src/components/Bottombar/Bottombar.module.scss";

const Bottombar = () => {
  return (
    <div className={c.bottom}>
      <div className={c.bottom__btn}>
        <p className={c.bg_circle_white}>A</p>
        <p>See Details</p>
      </div>
      <div className={c.bottom__btn}>
        <p className={c.bg_circle_white}>X</p>
        <p>Habitat</p>
      </div>
      <div className={c.bottom__btn}>
        <p className={c.bg_circle_white}>Y</p>
        <p>Sort</p>
      </div>
      <div className={c.bottom__btn}>
        <p className={c.bg_circle_white}>+</p>
        <p>See Evaluation</p>
      </div>
      <div className={c.bottom__btn}>
        <p className={c.bg_circle_white}>B</p>
        <p>Back</p>
      </div>
    </div>
  );
};

export default Bottombar;
