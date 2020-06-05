//Пытался оптимизировать код на  -img но сделал все только хуже
//✅ ✔ ⛔ ➔ ✱ ▪👉👈🤜✍👇👆👹💩✴➕➖❗❓‼⁉

let buttonAppend = document.querySelector('#buttonAppend')
let  buttonRemoveImg = document.querySelector('#buttonRemoveImg')
let  plusButton = document.querySelector('#plusButton');
let  minusButton = document.querySelector('#minusButton');
let  moveTest = document.querySelector('#moveTest');
let numSlide = 2;



//массив с адресами
let massImgSrc = [];
let massImgDataInfo = [];
for(let item of strip.children){
    massImgSrc.push(item.src)
    massImgDataInfo.push(item.dataset.info)
    console.dir
}


// ---------------remove 
function remove(param){
    switch (param){
        case "all" :
            for(let i = 0; i < 15; i++){
                strip.children[0].remove()
            }
            break;
        case "first" :
            console.log("remove")
            strip.children[0].remove()
            break;
        case "last" :
            console.log('remove')
            strip.lastElementChild.remove()
            break;
    }
}



//----------------------Add
let massImg = [];

let numberImg = 0 ;
let slideCounter = 0;

//Расщет slideConuter
    function calcSlideCounter(param){
        switch (param){
        case "+" :
            slideCounter++;
            break;
        case "-" :
            slideCounter--;
            break;
    }
    if(slideCounter < 0){
        slideCounter = massImgSrc.length - 1;
    }else if(slideCounter > massImgSrc.length - 1){
        slideCounter = 0;
    }

    return slideCounter
  }



  //Создание img
  function createImgPlus(numberSlide,signInsert){
    massImg[numberSlide] = new Image();
    massImg[numberSlide].src = massImgSrc[numberSlide];
    massImg[numberSlide].setAttribute("data-info",'' + massImgDataInfo[numberSlide])
    insertImg('+',massImg[numberSlide]);

    
    
  }

  function createImgMinus(numberSlide){
    console.log('createImgMinus-номер слайда:'+ numberSlide)
    massImg[numberSlide] = new Image();
    //todo заносить правильное data-info
    massImg[numberSlide].setAttribute("data-info",'' + massImgDataInfo[numberSlide])
    massImg[numberSlide].src = massImgSrc[numberSlide];
    insertImg('-',massImg[numberSlide]);
  }

  //Вставка
  function insertImg(sign,massImg){
    switch (sign){
        case '+':
            strip.prepend(massImg);
            break;
        case '-':
            strip.append(massImg);
            break;
    }
  }

  //Вставка начальных IMG
function appendImg(number){
    for(i = 0; i <= number; i++ ){
        let numSlide = calcSlideCounter('+');
        massImg[numSlide] =  new Image();
        massImg[numSlide].setAttribute("data-info",'' + massImgDataInfo[numSlide])
        massImg[numSlide].src = massImgSrc[numSlide];
        
        strip.appendChild(massImg[numSlide])
    }
}

appendImg(numSlide)
sizeImg()

//add slide + доделать
function plusCounter(){
    createImgPlus(calcSlideCounter('+'));
    strip.children[0].style.marginLeft = '-256px'
    console.log('plusCaunter+'+calcSlideCounter('+').slideCounter )
  }



//add slide -
function minusCounter(){
    console.log("minusCounter")
    createImgMinus(calcSlideCounter('-'));
}



//-----------move
function moveSlide(){
    let  margin = 0;
    let moveInterval = setInterval(function(){
        strip.style.marginLeft = margin + 'px';
        margin = margin + 10;
        if(margin >= 200){clearInterval(moveInterval)}
        console.log(margin)
    },100);
};

//------------move all
function moveRight(){
    console.log('move')
    for(let item of strip.children){
        item.style.marginLeft = '0px'
    }
}


function moveLeft(){
    strip.children[0].style.marginLeft = '-256px'
}

remove('all')

function allPlus(){
    changeColorBorder()
    sizeImg()   
    windowsInfoRemove()
    plusCounter()
    setTimeout(moveRight,100)
    setTimeout(() => {
        console.log("remove");
        strip.lastElementChild.remove()
    },1000);
    

}

function allMinus(){
    changeColorBorder()
    sizeImg()
    windowsInfoRemove()
    minusCounter()
    setTimeout(moveLeft,100)
    setTimeout(function(){strip.children[0].remove()},1100)
}

let plusOk = false;
let minusOk = false;

function startSlider(){
    if(plusOk){
        minusOk = false;
        allPlus();

    } if(minusOk){
        plusOk = false;
        allMinus();

    }
}

let right = setInterval(startSlider,1500)

function startSliderLeft(){
    clearInterval(left)
    
}

//Привязка к кнопкам
plusButton.addEventListener('click',() => {;plusOk = true;});
minusButton.addEventListener('click',() => {plusOk = false;minusOk = true;});
// moveTest.addEventListener('click',all)

      
