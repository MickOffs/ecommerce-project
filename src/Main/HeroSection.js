import react from "react";
import Hero from "../dr pepper img/dr.pepper-hero.png";
import "./HeroSection.css";
import singleCherry from "../dr pepper img/double-cherry.png";
import tripleCherry from "../dr pepper img/triple-cherry.png";
import vanilla from "../dr pepper img/vanilla.png";

function HeroSection() {
  return (
    <div className="card">
      <img src={vanilla} className="vanilla" />
      <img src={singleCherry} className="cherry-1" />
      <img src={tripleCherry} className="cherry-2" />
      <img src={Hero} className="hero-img" />
    </div>
  );
}

export default HeroSection;
