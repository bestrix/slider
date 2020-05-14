
import "./slider/react.js"

import  "./style.sass"
import './positionButton'
//  import style from "./style.css"



let slider = document.querySelector('.slider');
let strip = document.querySelector('.strip');
let left = document.querySelector('.button-left');
let right = document.querySelector('.button-right');

let ind1 = document.querySelector('#ind1')
let ind2 = document.querySelector('#ind2')
let ind3 = document.querySelector('#ind3')
let ind4 = document.querySelector('#ind4')

let item1 = document.querySelector('#item1')

let stepLeft = 0;
let stepRight = 0;
function stepZeroLeft() {stepLeft = 0}
function stepZeroRight() {stepRight = 0}

function moveStripleft(){
    console.log("steleft:" + stepLeft)
    stepLeft++;
    if(stepLeft > 12){
        moveStripRight()
        
        return false
    }
    
    strip.style.left = -stepLeft*256 + 'px' 
}

function moveStripRight(){
    console.log("steRight:" +stepRight)
    stepRight++;
    // strip.style.left = stepRight*256 + 'px' 
    if(stepRight > 12){
        moveStripleft() 
        return false
    }
}

left.addEventListener('click',moveStripleft)
right.addEventListener('click',moveStripRight)

// setInterval(() => {moveStripleft()},2500)

//massive
let mass1 = [];
    for(let item of strip.childNodes){
        mass1.push(item)
        
}


//удаление
// for(let i = 0;i < 15; i++ ){
//     strip.removeChild(strip.childNodes[0])
//     console.log(strip.childNodes.length)
// }

function remuveImg(node,items){
    for(let i = 0;i < items; i++ ){
        node.childNodes[0].remove()
    }
}
// remuveImg(strip,strip.childNodes.length)


//new massive с адресами изображений
var mass2 = mass1.map(function callback(currentValue, index, array) { 
    return currentValue.src
})
