import Link from "next/link";
import getImageAddress from "@/functions/getImageAddress";

const SecFoods = ({ foods }) => {
  return (
    <div className="py-10 flex justify-between h-screen relative z-20">
      <img
        src={getImageAddress(foods.image)}
        alt=""
        className="absolute top-0 start-0 z-10 w-full h-full object-cover"
      />
      <div className="px-36 flex flex-col items-center justify-center relative z-20">
        <h2 className="text-white text-4xl font-bold ">{foods.title}</h2>
        <p className="max-w-md text-white  my-10 ">{foods.description}</p>
        <div className="px-40">
          <Link href="/foods" className="ctn">
            ادامه دهید
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SecFoods;
