import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { RiSearchLine, RiShoppingCart2Line } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Navbar({ searchText, handleSearchChange }) {
  const [{ basket }] = useStateValue();
  const [user, setUser] = useState(null);

  // Retrieve user data from local storage when component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleSignOut = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    // Update state to reflect the sign-out
    setUser(null);
  };

  return (
    <>
      <div id="main-nav-container" className="flex justify-around items-center border h-20 bg-white">
        <Link to="/Home">
          <div id="logo" className="w-20">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div id="srch" className="w-50 sm:w-3/4 h-10 border border-black rounded flex justify-start items-center bg-orange-400">
          <input
            onChange={handleSearchChange}
            type="text"
            placeholder=""
            value={searchText}
            className="w-full h-full px-5"
          />
          <button className="px-2 text-white">
            <RiSearchLine />
          </button>
        </div>
        <div id="account" className="grid">
          <span>{user ? `Hello ${user.name}` : 'Hello Guest'}</span>
          {user ? (
            <a
              className="font-bold hover:text-orange-400"
              href="#"
              onClick={handleSignOut}
            >
              <span>Sign Out</span>
            </a>
          ) : (
            <Link to="/Login">
              <a className="font-bold hover:text-orange-400" href="#">
                <span>Sign In</span>
              </a>
            </Link>
          )}
        </div>
        <Link to="/Checkout">
          <div id="cart" className="rounded-full h-10 w-10 flex items-center justify-center">
            <RiShoppingCart2Line />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
