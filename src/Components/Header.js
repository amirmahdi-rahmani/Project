import menu from "@/data";

const Header = () => {
  return (
    <header className="block bg-gradient-to-r from-violet-500 to-fuchsia-500">
       <div className="max-w-7xl h-full mx-auto flex justify-between items-center "> 

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
        </div>
     
    </header>
  );
};

export default Header;
