
window.addEventListener('keydown',(e) => {
    console.log(e.keyCode)
    if(e.keyCode == "40"){
        createWindowInfa()
    }
    //перезапсь значеницй
    plusOk = false;minusOk = true;
})

let middle = strip.children[1];

function createWindowInfa(){
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(div)
}

