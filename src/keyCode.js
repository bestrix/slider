
window.addEventListener('keydown',(e) => {
    console.log(e.keyCode)
    if(e.keyCode == "39"){plusOk = true;direction = "right"
    console.log("direction", direction)
    }else if(e.keyCode == "37"){

        plusOk = false;minusOk = true;direction = "left"
        console.log("direction", direction)
    }
})

