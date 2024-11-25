const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          My Portfolio
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
