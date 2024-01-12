import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import SecFamous from "@/Components/SecFamous";
import SecFoods from "@/Components/SecFoods";
import SecPlaces from "@/Components/SecPlaces";
import getData from "@/functions/getData";

const Home = async () => {
  const famousData = await getData("famous");
  const placesData = await getData("places");
  const foodData = await getData("foods");

  return (
    <main>
      <Hero />
      <SecFamous famous={famousData} />
      <SecFoods foods={foodData} />
      <SecPlaces places={placesData} />
    </main>
  );
};

export default Home;
