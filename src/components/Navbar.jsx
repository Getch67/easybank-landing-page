import PropTypes from "prop-types";

const Navbar = ({ activeLink, setActiveLink }) => {
  const links = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <nav>
      <ul className="flex gap-8 text-GrayishBlue">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              onClick={() => setActiveLink(link)}
              className={`nav-link ${activeLink === link ? "active-link" : ""}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  activeLink: PropTypes.string,
  setActiveLink: PropTypes.func,
};

export default Navbar;
