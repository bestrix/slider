
let test = document.querySelector('#plusButton')
let test2 = document.querySelector('#minusButton')
let sliderXY = slider.getBoundingClientRect()



let obj = {
    a:"b",
    b:"g"
}


// console.log('$c%s',style1,  obj)
// console.log("%c%s",style1, test2)

// test.style.bottom = 0 + 'px'
// top: 337px - 23px
// left: 7.8px
if(test){
    
    test.style.top = slider.getBoundingClientRect().bottom - test2.getBoundingClientRect().height + 'px'
    test.style.left = slider.getBoundingClientRect().left  + 'px'
    console.log(slider)
}

if(test2){
    test2.style.top = slider.getBoundingClientRect().bottom - test2.getBoundingClientRect().height + 'px'
    test2.style.left = slider.getBoundingClientRect().right - test2.getBoundingClientRect().width + 'px'
}
window.onresize = function( event ) {
    if(test ){
        test.style.top = slider.getBoundingClientRect().bottom - test2.getBoundingClientRect().height + 'px'
        test.style.left = slider.getBoundingClientRect().left  + 'px'
    }
    
    if(test2){
        test2.style.top = slider.getBoundingClientRect().bottom - test2.getBoundingClientRect().height + 'px'
        test2.style.left = slider.getBoundingClientRect().right - test2.getBoundingClientRect().width + 'px'
    }

};
window.addEventListener('click',()=>{console.dir(slider.getBoundingClientRect()),test})