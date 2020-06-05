let colorMassive = [',#00ffff',',#000080',',#800080',',#000000',',#800000',',#00ff00',',#c0c0c0',',#fff',',black', ',green' ,',yellow'];
let currentColor = [];
let deg = 0;

 function changeColorBorder(){
    deg = deg + 15;
    let one = getRandomInRange();
    let two = getRandomInRange();
    let three = getRandomInRange();
    let four = getRandomInRange();
    slider.style.borderImage =  'linear-gradient('+ deg +'deg'+  colorMassive[getRandomInRange()] +  colorMassive[getRandomInRange()] + colorMassive[getRandomInRange()] + colorMassive[getRandomInRange()] +')';
    slider.style.borderImageSlice =  1;
    
}
function getRandomInRange() {
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  }
  

function colorRandomforBorder(){
    //очистка массива
    //Заполенние массива рандоомным цветом
    currentColor.push(colorMassive[0])
    //отдавать 4 цвета
    return currentColor;
}



function ramdomNumber(){

}
