import Image from "next/image";

const Card = ({ name, description, imageOne, ImageTwo }) => {
  return (
    <section className="max-w-7xl mx-auto px-5 my-10">
      <div className="grid  gap-10 grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto">
        <div className="h-72 w-full rounded-md">
          <img
            className="w-full h-full"
            src={`data:image/jpg;base64,
        ${image}`}
            alt="sdfsdf"
          />
        </div>
        <div className="h-72 w-full rounded-m hidden lg:block">
          <img
            className="w-full h-full"
            src={`data:image/jpg;base64,
        ${image}`}
            alt="sdfsdf"
          />
        </div>
      </div>
      <p className="py-10 text-2xl font-bolder ">{name}</p>
      <p className="py-10 text-justify ">{description}</p>
      {/* <a href={btnLink} className="block md:inline-block ctn text-center">بیشتر بدانید</a> */}
    </section>
  );
};
export default Card;
