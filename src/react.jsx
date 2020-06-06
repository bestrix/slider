import React, { useState } from "react";
import { render } from "react-dom";
import test from './script';
import './style.sass'
import './style.css'
import img1 from './img/2.jpg'
test()
function Img(){
   return <img src="./img/2.jpg" alt=""/>
}

function App(){
    return(
        <React.Fragment>
            <h1>react is work</h1>
            <Img/>
        </React.Fragment>
    )
  

}


render( <App/>,document.getElementById("App"));
// render(<h1>1111</h1>, document.getElementById("App"));