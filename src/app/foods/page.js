import Card from "@/Components/Card";
import getData from "@/functions/getData";

const Foods = async () => {
  const foodsData = await getData("foods");
  return (
    <div>
      <h1 className="my-10 text-center text-3xl font-bold">
        {foodsData.title}
      </h1>

      {foodsData?.items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          imageOne={item.imageOne}
          imageTwo={item.imageTwo}
          link={item.link}
        />
      ))}
    </div>
  );
};
export default Foods;
