import Link from "next/link";
import { hero } from "@/data";
import heroImage from "../images/El-Goli.jpg";

const Hero = () => {
  return (
    <div
      className="hero-content bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1 className="w-fit p-1 bg-violet-800/30 rounded-lg backdrop-blur-md ">{hero.title}</h1>
      <Link href="/#SecFam" className="ctn">
        {hero.linkTitle}
      </Link>
    </div>
  );
};
export default Hero;
