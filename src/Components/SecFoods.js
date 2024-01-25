import Link from "next/link";
import foodImage from "../images/Dolma2.jpg";

const SecFoods = ({ foods }) => {
  return (
    <div className="py-10 flex justify-between h-screen relative z-20">
      <img
        src={foodImage.src}
        alt=""
        className="absolute top-0 start-0 z-10 w-full h-full object-cover"
      />
      <div className="px-36 flex flex-col items-center justify-center relative z-20">
        <h2 className="text-white text-4xl font-bold ">
          {" "}
          غذا های استان آذربایجان شرقی
        </h2>
        <p className="max-w-md text-white  my-10 ">
          تبریز مرکز استان آذربایجان شرقی، یکی از بزرگترین شهر های ایران است که
          دارای غذاهای محلی لذیذ و محبوبی مانند کوفته تبریزی، کوکوی لوبیا سبز،
          آش ماست، دلمه برگ مو، آش میوه، آش آبغوره و … می باشد.
        </p>

        <Link href="/foods" className="btn w-fit">
          ادامه دهید
        </Link>
      </div>
    </div>
  );
};
export default SecFoods;
