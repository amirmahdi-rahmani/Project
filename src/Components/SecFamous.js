import getImageAddress from "@/functions/getImageAddress";

const SecFamous = ({ famous }) => {
  return (
    <section id="SecFam" className="text-center max-w-7xl mx-auto px-4 my-10">
      <h2
        className="
      text-4xl text-blue-900 font-bold mb-12
      "
      >
       مشاهیر آذربایجان شرقی
      </h2>

      <div
        className="
      grid grid-cols-1 md:grid-cols-2

      my-3 
       gap-8 text-justify

       "
      >
        {famous.slice(0, 2).map((val) => (
          <div key={val.id} className="text-center flex flex-col items-center ">
            <img className="w-96 h-96 rounded-xl  shadow-2xl border-solid border-4 border-violet-600" src={getImageAddress(val.imageOne)} alt={val.name} />
            <h4 className="text-center my-10 text-2xl ">{val.name} </h4>
            <p className="line-clamp-4">{val.description}</p>
            <a href="./famous" className="ctn my-4 block md:inline-block ">
              بیشتر بدانید
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SecFamous;
