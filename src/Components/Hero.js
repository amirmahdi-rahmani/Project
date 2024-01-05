import Link from "next/link";
import { hero } from "@/data";
import heroImage from "../images/El-Goli.jpg";

const Hero = () => {
  return (
    <div
      className="hero-content"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1>{hero.title}</h1>
      <Link href="/#SecFam" className="ctn">
        {hero.linkTitle}
      </Link>
    </div>
  );
};
export default Hero;
