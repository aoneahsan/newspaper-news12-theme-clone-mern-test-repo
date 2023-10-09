import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaViadeo} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
function Header() {
    return (
      <>
    <header className="text-white w-100" style={{background:"black",height:'30px'}}>
        <div className="  flex  justify-content-between w-50 ">
            <div className="flex mt-2 justify-content-evenly ms-5 ps-5   ">
            <p className="me-md-3" style={{ fontSize:'11px'}}>New York</p>
<p style={{ fontSize:'11px'}}>Thursday, October 5, 2023</p>
            </div>          
<div className="Links"> 
<Link className="text-decoration-none text-white me-3" style={{ fontSize:'11px'}}>
Sign in / Join
</Link>
<Link className="text-decoration-none text-white me-3" style={{ fontSize:'11px'}}>
Blog
</Link>
<Link className="text-decoration-none text-white me-3" style={{ fontSize:'11px'}}>
Forum
</Link>
<Link className="text-decoration-none text-white" style={{ fontSize:'11px'}}>
Buy Now!
</Link>
 </div> 
 <div className="flex justify-content-between items-center  " style={{ width:"100px"}}>
<FaFacebook/>
<FaInstagramSquare/>
<FaTwitter/>
<FaViadeo/>
<FaYoutube/>
</div>
</div>


    </header>
      </>
    );
  }
  
  export default Header;