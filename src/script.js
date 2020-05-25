//Пытался оптимизировать код на  -img но сделал все только хуже


let buttonAppend = document.querySelector('#buttonAppend')
let  buttonRemoveImg = document.querySelector('#buttonRemoveImg')
let  plusButton = document.querySelector('#plusButton');
let  minusButton = document.querySelector('#minusButton');
let  moveTest = document.querySelector('#moveTest');
let strip = document.querySelector('.strip')



//массив с адресами
let massImgSrc = [];
for(let item of strip.children){
    massImgSrc.push(item.src)
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
            strip.children[0].remove()
            break;
        case "last" :
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
    if(slideCounter <= 0){
        slideCounter = massImgSrc.length;
    }else if(slideCounter > massImgSrc.length - 1){
        slideCounter = 0;
    }
    let p = param;
    let s = slideCounter;
    return {
        param,
        slideCounter
    }
  }

  console.log("cons:  "+calcSlideCounter('-').param)

  //Создание img
  function createImg(numberSlide,signInsert){
    massImg[numberSlide] = new Image();
    massImg[numberSlide].src = massImgSrc[numberSlide];
    switch (signInsert){
        case '+':
            insertImg('+',massImg[numberSlide]);
            break;
        case '-':
            insertImg('-',massImg[numberSlide]);
            break;
    }
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
//add one
function appendImg(){
    let i = counter();
    massImg[0] = new Image();
    massImg[0].src = massImgSrc[0];
    massImg[1] = new Image();
    massImg[1].src = massImgSrc[1];
    massImg[2] = new Image();
    massImg[2].src = massImgSrc[2];
    strip.appendChild(massImg[0])
    strip.appendChild(massImg[1])
    strip.appendChild(massImg[2])
}
appendImg()


//add slide + доделать
function plusCounter(){
    createImg(calcSlideCounter('+').slideCounter,calcSlideCounter('+').param);
    strip.children[0].style.marginLeft = '-256px'
  }



//add slide -
function minusCounter(){
    createImg(calcSlideCounter('-').slideCounter,calcSlideCounter('-').param);
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
function moveAllimg(){
    for(let item of strip.children){
        item.style.marginLeft = '0px'
    }
}

remove('all')

function all(){
    plusCounter()
    setTimeout(moveAllimg,100)
    setTimeout(remove('last'),1100)
    

}

function allMinus(){
    minusCounter()
    setTimeout(moveAllimg,100)
    setTimeout(megare('first'),1100)
    

}
// setInterval(all,1000)


//Привязка к кнопкам
plusButton.addEventListener('click',plusCounter);
minusButton.addEventListener('click',minusCounter);
moveTest.addEventListener('click',all)

      
