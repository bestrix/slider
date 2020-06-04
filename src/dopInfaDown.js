let strip = document.querySelector('.strip')
let middle = strip.children[1];
let windowIsMake = false;
let  direction;

console.log(slider)
window.addEventListener('keydown',(e) => {
    console.log(e.keyCode)
    if(e.keyCode == "40"){
        windowInfaCreate()
    }
    //перезапсь значеницй
})

function windowInfaCreate(){
    if(windowIsMake == false){
        definitionElem()
        let div = document.createElement('div');
        div.className = "windiws_info";
        div.id = 'winInfo';
        //👉
        let textOfData = returnData(definitionElem())
        div.innerHTML = "<strong>Всем привет!</strong> Вы видете." + textOfData; ;
        slider.append(div);
        console.log(slider.clientTop)
        div.style.marginLeft = (slider.clientWidth / 2) - (div.offsetWidth / 2)  + 'px';
        div.classList.add("animate-down");
        let animate = document.getElementsByClassName('animate-down')
        animate[0].style.marginTop = slider.clientHeight + slider.clientTop + 'px'
    }
    windowIsMake = true;
    plusOk = false;
    minusOk = false;
}

function windowsInfoRemove(){
    if(windowIsMake){
        let winInfo = document.getElementById('winInfo')
        windowIsMake = false;
        winInfo.remove();
    }
}


//Задать дата инфу хтмл

function returnData(element){
    return element.dataset.info
}

function definitionElem(){
    if(direction == 'left'){
        console.log("definitionElem -> left")
        return strip.children[2]
    }else if((direction == 'right')){
        console.log("definitionElem -> right")
        return strip.children[1]
    }
}



