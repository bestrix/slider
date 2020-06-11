let massElem = [];
let numerElem = strip.children.length ;
let ranndomStroke = '<h1>lorem iipsum</h1>'
for(let i = 0; i < numerElem; i++ ){
    massElem.push(document.querySelectorAll('.slide')[i].innerHTML.trim());
    
}
for(let i = 0; i < numerElem; i++ ){
    strip.children[0].remove()
}

console.log(massElem)
console.log('indexOF:' + massElem[0].indexOf("<"))


function getTag(elemMass){
    let bracket1 = elemMass.indexOf("<");
    let bracket2 = elemMass.indexOf(">");
    if((bracket2 - bracket1) < 7){
        console.log(bracket1,bracket2 + 1)
        return (elemMass.slice(bracket1,bracket2+1))
    }else //прописать для img
    
}

function innerTag(elemMass){
    if(getTag(elemMass) == '<img>'){console.log('this is img')}
}
innerTag(massElem[0])
getTag(massElem[0])
getTag(massElem[1])
getTag(massElem[2])