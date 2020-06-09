import {slider , slidesNumber} from "./react.jsx"

function removeAll(){
   for (let i = 0; i < slidesNumber; i++){
        slider.children[0].remove()
   }
};

function removeFirst(){
    slider.children[0].remove()
}

function removeLast(){
    slider.children[slidesNumber - 1].remove()
}

export {removeAll, removeFirst, removeLast}