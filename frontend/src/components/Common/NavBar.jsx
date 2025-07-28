import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import ProfileDropDown from "../core/Auth/ProfileDropDOwn";

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
                  <div className="flex items-center gap-1 cursor-pointer text-richblack-25">
                    <p>{link?.title}</p>
                    <IoIosArrowDropdown  />
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`cursor-pointer transition-colors duration-200 ${
                        matchRoute(link?.path)
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

        {/* Right Side Icons/Buttons */}
        <div className="flex gap-4 items-center">
          {/* Cart (only for non-instructors) */}
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

          {/* Login and Signup (only if not logged in) */}
          {!token && (
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
          )}

          {/* Profile Dropdown (if logged in) */}
          {token && user && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
