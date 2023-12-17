import getImageAddress from "@/functions/getImageAddress";

const Card = ({ name, description, imageOne, imageTwo, link }) => {
  return (
    <section className="max-w-7xl mx-auto px-5 my-10 flex flex-col items-center">
      <div className="w-full grid gap-10 grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto">
        <div className="aspect-square w-full ">
          <img
            className="w-full h-full rounded-xl shadow-xl  border-solid border-4 border-violet-600"
            src={getImageAddress(imageOne)}
            alt="imageOne"
          />
        </div>
        <div className="aspect-square w-full  hidden lg:block">
          <img
            className="w-full h-full rounded-xl shadow-xl border-solid border-4 border-violet-600"
            src={getImageAddress(imageTwo)}
            alt="imageTwo"
          />
        </div>
      </div>
      <p className="py-10 text-2xl font-bolder ">{name}</p>
      <p className="py-10 text-justify ">{description}</p>
      <a href={link} className="block md:inline-block ctn text-center">
        بیشتر بدانید
      </a>
    </section>
  );
};
export default Card;
