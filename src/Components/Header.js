import menu from "@/data";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
        <h1 className="logo text-3xl text-white ps-3">آذربایجان شرقی</h1>
      <nav className="navbar">
        <ul className="nav-links">
         { menu.map(item=><li key={item.id}>
            <a href={item.link}>
                {item.title}
                </a>
          </li>
          )}
        </ul>
      </nav>
        <img src="/img/menu.png" alt="menu" class="menu-btn" />
     
    </header>
  );
};

export default Header;
