import Card from "@/Components/Card";
import getData from "@/functions/getData";

const Places = async () => {
  const PlacesData = await getData("places");

  return (
    <div>
      <h1 className="my-10 text-center text-3xl font-bold">
      جاذبه های گردشگری آذربایجان شرقی
      </h1>
      {PlacesData?.map((item) => (
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
export default Places;
