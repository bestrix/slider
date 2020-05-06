import React, { useState } from "react";
import { render } from "react-dom";
import img from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img9 from "../img/8.png"
import img8 from "../img/8.png"
import img10 from "../img/10.png"
import img11 from "../img/11.png"
import img12 from "../img/12.png"
import img13 from "../img/13.png"
import img14 from "../img/14.png"
import img15 from "../img/15.png"
function App(){
    return(
        <React.Fragment>
    <div className="slider">
        <div className="strip">
            <img src={img}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
            <img src={img5}/>
            <img src={img6}/>
            <img src={img7}/>
            <img src={img8}/>
            <img src={img9}/>
            <img src={img10}/>
            <img src={img11}/>
            <img src={img12}/>
            <img src={img13}/>
            <img src={img14}/>
            <img src={img15}/>
        </div>
        </div>
        <button className="button button-left">left</button>
        <button className="button button-right">right</button>
    </React.Fragment>)
}
render(<App/>, document.getElementById("App"));
console.log('react')

