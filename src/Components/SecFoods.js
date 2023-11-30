import { foods } from "@/data"

const SecFoods = () => {
  return (
    <div className="bg-lime-400 py-10 ">
      <div className="max-w-7xl mx-auto px-5 ">
      <h2 className="text-white  text-2xl text-bold ">{foods.title}</h2>
      <p className="max-w-md text-white   my-10 ">
        آذربایجان شرقی، یکی از جذاب‌ترین استان‌های نیمه شمال غرب ایران است.
        تاریخ غنی و مردم مهمان‌نواز، با ویژگی‌‌های فرهنگی خاص این دیار، بر جذابیت‌های این استان زیبا افزوده است. 
        اگر قصد سر زدن به استان آذربایجان شرقی دارید، باید لیست بلندبالایی از مراکز دیدنی تهیه کنید..</p>
        <a href="./places.html" className="px-10 ctn"> ادامه دهید </a>
        </div>
    </div>
  )
}
export default SecFoods