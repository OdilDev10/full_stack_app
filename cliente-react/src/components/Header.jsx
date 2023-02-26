import React from "react";
import { Link, Route, Routes } from "react-router-dom"

import AuthBoton from "./AuthBoton";

function Header() {
  return (
    <div>
      <header className="p-relative">
        <nav className="navbar navbar-expand-lg bg-dark">
          <Link className="navbar-brand" to={'/'}>
            <img
              src="https://www.odilmartinez.com/img/python.png"
              alt="Logo"
              width="30"
              height="30"
            />
            App
          </Link>
           <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav bg-dark w-100 m-0">
             <Link to={"/"} className="navbarLink nav-link" aria-current="page">
                Home
              </Link>
               <Link to={"/about"} className="navbarLink nav-link">
                About
              </Link>
              <Link to={"/login"} className="navbarLink nav-link">
                Login
              </Link>
              <Link to={"/register"} className="navbarLink nav-link">
                Register
              </Link>
              <AuthBoton />
            </div>
          </div> 
        </nav>
      </header>




    </div>
  );
}

export default Header;
