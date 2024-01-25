import Link from "next/link";
import { hero } from "@/data";
import heroImage from "../images/El-Goli.jpg";

const Hero = () => {
  return (
    <div
      className="h-[calc(100vh-80px)] bg-center flex flex-col gap-8 items-center justify-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1 className="w-fit p-2 bg-violet-800/30 rounded-lg backdrop-blur-md text-2xl sm:text-5xl text-white mt-8">
        {hero.title}
      </h1>
      <Link href="/#SecFam" className="btn">
        {hero.linkTitle}
      </Link>
    </div>
  );
};
export default Hero;
