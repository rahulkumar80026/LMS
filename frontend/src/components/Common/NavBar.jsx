import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
    <div className="w-11/12 max-w-max-content mx-auto flex justify-between items-center border-b border-b-richblack-700 h-14">
      <div className="flex w-11/12 max-w-max-content justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={42} loading="lazy" />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "catalog" ? (
                  <div>{/* TODO: Catalog logic */}</div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`cursor-pointer hover:text-yellow-50 transition-colors duration-200 ${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
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

        {/* Login/SignUp/Dashboard  */}

        <div className="flex gap-4 items-center ">
          {user && user?.accountType != "INSTRUCTOR" ? (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          ) : null}
          {token === null && (
            <Link to="/login">
              <button className="bg-yellow-25 text-richblack-900 px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
