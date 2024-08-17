import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo1 from "../Asset/logo1.svg";
import logo2 from "../Asset/logo_klic.png";
import "./NAvbar.css"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border border-top  border-5 border-primary  border-bottom-0 border-start-0  border-end-0">
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              <img className="logo" src={logo1} alt="Logo" />
            </Link>
            <Link to="/">
              <img className="logo" src={logo2} alt="Second Logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbtn collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link className="btn my-1 btn-primary mx-1" to="Home-MKCLs-KLic">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn my-1 mx-1" to="KLiC-Courses-MKCLs-KLic">
                  KLiC Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn my-1 mx-1" to="KLic-Diploma-MKCLs-KLic">
                  KLic Diploma
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn my-1 mx-1" to="Admission-MKCLs-KLic">
                  Admission
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn my-1 mx-1" to="Learner-Life-Cycle-MKCLs-KLic">
                  Learner Life Cycle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn my-1 mx-1" to="FAQs-MKCLs-KLic">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;