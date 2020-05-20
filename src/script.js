
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
//remove all
function removeImg(node,elements){

}

//Удаление первого элемента
function removeFirstImg(){
    strip.lastChild.remove()

}
//Удаление последнего элемента ! Доделать
function removeLastImg(){
    strip.lastElementChild.remove()
}

function megaRemove(param){
    switch (param){
        case "all" :
            alert("all")
            break;
        case "first" :
            alert("first")
            break;
        case "last" :
            alert("last")
            break;
    }
}
megaRemove("all")

removeImg(strip,strip.children.length);


//----------------------Add
let massImg = [];
let numberImg = 0 ;
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

//Slide counter
let slideCounter = 0;

//add slide -
function minusCounter(){
    slideCounter--;
    if(slideCounter <= 0){
        slideCounter = massImgSrc.length - 1;
      }
      massImg[slideCounter] = new Image();
      massImg[slideCounter].src = massImgSrc[slideCounter];
      strip.append(massImg[slideCounter]);
      removeLastImg();
      
}

//add slide +
function plusCounter(){
    slideCounter++;
    console.log(slideCounter);
    massImg[slideCounter] = new Image();
    massImg[slideCounter].src = massImgSrc[slideCounter];
    strip.prepend(massImg[slideCounter]);
    strip.children[0].style.marginLeft = '-256px'
    if(slideCounter >= massImgSrc.length - 1){
        slideCounter = 0;
      };
  }

//----move
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



function all(){
    plusCounter()
    setTimeout(moveAllimg,100)
    setTimeout(removeLastImg,1100)
    

}
// setInterval(all,1000)


//Привязка к кнопкам
plusButton.addEventListener('click',plusCounter);
minusButton.addEventListener('click',minusCounter);
moveTest.addEventListener('click',all)

      
