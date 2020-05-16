
let strip = document.querySelector('.strip')

//сканирование html 
let massImgSrc = [];
for(let item of strip.children){
    massImgSrc.push(item.src)
}


//remove
function removeImg(node,elements){
    for(let i = 0; i < elements;i++){
        node.children[0].remove()
    }
}
removeImg(strip,strip.children.length);
function name(){
    return 'alla'
}

// создание изображений
// for(let i = 0; i < strip.children.length; i++){
//     let name = 'img' + i;
//     let name  = document.createElement('img');
//     name.src = massImgSrc[0];
//     name.className = "lol"
//     strip.appendChild(name)
// }


//генератор имени


