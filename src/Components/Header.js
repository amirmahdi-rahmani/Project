import menu from "@/data";

const Header = () => {
  return (
    <header className="block bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-7xl h-full mx-auto px-5 flex justify-between items-center ">
        <h1 className="logo text-3xl text-white ">
        <a href="/">
          آذربایجان شرقی
        </a>
        </h1>
        <nav className="navbar hidden md:block">

          <ul className="nav-links">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="text-base lg:text-lg inline-block">{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-10 aspect-[1/1] bg-white md:hidden  "></div>
        <img src="/img/menu.png" alt="menu" className="menu-btn" />
      </div>
      
    </header>
  );
};

export default Header;
