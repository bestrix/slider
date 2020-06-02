let strip = document.querySelector('.strip')
let middle = strip.children[1];
let windowIsMake = false;



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
        document.body.append(div);
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