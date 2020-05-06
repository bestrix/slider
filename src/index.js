
import "./slider/react.js"
import  "./style.sass"
//  import style from "./style.css"



let slider = document.querySelector('.slider');
let strip = document.querySelector('.strip');
let left = document.querySelector('.button-left');
let right = document.querySelector('.button-right');


let stepLeft = 0;
let stepRight = 0;
function stepZero() {stepLeft = 0}
function moveStripleft(){

    stepLeft++;
    if(stepLeft > 12){
        stepZero()
    }
    console.log(stepLeft)
    strip.style.left = -stepLeft*256 + 'px' 
}

function moveStripRight(){

    stepRight++;
    strip.style.left = stepRight*256 + 'px' 

}

left.addEventListener('click',moveStripleft)
right.addEventListener('click',moveStripRight)

setInterval(() => {moveStripleft()},1500)