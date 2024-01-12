import Card from "@/Components/Card";
import getData from "@/functions/getData";

const Foods = async () => {
  const foodsData = await getData("foods");
  return (
    <div>
      <h1 className="my-24 text-center text-4xl font-bold">
      معروف ترین غذا های استان آذربایجان شرقی
      </h1>
      {foodsData?.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          imageOne={item.images[0]}
          imageTwo={item.images[1]}
          link={item.link}
        />
      ))}
    </div>
  );
};
export default Foods;
