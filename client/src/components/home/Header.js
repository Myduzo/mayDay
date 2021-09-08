import React from "react";
import homeIcon from "../../images/homeIcon.png";
import servicesIcon from "../../images/servicesIcon.png";
import loginIcon from "../../images/loginIcon.png";
import signupIcon from "../../images/signupIcon.png";
import postsIcon from "../../images/postsIcon.png";
import { Link } from "react-router-dom";
// import Signup from './Signup';
// import Login from './Login';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top position-relative">
        <div className="container">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                LOGO
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" style={{ fontSize: "16px" }}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item px-1">
                  <a
                    href="#"
                    className="nav-link active"
                    data-bs-toggle="offcanvas"
                    aria-current="page"
                  >
                    <img
                      src={homeIcon}
                      className="me-2 mb-1"
                      width="16"
                      height="16"
                    />
                    Home
                  </a>
                </li>
                <li className="nav-item px-1">
                  <Link
                    to="/posts"
                    className="nav-link link-dark"
                    data-bs-toggle="offcanvas"
                  >
                    <img
                      src={postsIcon}
                      className="me-2 mb-1"
                      width="19"
                      height="19"
                    />
                    Posts
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <a
                    href="#"
                    className="nav-link link-dark"
                    data-bs-toggle="offcanvas"
                  >
                    <img
                      src={servicesIcon}
                      className="me-2 mb-1"
                      width="19"
                      height="19"
                    />
                    Services
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a
                    href="#"
                    className="nav-link link-dark"
                    data-bs-toggle="offcanvas"
                  >
                    <img
                      src={loginIcon}
                      className="me-2 mb-1"
                      width="16"
                      height="16"
                    />
                    Log In
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a
                    href="#"
                    className="nav-link link-dark"
                    data-bs-toggle="offcanvas"
                  >
                    <img
                      src={signupIcon}
                      className="me-2 mb-1"
                      width="16"
                      height="16"
                    />
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
