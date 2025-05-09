"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import HamburgerMenu from "./HamburgerMenu";
import ax from "@/functions/axiosInstance";
import ArrowDown from "@/Svgs/ArrowDown";

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogIn, setIsLogin] = useState(false);
  const [userName, setUserName] = useState();

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    ax.get("/me/")
      .then((res) => {
        setIsLogin(true);
        setUserName(res.data.username);
      })
      .catch((er) => console.log(er));
  }, [pathname]);

  const logout = () => {
    ax.get("/logout/")
      .then((res) => {
        setIsLogin(false);
        setUserName("");
      })
      .catch((er) => console.log("error while deleting cookie", er));
  };

  return (
    <header className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 py-6">
      <div className="max-w-7xl h-full mx-auto px-5 flex justify-between items-center ">
        <h1 className="logo text-3xl text-white ">
          <Link href="/">آذربایجان شرقی</Link>
        </h1>
        <nav className=" hidden md:block">
          <ul className="flex item-center">
            {menu.map((item) => (
              <li key={item.id} className="mx-6">
                <Link
                  href={`/${item.slug}`}
                  className="text-base lg:text-lg inline-block"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isLogIn ? (
          <div className="flex items-center gap-1 justify-center group relative ms-auto md:ms-0 px-4 text-white font-bold text-lg">
            <span>{userName}</span>
            <ArrowDown className="w-5 fill-white" />
            <div className="absolute top-7 rounded-md start-0 w-fit min-w-full h-[50px] py-2 px-4 hidden group-hover:block bg-white text-sm hover:text-red-600 duration-300 shadow border text-red-300 ">
              <button onClick={logout}>خروج</button>
            </div>
          </div>
        ) : (
          <Link
            href={"/auth/singIn"}
            className="ms-auto md:ms-0 px-4 block text-white font-bold text-lg"
          >
            ورود
          </Link>
        )}

        <div
          className="w-10 aspect-[1/1] md:hidden  cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HamburgerMenu />
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} />
    </header>
  );
};

export default Header;
