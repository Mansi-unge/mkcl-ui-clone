import React from "react";
import HeroTwoimg from "../Asset/logo_ycmou.png"
import "./HeroTwo.css"

function HeroTwo(){
  return(
    <>
    <div className="herotwo  d-flex flex-wrap justify-content-evenly align-items-center ">
      <div className="logodiv  p-5 bg-white "><img className="img-fluid" src={HeroTwoimg} alt="" /></div>
    <div className="logodiv2  text-center">
      <p className="fs-5 text-white ">Certifying Body</p>
      <h1 className="fw-bold text-white ">Yashwantrao Chavan Maharashtra Open University</h1>
    </div>
    </div>
    
    </>
  )
}

export default HeroTwo;