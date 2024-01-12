import Link from "next/link";
import BackDrop from "./BackDrop";

const Drawer = (props) => {
  return (
    <>
      {props.isOpen && <BackDrop click={() => props.setIsOpen(false)} />}
      <div
        className={`bg-purple-600 fixed z-50 p-5 top-0 end-0 h-screen w-[80%] transition-all duration-300 ${
          props.isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className=" w-12 h-12 bg-white inline-block"></div>

          <div
            className=" w-12 h-12  inline-block cursor-pointer "
            onClick={() => props.setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col mt-20 gap-5 justify-center items-center ">
          {props.menu.map((item) => (
            <li className="list-none text-2xl" key={item.id}>
              <Link href={item.slug}> {item.title}</Link>
            </li>
          ))}
        </div>
        
      </div>
    </>
  );
};
export default Drawer;
