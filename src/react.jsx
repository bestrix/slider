import React, { useState } from "react";
import { render } from "react-dom";
import './style.sass'
import './style.css'
import App from './slider.jsx'
import {massCreate ,getTag, massElem, createElements,srcImg, textTag, massForCreateElem}  from './massive.js'
import {removeAll, removeFirst, removeLast} from './remove.js'
import {countPlus,countMinus,beginCount} from './count'
import getkey from './key.js'
export {slider ,slidesNumber,slides}

render( <App/>,document.getElementById("App"));
let slider = document.getElementById("slider");
let slides = document.querySelectorAll('.slide');
let slidesNumber = slider.children.length;
document.addEventListener('keydown', getkey);

massCreate();
removeAll()

createElements(4)







   

