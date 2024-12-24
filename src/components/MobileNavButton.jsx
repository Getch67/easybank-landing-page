import hamburgerIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

const MobileNavButton = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      className="lg:hidden nav-button"
      aria-label="Navigation menu toggle"
      type="button"
      onClick={toggleMenu}
    >
      <img
        src={hamburgerIcon}
        alt="Open menu"
        className={`menu-icon ${isMenuOpen ? "hidden" : ""}`}
      />
      <img
        src={closeIcon}
        alt="Close menu"
        className={`menu-icon ${isMenuOpen ? "" : "hidden"}`}
      />
    </button>
  );
};

export default MobileNavButton;
