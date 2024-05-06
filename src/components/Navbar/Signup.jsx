import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className=" popupforfont z-10 h-fit w-60 bg-white border-2 rounded-lg font-medium p-4  pb-6  font-inter absolute right-3 top-16 mob:absolute ">
      <p>You’re currently Anonymous..</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <img src="images/logo.png" alt="" className="h-4" />
          <p>0</p>
        </div>
        <Link to="/connectwallet">
          <button className="border-1 rounded-md hover:bg-gray-300 bg-gray-200 text-xs font-bold p-2">
            Buy credits
          </button>
        </Link>
      </div>
      <ul className="pb-1">
        <li className="hover:bg-gray-300 rounded-md hover:cursor-pointer p-1 text-sm">
          My portfolio
        </li>
        <li className="hover:bg-gray-300 rounded-md hover:cursor-pointer p-1 text-sm">
          {" "}
          What is WatchDogs?
        </li>
        <li>
          <Link
            to="Signup"
            className="hover:bg-gray-300 rounded-md hover:cursor-pointer p-1 text-sm"
          >
            Sign Up
            <span className="text-[0.65rem] text-grey">
              (Get <span className="textpopup">10</span> extra search credits)
            </span>
          </Link>
        </li>
        <Link to="/login">
          <button className="hover:bg-gray-300 rounded-md hover:cursor-pointer p-1 text-sm pr-36">
            Sign in
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default Signup;
