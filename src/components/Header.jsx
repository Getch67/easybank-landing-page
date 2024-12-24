import { useState } from "react";
import logo from "../assets/images/logo.svg";
import MobileNavbar from "./MobileNavbar";
import MobileNavButton from "./MobileNavButton";
import Navbar from "./Navbar";
import RequestBtn from "./RequestBtn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky bg-White z-50">
      <div className="h-16 xl:h-20 flex items-center justify-between px-6 xl:px-32 2xl:w-2xl 2xl:mx-auto">
        <div>
          <img src={logo} alt="" className="w-36 xl:w-38" />
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-nav lg:justify-between">
          <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
          <RequestBtn />
        </div>
        <MobileNavButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <MobileNavbar
          isMenuOpen={isMenuOpen}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </div>
    </header>
  );
};

export default Header;
