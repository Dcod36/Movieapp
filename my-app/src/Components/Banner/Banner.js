import React from 'react'
import "./Banner.css"
function Banner() 
{
    return(
       <div className="banner">
        <div className="content">
            <h1 className="title">Movie name</h1>
            <div classname="banner_button">
                <button className=" button">Play</button>
                <button className=" button">My list</button>
            </div>
            <h1 className="description">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet</h1>  
        </div>
      <div className="fade-button"></div>
         </div>
    )
}

export default Banner
