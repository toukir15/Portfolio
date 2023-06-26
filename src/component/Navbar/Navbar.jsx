import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  // handle nav toggle
  const handleNavToggle = () => setNavToggle(!navToggle);

  return (
    <div className="text-primary-white mb-4 fixed top-0 w-full bg-[#0B1120] z-10">
      <div className="flex justify-between items-center container mx-auto py-4 ">
        {/* logo  */}
        <div>
          <h3 className="text-lg md:text-2xl font-semibold ml-2 md:ml-0 text-white">
            Tanvir-Ahmed
          </h3>
        </div>
        {/* route */}
        <div className="hidden md:block">
          <ul className="md:flex gap-x-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* nav toggle   */}
        <div className="mr-3 md:hidden">
          {!navToggle ? (
            <GiHamburgerMenu onClick={handleNavToggle} className="text-3xl" />
          ) : (
            <FaX onClick={handleNavToggle} className="text-3xl" />
          )}
        </div>
      </div>
      <div
        className={`block md:hidden overflow-hidden duration-150 ease-in-out ${
          !navToggle ? "h-0" : "h-auto"
        } `}
      >
        <ul className="flex flex-col gap-y-3 ml-3 pb-4  border-b-2 border-[#a0a0a0]">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
