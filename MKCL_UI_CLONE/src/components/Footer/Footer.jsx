import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram ,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer(){
  return (
    <>
    <div className="footerdiv d-flex align-items-start flex-wrap p-5">
      <div className="footer d-flex justify-content-left align-items-center mt-5">
        <ul>
          <li><h5>Company</h5></li>
          <li className="mt-4"><Link style={{textDecoration:'none' , color:'white',opacity:0.7 }  }>Home</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none',opacity:0.7 , color:'white'}}>KLiC Diploma</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none',opacity:0.7, color:'white' }}>About Us</Link></li>
          <li className="mt-4"><Link style={{textDecoration:'none', color:'white' }}><h5>Send your feedback</h5></Link></li>
          <li className="mt-3"><Link style={{textDecoration:'none',opacity:0.7 , color:'white'}}>feedback@mkcl.org</Link></li>
        </ul>
        
      </div>
      <div className="footer d-flex justify-content-left align-items-center mt-5">
        <ul>
          <li ><h4>Quick Links</h4></li>
          <li className="mt-4"><Link style={{textDecoration:'none',opacity:0.7, color:'white' }}>Admission</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white'}}>Importatnt Instructions</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white'}}>Contact Us</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white'}}>Find nearest AlC Center</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white' }}>Verify Your Results</Link></li>
          <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white' }}>Terms & Conditions</Link></li>
        </ul>
      </div>
      <div className=" footer d-flex justify-content-left align-items-center mt-5">
        <ul>
          <li><h4>Get In Touch</h4></li>
        <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white' }}> ICC Trade Tower, <br /> 'A' Wing  5th Floor , <br /> Senapati Bapat Road , <br /> Shivnagar , Pune 411 016 , <br /> Maharashtra , India</Link></li>
        <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white' }}>support@mkcl.org</Link></li>
        <li className="mt-2"><Link style={{textDecoration:'none' ,opacity:0.7, color:'white' }}>+91 20 4011 4500</Link></li>
        <li className="mt-4"><h4>Follow US</h4></li>
        <li className="d-flex justify-content-left align-items-center"><Link >
          <FontAwesomeIcon icon={faFacebook} style={{ color: "white",fontSize:"20px" ,marginLeft:"15px" , marginTop:"10px" }}/>
        </Link>
        <Link >
          <FontAwesomeIcon icon={faTwitter} style={{ color: "white" , fontSize:"20px" ,marginLeft:"15px", marginTop:"10px"   }}/>
        </Link>
        <Link >
          <FontAwesomeIcon style={{ color: "white" ,fontSize:"20px",marginLeft:"15px", marginTop:"10px"    }}icon={faYoutube} />
        </Link>
        <Link >
          <FontAwesomeIcon  icon={faInstagram} style={{ color: "white",fontSize:"20px",marginLeft:"15px" , marginTop:"10px"   }} />
        </Link>
        </li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default Footer;