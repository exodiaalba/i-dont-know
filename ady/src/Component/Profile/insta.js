import React from "react";
import "./ins.css";
import insta from "./insta.jpg";
const ins = () => {
    return( 
        <div className="insta">
            <a href="https://www.instagram.com/exodia.alba/?hl=fr">
                <img classname="insta" src={insta}/>
            </a>
        </div>

    )
};
export default ins;