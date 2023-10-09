import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "../Header";
import img1 from '../../assests/images/np12blue-retina.webp'
import img2 from '../../assests/images/newspaper-rec728.jpg'
function Home() {
    return (
      <>
    <Header/>
    <div className="container pt-4">
        <div className="row">
            <div className="col-md-3 col-10 mx-auto mb-md-0 mb-2">
<figure>
    <img src={img1}  alt="not found" className="img-fluid"/>
</figure>
            </div>
            <div className="col-md-8  col-10 mx-auto mb-md-0 mb-2">
            <figure>
    <img src={img2}  alt="not found" className="img-fluid"/>
</figure>
            </div>
        </div>

    </div>
    <div className="container">
<ul className="flex justify-content-between w-50">
    <li>News</li>
    <li>Fashion</li>
    <li>GADGET</li>
    <li>LIFESTLYE</li>
    <li>VIDEO</li>
    <li>FEATURES</li>
</ul>
    </div>
      </>
    );
  }
  
  export default Home;