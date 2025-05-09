import Link from "next/link";

const Card = ({ name, description, imageOne, imageTwo, link }) => {
  return (
    <section className="max-w-7xl mx-auto px-5 my-10 flex flex-col items-center">
      <div className="w-full grid gap-10 grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto">
        <div className="aspect-square w-full rounded-xl shadow-xl  border-solid border-4 border-violet-600 overflow-hidden">
          <img
            className="w-full h-full hover:scale-110 duration-300"
            src={imageOne}
            alt="imageOne"
          />
        </div>
        <div className="aspect-square w-full hidden lg:block rounded-xl shadow-xl border-solid border-4 border-violet-600 overflow-hidden">
          <img
            className="w-full h-full hover:scale-110 duration-300"
            src={imageTwo}
            alt="imageTwo"
          />
        </div>
      </div>
      <p className="py-10 text-2xl font-bolder ">{name}</p>
      <p className="py-10 text-justify ">{description}</p>
      <Link href={link} className="block md:inline-block btn text-center">
        بیشتر بدانید
      </Link>
    </section>
  );
};
export default Card;
