import Image from "next/image";
import azarbaijanData from "../data";
import Hero from "@/Components/Hero";
const Home = () => {
  return (
    <main>
      <Hero/>
      <div className="flex justify-center items-center">hello i am using next js</div>
      {azarbaijanData.name}
    </main>
  );
};

export default Home;
