let strip = document.querySelector('.strip')

//remove
function removeImg(node,elements){
    for(let i = 0; i < elements;i++){
        node.children[0].remove()
    }
}

removeImg(strip,strip.children.length)
