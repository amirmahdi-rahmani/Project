
import Card from "@/Components/Card";
import getData from "@/functions/getData";

const Famous = async () => {
  const famousData = await getData("famous");
  
  return (
    <div>
      <h1 className="my-24 text-center text-4xl font-bold">
      مشاهیر آذربایجان شرقی
      </h1>

      {famousData?.map((item) => (
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
export default Famous;
