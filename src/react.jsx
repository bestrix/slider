import React, { useState } from "react";
import { render } from "react-dom";
import test from './script';
import './style.sass'
import './style.css'
import {removeAll, removeFirst} from './remove.js'



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

removeAll()
function App(){
   return (
    <React.Fragment>
        <div id="slider">
            <div className="slide">
              <h1>headers for slider</h1>
            </div>
            <div className="slide">
              <p>
                 lorem ipsum sit amet
                 lorem ipsum sit amet
                 lorem ipsum sit amet
                 lorem ipsum sit amet
              </p>
            </div>
            <div className="slide">
              <img src='./img/1.png'/>
            </div>
            <div className="slide">
              <img src='./img/1.png'/>
            </div>
            <div className="slide">
              <img src='./img/2.png'/>
            </div>
            <div className="slide">
              <img src='./img/3.png'/>
            </div>
            <div className="slide">
              <img src='./img/4.png'/>
            </div>
            <div className="slide">
              <img src='./img/5.png'/>
            </div>
            <div className="slide">
              <img src='./img/6.png'/>
            </div>
            <div className="slide">
              <img src='./img/7.png'/>
            </div>
            <div className="slide">
              <img src='./img/8.png'/>
            </div>
            <div className="slide">
              <img src='./img/9.png'/>
            </div>
            <div className="slide">
              <img src='./img/10.png'/>
            </div>
            <div className="slide">
              <img src='./img/11.png'/>
            </div>
            <div className="slide">
              <img src='./img/12.png'/>
            </div>
            <div className="slide">
              <img src='./img/13.png'/>
            </div>
            <div className="slide">
              <img src='./img/14.png'/>
            </div>
            <div className="slide">
              <img src='./img/15.png'/>
            </div>
        

        </div>
    </React.Fragment>
   )
}

  




render( <App/>,document.getElementById("App"));
