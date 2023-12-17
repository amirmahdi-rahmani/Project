import getImageAddress from "@/functions/getImageAddress";

const SecPlaces = ({ places }) => {
  return (
    <div className="max-w-7xl gap-10 py-10 px-5 h-1/2 mx-auto flex  flex-col md:flex-row items-center justify-between ">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl py-4  font-bold">
          جاذبه های گردشگری در آذربایجان شرقی
        </h2>
        <p className="max-w-lg py-10">
          آذربایجان شرقی، یکی از جذاب‌ترین استان‌های نیمه شمال غرب ایران است.
          تاریخ غنی و مردم مهمان‌نواز، با ویژگی‌‌های فرهنگی خاص این دیار، بر
          جذابیت‌های این استان زیبا افزوده است. اگر قصد سر زدن به استان
          آذربایجان شرقی دارید، باید لیست بلندبالایی از مراکز دیدنی تهیه کنید..
        </p>
        <a href="./places" className="ctn text-center">
          ادامه دهید
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {places?.map((item) => (
          <div key={item.image} className="w-60 h-60 hover:scale-105 ">
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
