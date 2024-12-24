import PropTypes from "prop-types";

const MobileNavbar = ({ isMenuOpen, activeLink, setActiveLink }) => {
  const links = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <nav
      className={`fixed nav-menu top-16 left-0 w-full h-full p-6 ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center text-DarkBlue text-lg h-64 justify-evenly py-2 bg-White rounded mobile-menu">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              onClick={() => setActiveLink(link)}
              className={`${activeLink === link ? "text-BrightCyan" : ""}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
MobileNavbar.propTypes = {
  activeLink: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  setActiveLink: PropTypes.func,
};

export default MobileNavbar;
