import LogoNav from "../Assets/logo-inside2.png";
import { useState } from "react";

const navbarLinks = [
  {
    id: 1,
    title: "inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Planes",
    link: "#",
  },
  {
    id: 3,
    title: "Contacto",
    link: "#",
  },
];

const navbarRedes = [
  {
    id: 1,
    title: "Instagram",
    link: "aca va el link a instagram",
    icon: "/icons/instagram.png",
  },
  {
    id: 2,
    title: "Whatsapp",
    link: "https://wa.me/5491165550814",
    icon: "/icons/whatsapp.png",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3 ">
        <div>
          <img
            src={LogoNav}
            alt="inside spanish"
            className="w-45 sm:w-55 lg:w-65"
          />
        </div>

        <button onClick={toogleMenu} className="md:hidden">
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12H16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/*menu desktop*/}

        <div className="hidden md:block">
          <ul className="flex lg:space-x-14 sm:space-x-8  space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-gray-700 lg:text-xl sm:text-lg text-sm hover:text-gray-400 transition-all hover:scale-110 transform inline-block duration-300 "
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*menu desktop redes*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((red) => (
              <li key={red.id}>
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={red.link}
                >
                  <img
                    src={red.icon}
                    alt={red.title}
                    className="w-6 h-6 sm:text-3xl transition-all"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*menu mobile*/}
      <div className={`md:hidden absolute w-full bg-gray-900 transition/
        -all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a className="text-gray-400 hover:text-gray-200" href={link.link} onClick={()=> setIsOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      
     
      <ul className=" flex px-4 py-2 border-t justify-center">
            {navbarRedes.map((red) => (
              <li key={red.id}>
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  href={red.link}
                  onClick={()=> setIsOpen(false)}
                >
                  <img
                    src={red.icon}
                    alt={red.title}
                    className={`${red.icon} w-6 h-6 m-2`}
                  />
                </a>
              </li>
            ))}
          </ul>
      </div>

     
    </nav>
  );
};

export default Navbar;
