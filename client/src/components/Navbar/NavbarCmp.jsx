import React from "react";
import { Link } from "react-router-dom";

const NavbarCmp = () => {
  const navigationLinks = [
    { id: "topics", text: "Topics", to: "/topics" },
    { id: "videos", text: "Videos", to: "/videos" },
    { id: "articles", text: "Articles", to: "/articles" },
    { id: "get-started", text: "Get Started", to: "/get-started" },
  ];
  return (
    <nav className="bg-black border-gray-200 dark:bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="text-zinc-800 text-[64px] font-normal font-['Poppins']">
            Edu
          </span>
          <span className="text-fuchsia-900 text-[64px] font-bold font-Poppins">
            Guide
          </span>
        </Link>
        <div className="w-full md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className="block py-2 pl-3 pr-4 text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCmp;
