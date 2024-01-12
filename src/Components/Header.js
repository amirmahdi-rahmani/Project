"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Drawer from "./Drawer";
import HamburgerMenu from "./HamburgerMenu";
import ax from "@/functions/axiosInstance";
import ArrowDown from "@/Svgs/ArrowDown";

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogIn, setIsLogin] = useState(false);
  const [userName, setUserName] = useState();

  useEffect(() => {
    ax.get("/me/", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((res) => {
        setIsLogin(true);
        setUserName(res.data.username);
      })
      .catch((er) => console.log(er));
  }, []);

  const logout = () => {};

  return (
    <header className="block bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-7xl h-full mx-auto px-5 flex justify-between items-center ">
        <h1 className="logo text-3xl text-white ">
          <Link href="/">آذربایجان شرقی</Link>
        </h1>
        <nav className="navbar hidden md:block">
          <ul className="nav-links">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.slug}
                  className="text-base lg:text-lg inline-block"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div onClick={() => setIsLogin((prev) => !prev)}>change mod</div>
        {isLogIn ? (
          <div className="flex items-center gap-1 justify-center group relative">
            <span>{userName}</span>
            <ArrowDown className="w-5 fill-black" />
            <div className="absolute top-0 start-0 w-fit h-[200px] py-2 px-4 hidden group-hover:block">
              <button onClick={logout}>خروج</button>
            </div>
          </div>
        ) : (
          <a
            href={isLogIn ? "" : "/auth/singIn"}
            className="ms-auto md:ms-0 px-4 block text-white font-bold text-lg"
          >
            ورود
          </a>
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
