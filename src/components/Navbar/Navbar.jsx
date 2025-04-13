import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

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
const links = navLinks.map((route) => (
  <Link route={route} key={route.id}></Link>
));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mx-8 mt-5">
      <span className="flex  space-x-2" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu className="md:hidden"></Menu>}
        <ul
          className={`md:hidden absolute duration-800
             ${open ? "top-14" : "-top-40"}`}>
          {links}
        </ul>
        <h1 className="text-2xl font-bold">Wellcome</h1>
      </span>

      <ul className="hidden md:flex">{links}</ul>
      <button className="btn">Sing in</button>
    </nav>
  );
};

export default Navbar;
