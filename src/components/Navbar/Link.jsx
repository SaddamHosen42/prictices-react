import React from "react";

const Link = ({ route }) => {
  return (
    <li className="md:mr-10  px-4 hover:bg-orange-200 hover:text-black">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
