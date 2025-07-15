import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-14 bg-gradient-to-r from-[#00bcbfa5] to-[#ff9900cb] flex justify-between px-4 items-center md:px-4 text-white font-bold">
      <div className="flex flex-row gap-2 content-center ml-4">
        <img className="w-8 h-8" src={logo} alt="" />
        <h1 className="text-2xl font-bold">Shopsy</h1>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl m-1">
          &#8801;
        </button>
      </div>
      <div className="hidden md:flex font-semibold gap-6 mr-4">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link" : "")}
          to={"/bestSellers"}
        >
          Best-Sellers
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link" : "")}
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link" : "")}
          to={"/topPicks"}
        >
          Top-Picks
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link" : "")}
          to={"/reviews"}
        >
          Reviews
        </NavLink>
        <NavLink>
          <div className="flex items-center gap-1 bg-white text-black p-1 rounded-lg font-bold text-center">
            <ShoppingCartIcon className="w-5 h-5" />
            Cart
          </div>
        </NavLink>
      </div>
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gradient-to-r from-[#00bfa6c5] to-[#ff9900e4] flex flex-col items-center py-4 md:hidden z-10">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link mb-2" : "mb-2")}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link mb-2" : "mb-2")}
            to="/bestSellers"
            onClick={() => setMenuOpen(false)}
          >
            Best-Sellers
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link mb-2" : "mb-2")}
            to="/products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link mb-2" : "mb-2")}
            to="/topPicks"
            onClick={() => setMenuOpen(false)}
          >
            Top-Pics
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link mb-2" : "mb-2")}
            to="/reviews"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-1 bg-white text-black px-2 rounded-lg font-bold text-center">
              <ShoppingCartIcon className="w-5 h-5" />
              Cart
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
