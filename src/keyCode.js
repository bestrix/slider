window.addEventListener('keydown',(e) => {
    console.log(e.keyCode)
    if(e.keyCode == "39"){plusOk = true;
    }else if(e.keyCode == "37"){
        plusOk = false;minusOk = true;
    }
})