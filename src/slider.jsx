import React, { useState } from "react";
import { render } from "react-dom";

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'
import img9 from './img/9.png'
import img10 from './img/10.png'
import img11 from './img/11.png'
import img12 from './img/12.png'
import img13 from './img/13.png'
import img14 from './img/14.png'


export default function App(){
    return (
     <React.Fragment>
       <div className="slider" >
         <div className="wrap" >
             <div className="slides">
               <img src='./img/1.png'/>
             </div>
             <div className="slides">
               <img src='./img/2.png'/>
             </div>
             <div className="slides">
               <img src='./img/3.png'/>
             </div>
             <div className="slides">
               <img src='./img/4.png'/>
             </div>
             <div className="slides">
               <img src='./img/5.png'/>
             </div>
             <div className="slides">
               <img src='./img/6.png'/>
             </div>
             <div className="slides">
               <img src='./img/7.png'/>
             </div>
             <div className="slides">
               <img src='./img/8.png'/>
             </div>
             <div className="slides">
               <img src='./img/9.png'/>
             </div>
             <div className="slides">
               <img src='./img/10.png'/>
             </div>
             <div className="slides">
               <img src='./img/11.png'/>
             </div>
             <div className="slides">
               <img src='./img/12.png'/>
             </div>
             <div className="slides">
               <img src='./img/13.png'/>
             </div>
             <div className="slides">
               <img src='./img/14.png'/>
             </div>
             <div className="slides">
               <img src='./img/15.png'/>
             </div>
          </div>
          {/* <button className="sliderBtnLeft">{"<"}</button>
          <button className="sliderBtnRight">{">"}</button> */}
        </div>
     </React.Fragment>
    )
 }


 
