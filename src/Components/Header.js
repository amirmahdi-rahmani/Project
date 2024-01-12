"use client";
import { useState } from "react";
import Link from "next/link";
import Drawer from "./Drawer";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogIn, setIsLogin] = useState(false);

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
          <div>Amirmahdi</div>
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
