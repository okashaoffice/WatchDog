import { FaEllipsis } from "react-icons/fa6";
import Signup from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signupOpne, setSignupOpen] = useState(false);

  const toggleProfile = () => {
    setSignupOpen(!signupOpne);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" w-full navbar">
      <div className=" flex items-center justify-between px-4 py-2 ">
        <div className="inline-flex items-center ">
          <img src="images/logo.png" alt="" className="h-14" />
        </div>
        <div className=" grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8 mob:space-x-3 mob:ml-6 items-center">
            <Link to="/dashboard">
              <li className="text-sm font-semibold text-white">Dashboard</li>
            </Link>
            <Link to="/">
              <li className="text-sm font-semibold text-white">Seacrh</li>
            </Link>
          </ul>
        </div>
        <div className=" flex lg:gap-x-2 mob:gap-x-2 items-center">
          <FaEllipsis className="text-white text-lg" />
          <button
            onClick={toggleProfile}
            type="button"
            className="rounded-full bg-white h-10 min-w-10 text-md font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            An
          </button>
        </div>
      </div>
      {signupOpne ? <Signup /> : null}
    </div>
  );
}

export default Nav;
