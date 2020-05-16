
let buttonAppend = document.querySelector('#buttonAppend')
let  buttonRemoveImg = document.querySelector('#buttonRemoveImg')


let strip = document.querySelector('.strip')

//сканирование html 
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



//Добавление элементов 
let massImg = [];
let numberImg = 0 ;
function appendImg(){
    let i = counter();
    massImg[i] = new Image();
    massImg[i].src = massImgSrc[i];
    strip.appendChild(massImg[i])
}

//Удаление первого элемента
function removeFirstImg(){
        strip.children[0].remove()
    
}
//Добавление первого элемента и удаление 
appendImg()
buttonAppend.addEventListener('click',appendImg);
buttonAppend.addEventListener('click',removeFirstImg);
