import {slider,slides,slidesNumber} from './react.jsx'

let massElem = [];
let massForCreateElem = []
function massCreate(){
    for(let item of slides){
        massElem.push(item.innerHTML)
    }
    
}

function getTag(elemMass){
    let bracket = elemMass.indexOf('<') + 1;
    let space = elemMass.indexOf(' ') + 1;
    return ('' + elemMass.slice(bracket, space ).trim())
    

}

function srcImg(elem){
    let bracket = elem.indexOf('"') + 1;
    let bracket2 = elem.lastIndexOf('"') ;
    return (elem.slice(bracket,bracket2))
}

function textTag(elem){
    console.log(elem)
    let bracket = elem.indexOf('>') + 1;
    let bracket2 = elem.lastIndexOf('<') ;
    return (elem.slice(bracket,bracket2))
}

function createElements(number){
        massForCreateElem[number] = document.createElement(getTag(massElem[number]));
        massForCreateElem[number].className = "createElem";
        if(getTag(massElem[number]) == 'img'){ massForCreateElem[number].src = srcImg(massElem[number])}
        else if (getTag(massElem[number]) == 'p' || getTag(massElem[number]) == 'h1'){ massForCreateElem[number].innerHTML  = textTag(massElem[number])}
        slider.append(massForCreateElem[number])

 

}

export {massCreate ,getTag, massElem, createElements,srcImg, textTag,massForCreateElem}


// function createElements(){
//     for(let i = 0; i < slidesNumber; i++){
//         massForCreateElem[i] = document.createElement(getTag(massElem[i]));
//         massForCreateElem[i].className = "createElem";
//         if(getTag(massElem[i]) == 'img'){ massForCreateElem[i].src = srcImg(massElem[i])}
//         else if (getTag(massElem[i]) == 'p' || getTag(massElem[i]) == 'h1'){ massForCreateElem[i].innerHTML  = textTag(massElem[i])}
//         slider.append(massForCreateElem[i])
//         console.log(massForCreateElem[i])
//     }

// }