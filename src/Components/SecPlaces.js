import Link from "next/link";

const SecPlaces = ({ places }) => {
  const images = [];
  places.map((item) => images.push(...item.images));
  return (
    <div className="max-w-7xl gap-10 py-10 px-5 h-1/2 mx-auto flex  flex-col lg:flex-row items-center justify-between ">
      <div className="flex w-1/2 flex-col items-center">
        <h2 className="text-3xl py-4  font-bold">
          جاذبه های گردشگری در آذربایجان شرقی
        </h2>
        <p className="max-w-lg py-10">
          آذربایجان شرقی، یکی از جذاب‌ترین استان‌های نیمه شمال غرب ایران است.
          تاریخ غنی و مردم مهمان‌نواز، با ویژگی‌‌های فرهنگی خاص این دیار، بر
          جذابیت‌های این استان زیبا افزوده است. اگر قصد سر زدن به استان
          آذربایجان شرقی دارید، باید لیست بلندبالایی از مراکز دیدنی تهیه کنید..
        </p>
        <Link href="/places" className="ctn text-center">
          ادامه دهید
        </Link>
      </div>
      <div className="grid grid-cols-2 w-1/2 gap-4 ">
        
        {images.slice(0, 4).map((image) => (
          <div key={image} className="max-w-60 aspect-square w-full  hover:scale-105 duration-300 ">
            <img src={image} alt="" className="rounded-xl shadow-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SecPlaces;
