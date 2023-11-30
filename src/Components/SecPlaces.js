import { places } from "@/data"

const SecPlaces = () => {
  return (
    <div className="max-w-7xl gap-10 py-10 px-5 h-1/2 mx-auto flex flex-col md:flex-row items-center justify-between ">
      <div >
        <h2 className="text-2xl py-4 ">
        {places.title}
        </h2>
        <p className="max-w-lg py-10">
        آذربایجان شرقی، یکی از جذاب‌ترین استان‌های نیمه شمال غرب ایران است. تاریخ غنی و مردم مهمان‌نواز، با ویژگی‌‌های فرهنگی خاص این دیار، بر جذابیت‌های این استان زیبا افزوده است. اگر قصد سر زدن به استان آذربایجان شرقی دارید، باید لیست بلندبالایی از مراکز دیدنی تهیه کنید..
        </p>
        <a href="./Places.js" className="ctn"> ادامه دهید </a>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="w-40 h-40 bg-violet-600"></div>
        <div className="w-40 h-40 bg-violet-600"></div>
        <div className="w-40 h-40 bg-violet-600"></div>
        <div className="w-40 h-40 bg-violet-600"></div>
        
      </div>
    </div>
  )
}
export default SecPlaces