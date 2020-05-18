
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


//remove all
function removeImg(node,elements){
    for(let i = 0; i < elements;i++){
        node.children[0].remove()
    }
}
removeImg(strip,strip.children.length);



//Добавление первого элемента 
let massImg = [];
let numberImg = 0 ;
function appendImg(){
    let i = counter();
    massImg[0] = new Image();
    massImg[0].src = massImgSrc[0];
    strip.appendChild(massImg[0])
}

//Удаление первого элемента
function removeFirstImg(){
        strip.children[0].remove()
    
}

//Удаление последнего элемента ! Доделать
function removeLastImg(){
    strip.children[1].remove()

}


//Добавление первого элемента 
appendImg()



//Slide counter
let slideCounter = 0;

//add slide +
function plusCounter(){
    removeFirstImg();
    slideCounter++;
    massImg[slideCounter] = new Image();
    massImg[slideCounter].src = massImgSrc[slideCounter];
    strip.append(massImg[slideCounter]);
    if(slideCounter >= massImgSrc.length - 1){
        slideCounter = 0;
      }
    console.log("+:" +slideCounter);
  }
  

//add slide -
function minusCounter(){
    slideCounter--;
    if(slideCounter <= 0){
        slideCounter = massImgSrc.length - 1;
      }
      massImg[slideCounter] = new Image();
      massImg[slideCounter].src = massImgSrc[slideCounter];
      strip.prepend(massImg[slideCounter]);
      removeLastImg();
      
}
//Фця движения

console.dir(strip.style)
function moveSlide(){
    let  margin = 0;
    let moveInterval = setInterval(function(){
        strip.style.marginLeft = margin + 'px';
        margin = margin + 10;
        if(margin >= 200){clearInterval(moveInterval)}
        console.log(margin)
    },100);
        
}



moveTest.addEventListener('click',moveSlide)
//Привязка к кнопкам
plusButton.addEventListener('click',plusCounter);
minusButton.addEventListener('click',minusCounter);
console.log(slideCounter)
      
