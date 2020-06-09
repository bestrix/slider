import React, { useState } from "react";
import { render } from "react-dom";
import './style.sass'
import './style.css'
import App from './slider.jsx'
import {removeAll, removeFirst, removeLast} from './remove.js'





render( <App/>,document.getElementById("App"));


let slider = document.getElementById("slider")
let slidesNumber = slider.children.length
export {slider ,slidesNumber}



