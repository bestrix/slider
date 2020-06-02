let strip = document.querySelector('.strip')
let middle = strip.children[1];
let windowIsMake = false;

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
        let div = document.createElement('div');
        div.className = "windiws_info";
        div.id = 'winInfo';
        div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
        slider.append(div);
        console.log(slider.clientTop)
        div.style.left = slider.clientWidth / 2 + div.clientWidth / 2 + 30  + 'px';
        div.style.marginTop = slider.clientTop + 'px';
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