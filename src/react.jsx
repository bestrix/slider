'use strict'

import React, { useState } from "react";
import { render } from "react-dom";
import './style.sass'
import './style.css'
import './script.js'
import App from './slider.jsx'
render( <App/>,document.getElementById("App"));



class SliderCarusel{
  constructor({main,wrap,left,right,position = 0,slideToShow = 4,responsive}){

    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    console.log(!this.main )
    if(!this.main || !this.wrap){
      console.warn('need main and wrap')
    };
    this.slides = document.querySelector(wrap).children;
    this.left = document.querySelector(left);
    this.right = document.querySelector(right);
    this.slideToShow = slideToShow;
    this.options = {
      position,
      slideWidth :Math.floor(100/slideToShow),
    }
    this.responsive = responsive;
  };



  addBesClass(){
    this.main.classList.add('bes-slider');
    this.wrap.classList.add('bes-slider-wrap');
    for(let elem of this.slides){
      elem.classList.add('bes-item')
    }
  };

  //проверку на дублирующие стили
  addStyle(){
    let styleInHead = document.getElementById("besSliderStyle");
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
      display:flex;
      align-items:center;
      flex: 0 0 ${this.options.slideWidth + '%'};
      margin: auto 0;
    }

    `
    document.head.append(style)
    
    
  };

  constrolSlider(){
  
    this.left.addEventListener('click', this.nextSlider.bind(this))
    this.right.addEventListener('click', this.prevSlider.bind(this))
  }

  nextSlider(){
    if(this.options.position < this.slides.length - this.slideToShow){
      ++this.options.position
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  prevSlider(){
    if(this.options.position > 0){
    --this.options.position
    this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth + '%'})`;
    }
  }
  addArrow(){
    console.log("arrow")
    this.right = document.createElement('div');
    this.left = document.createElement('div');
    let style = document.createElement('style');
    style.textContent = `
    .arrow{
      margin: 0 10px;
      border: 20px solid transparent;
      backgrond:transparent;
      display:inline-block;
      
    }
    .arrow-next{
      border-right-color:#19b5fe;
    }
    .arrow-prev{
      border-left-color:#19b5fe;
    }`;
    
    // next.innerText = ">";
    // prev.innerText = "<";
    this.right.className = "arrow arrow-next ";
    this.left.className = "arrow arrow-prev ";
    this.main.append(this.right);
    this.main.append(this.left);
    document.head.appendChild(style);
  }
  responseInit(){
    
    const slideToShowDef = this.slideToShow; 
    const allResponsive = this.responsive.map((elem)=>parseInt(elem.breakpoint));
    const maxResponsive = Math.max(... allResponsive); //////?
    window.addEventListener('resize',()=>{checkResponse()})  
    const checkResponse = () => {
    
    const widthWindow = document.documentElement.clientWidth;
    
      if(widthWindow < maxResponsive){
        
        for(let i = 0; i < allResponsive.length; i++){
          
          if(widthWindow < allResponsive[i]){
            
            console.log("alert")
            this.slideToShow = this.responsive[i].slideToShow;
            this.options.slideWidth = Math.floor(100/this.slideToShow);
            this.addStyle();
          }
        }
      }
    }
    checkResponse();
  }
  init(){
    (this.left && this.right) ? this.constrolSlider() : this.addArrow();this.constrolSlider();
    this.addBesClass();
    this.addStyle();
    this.responseInit();
    if(this.responsive){
      this.responseInit()
    }
  };
}


const carousel = new SliderCarusel({
  main: '.slider',
  wrap: '.wrap',
  left: '.sliderBtnLeft',
  right: '.sliderBtnRight',
  position: 0,
  slideToShow : 4,
  responsive:[{
    breakpoint:1024,
    slideToShow:3
  },
  {
    breakpoint:768,
    slideToShow:2
  },
  {
    breakpoint:576,
    slideToShow:1
  },
]
}); 


carousel.init();





   

