import foodImage from "../images/Dolma2.jpg";

const SecFoods = () => {
  return (
    <div
      className=" py-10 flex justify-between h-[70vh]"
      style={{ backgroundImage: `url(${foodImage.src})` }}
    >
      <div className="px-36 flex flex-col items-center justify-center ">
        <h2 className="text-white text-4xl font-bold ">
          غذا های استان آذربایجان شرقی
        </h2>
        <p className="max-w-md text-white   my-10 ">
          آذربایجان شرقی، یکی از جذاب‌ترین استان‌های نیمه شمال غرب ایران است.
          تاریخ غنی و مردم مهمان‌نواز، با ویژگی‌‌های فرهنگی خاص این دیار، بر
          جذابیت‌های این استان زیبا افزوده است. اگر قصد سر زدن به استان
          آذربایجان شرقی دارید، باید لیست بلندبالایی از مراکز دیدنی تهیه کنید..
        </p>
        <div className="px-40">
          
          <a href="./foods" className=" ctn">
            
            ادامه دهید
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default SecFoods;
