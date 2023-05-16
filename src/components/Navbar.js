import React, { useState } from "react";
import iconMoon from "../assets/img/icon-moon.svg";
import iconSun from "../assets/img/icon-sun.svg";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navbar = ({ openModal, openSignInModal }) => {
  const [openNav, setOpenNav] = useState(false);


  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark:text-white">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <a href="#" className="flex items-center dark:text-white">
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark:text-white">
          More pages
        </a>
      </Typography>
    </ul>
  );

  return (
    <MaterialNavbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-white dark:bg-black">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium dark:text-white"
        >
          Hello there!
        </Typography>
        <div className="flex items-center gap-4">
        <img className="moon w-6 h-6 cursor-pointer" src={iconMoon} alt="moon" />
            <img className="sun w-6 h-6 cursor-pointer" src={iconSun} alt="sun" />
          <div className="mr-4 hidden lg:block">{navList}</div>




          <Button
        variant="gradient"
        size="sm"
        className="hidden lg:inline-block dark:bg-gradient-to-r dark:from-purple-500 dark:to-indigo-500"
        onClick={openModal}
      >
        <span>Add Article</span>
      </Button>
     
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>

        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}

        <Button variant="gradient" size="sm" fullWidth className="mb-2 dark:">
            <span>Add Article</span>
          </Button>

      </MobileNav>
    </MaterialNavbar>
  );
};

export default Navbar;
