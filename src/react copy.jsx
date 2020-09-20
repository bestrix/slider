'use strict'

import React, { useState } from "./react copy";
import { render } from "react-dom";
import './style.sass'
import './style.css'
import './script.js'
import App from './slider.jsx'
render( <App/>,document.getElementById("App"));

console.log(document.querySelector('.slider'))
class Slider{
  constructor({main,wrap,next,prev,infinite = false,showToSlides = 4,position = 0}){
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.options = {
      slideWidth:Math.floor(100/showToSlides),
      position,
      showToSlides

    }
  }
  
  addStyle(){
    const style = document.createElement('style');
    style.id = 'besSliderStyle';
    style.textContent = `
    .bes-slider{
      overflow:hidden
    }
    .bes-slider-wrap{
      display:flex;
      transition:transform 0.5s;
      will-change:transform;
    }
    .bes-item{
      flex: 0 0 ${this.options.slideWidth + '%'};
      margin: auto 0;
    }

    `
    document.head.append(style)
  };

  addClasses(){
    this.main.classList.add('bes-slider');
    this.wrap.classList.add('bes-slider-wrap');
    for(let elem of this.slides){
      elem.classList.add('bes-item')
    }

  }

  controlSlider(){
    this.prev.addEventListener('click',this.prevSlides.bind(this));
    this.next.addEventListener('click',this.nextSlides.bind(this));
  }

  prevSlides(){
  if(this.options.position > 0){
    --this.options.position
    this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
  }
  }

  nextSlides(){
    if(this.options.position <(this.slides.length - this.options.showToSlides)){
    ++this.options.position;
    this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
  }
  }

  init(){
  this.addClasses(),
  this.addStyle()
  this.controlSlider()
   console.log(document.head)
  }


}


const slider = new Slider({
  main: '.slider',
  wrap: '.wrap',
  prev: '.sliderBtnLeft',
  next: '.sliderBtnRight'

})

slider.init()



   

