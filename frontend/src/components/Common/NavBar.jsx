import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import ProfileDropDown from "../core/Auth/ProfileDropDOwn";

const subLinks = [
  {
    title: "Python",
    link: "/catalog/python",
  },
  {
    title: "Web Development",
    link: "/catalog/web-development",
  },
  {
    title: "Data Science",
    link: "/catalog/data-science",
  },
  {
    title: "Graphic Design",
    link: "/catalog/graphic-design",
  },
];
// ------------------------------------------------------------------------------
function NavBar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();

  const matchRoute = (route) => {
    if (!route) return false;
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="w-11/12 max-w-maxContent mx-auto flex justify-between items-center border-b border-b-richblack-700 h-14">
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={42} loading="lazy" />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title.toLowerCase() === "catalog" ? (
                  <div className="relative group flex items-center gap-1 cursor-pointer text-richblack-25">
                    <p>{link.title}</p>
                    <IoIosArrowDropdown />

                    {/* Dropdown Content */}
                    <div
                      className="invisible absolute left-1/2 top-full translate-x-[-50%] mt-3
                      opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200
                      z-50 w-[300px] rounded-md bg-richblack-5 p-4 text-richblack-900 shadow-lg"
                    >
                      {/* Triangle Arrow */}
                      <div
                        className="absolute top-0 left-1/2 translate-x-[-50%] -translate-y-1/2
                        w-3 h-3 rotate-45 bg-richblack-5 z-[-1]"
                      ></div>

                      {/* Sublinks */}
                      <div className="flex flex-col gap-2">
                        {subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subLink.link}
                            className="text-richblack-700 hover:text-yellow-50 transition-colors"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={link.path}>
                    <p
                      className={`cursor-pointer transition-colors duration-200 ${
                        matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25 hover:text-yellow-50"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Icons */}
        <div className="flex gap-4 items-center">
          {/* Cart */}
          {user?.accountType !== "INSTRUCTOR" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-25 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* Auth Buttons */}
          {!token ? (
            <>
              <Link to="/login">
                <button className="bg-yellow-50 px-4 py-2 rounded-md text-richblack-800 font-semibold">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-yellow-50 px-4 py-2 rounded-md text-richblack-900 font-semibold">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropDown />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
