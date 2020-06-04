let slider = document.querySelector('.slider');
let sliderWidth = slider.clientWidth;
let sliderHeight = slider.clientHeight;

function sizeImg(){
    for(let item of strip.children){
        item.style.width = sliderWidth / 3 + 'px';
        item.style.height = sliderHeight + 'px';
        
    }
    
}

function sizeImgStrip(){
    strip.style.offsetWidth
    console.log("offsetWidth",strip.offsetWidth)
}