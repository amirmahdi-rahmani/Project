import { famous } from "@/data";

const SecFamous = () => {
  return (
    <section id="SecFam" className="text-center max-w-7xl mx-auto px-4 my-10">
      <h2
        className="
      text-4xl text-blue-900 font-bold 
      "
      >
        {famous.title}
      </h2>

      <div
        className="
      grid grid-cols-1 md:grid-cols-2

      my-3 
       gap-8 text-justify

       "
      >
        {famous.items.slice(0, 2).map((val) => (
          <div key={val.id} className="text-center">
            {/* <img className="w-20 h-20" src={val.images[0]} alt={val.name} /> */}
            <h4 className="text-center my-2 text-2xl ">{val.name} </h4>
            <p className="line-clamp-4">{val.description}</p>
            <a href="./Famous.js" className="ctn my-4 block md:inline-block ">
              بیشتر بدانید 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SecFamous;
