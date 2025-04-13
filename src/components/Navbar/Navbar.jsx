import React from "react";
import Link from "./Link";
const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/home",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        {navLinks.map((route) => 
          <Link route={route} key={route.id}></Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
