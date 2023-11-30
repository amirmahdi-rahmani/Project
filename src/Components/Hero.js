import { hero } from "@/data";
import heroImage from "../images/El-Goli.jpg";

const Hero = () => {
  return (
    <div
      className="hero-content"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1>{hero.title}</h1>
      <a href="/#SecFam" className="ctn">
        {hero.linkTitle}
      </a>
    </div>
  );
};
export default Hero;
