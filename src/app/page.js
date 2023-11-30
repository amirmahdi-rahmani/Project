import Image from "next/image";
import azarbaijanData from "../data";
import Hero from "@/Components/Hero";
import SecFamous from "@/Components/SecFamous";
import SecFoods from "@/Components/SecFoods";
import SecPlaces from "@/Components/SecPlaces";

const Home = () => {
  return (
    <main>
      <Hero/>
      <SecFamous/>
      <SecFoods/>
      <SecPlaces/>
    </main>
  );
};

export default Home;
