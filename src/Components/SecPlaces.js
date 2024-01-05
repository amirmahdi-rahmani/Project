import Link from "next/link";
import getImageAddress from "@/functions/getImageAddress";

const SecPlaces = ({ places }) => {
  return (
    <div className="max-w-7xl gap-10 py-10 px-5 h-1/2 mx-auto flex  flex-col lg:flex-row items-center justify-between ">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl py-4  font-bold">{places.title}</h2>
        <p className="max-w-lg py-10">{places.description}</p>
        <Link href="/places" className="ctn text-center">
          ادامه دهید
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 min-w-fit">
        {places.images?.map((item) => (
          <div
            key={item.image}
            className="w-60 h-60 hover:scale-105 duration-300 "
          >
            <img
              src={getImageAddress(item.image)}
              alt=""
              className="rounded-xl shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SecPlaces;
