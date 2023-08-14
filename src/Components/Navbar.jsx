import React from "react";
import CarekloudLogo from '../Images/companylogoremovebg.png'
import '../styles/Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="bg-gray-900 hover:bg-gray-200 hover:text-black rounded-lg rounded-r-full shadow-lg hover:shadow-2xl transition-all duration-200 ease-in text-white  xs:w-auto  sm:w-full">
      <div className="header flex items-center font-bold justify-between xs:flex-col xs:items-center xs:justify-center xs:text-center ">
        <div className="h-32 w-32 ml-10 md:ml-2 md:h-24 sm:h-20 sm:w-20">
          <img className="p-2 m-4 xs:flex md:mx-0 md:p-0  xs:w-full xs:items-center xs:justify-center" src={CarekloudLogo} alt="" />
        </div>
        <nav className="">
          <ul className="flex gap-10 items-center justify-center ml-36 lg:ml-10 lg:text-sm sm:text-sm xs:hidden md:ml-2 md:text-xs md:gap-5 sm:gap-2 sm:ml-5 ">       
            <Link to="Intro"  spy={true} smooth={true} offset={50} duration={500} className="hover:text-red-600 cursor-pointer transition-all ease-in-out duration-300 hover:text-3xl hover:mx-5 font-bold sm:hover:text-sm sm:hover:mx-0">About</Link>
            <Link to="Features" spy={true} smooth={true} offset={10} duration={500} className="hover:text-orange-400 cursor-pointer transition-all ease-in-out duration-300 hover:text-3xl hover:mx-5 font-bold sm:hover:text-sm sm:hover:mx-0 ">Features</Link>
            {/* <li className="hover:text-blue-900 cursor-pointer transition-all ease-in-out duration-300 hover:text-3xl hover:mx-5 font-bold sm:hover:text-sm sm:hover:mx-0 ">Pricing</li> */}
            <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="hover:text-lime-800 cursor-pointer transition-all ease-in-out duration-300 hover:text-3xl hover:mx-5 font-bold sm:hover:text-sm sm:hover:mx-0 ">Contact Us</Link>
          </ul>
        </nav>
        <header className="flex items-center justify-center font-bold p-4 mr-10 sm:text-xs lg:text-xs sm:flex-col xs:flex xs:w-full xs:py-3 xs:pl-10  sm:m-0 sm:mr-3 sm:px-3 md:mr-3 ">
          care with
          <span className="font-bold text-2xl borderd  p-1 rounded-xl mx-1 lg:text-xl md:mx-0 md:text-xl  sm:text-sm md- ">
            CAREKLOUD
          </span>
          <span className="font-extrabold  text-red-800 lg:text-xs "> crm</span> 
        </header>
      </div>
    </div>
  );
};

export default Navbar;
