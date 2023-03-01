import { Navbar } from 'flowbite-react';
import React from 'react';

const TopNavbar = () => (
  <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand href="/navbars">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="SkyHigh Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        SkyHigh
      </span>
    </Navbar.Brand>
  </Navbar>
);

export default TopNavbar;
