import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-black">
            My Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end items-center space-x-2">
          <form className="relative">
            <input
              type="text"
              name="search"
              required
              placeholder="What are you looking for"
              className="py-2 px-4 pr-8 focus:outline-none border-none bg-base-300 placeholder:text-xs"
            />
            <button
              type="submit"
              className="absolute top-[50%] -translate-y-[50%] right-2"
            >
              <BiSearch className="text-xl" />
            </button>
          </form>
          <button className="">
            <BiHeart />
          </button>
          <button className="">
            <BiUser />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
