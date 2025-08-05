import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="Logo" />
        </div>

        <nav className="nav">
          <ul className={navList ? "nav-menu active" : "nav-menu"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path} onClick={() => setNavList(false)}>
                  {list.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="button">
          <button className="btn1">
            <i className="fa fa-sign-out" aria-hidden="true"></i> Sign In
          </button>
        </div>

        {/* Hamburger / Close Toggle */}
        <div className="menu-toggle" onClick={() => setNavList(!navList)}>
          {navList ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
