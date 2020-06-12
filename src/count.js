import {slidesNumber} from './react.jsx'

let beginCount = 5;
function countPlus(){
    beginCount++;
    console.log(beginCount)
    console.log(slidesNumber)
    if(beginCount > slidesNumber){
        beginCount = 0
    }
    return beginCount
}

function countMinus(){
    beginCount--;
    if(beginCount < 0){
        beginCount = slidesNumber ;
    }
    return beginCount
}

export {countPlus,countMinus,beginCount}