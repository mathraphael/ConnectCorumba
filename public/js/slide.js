'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]');
const slideList = document.querySelector('[data-slide="list"]');
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]');
const navNextButton = document.querySelector('[data-slide="nav-next-button"]');
const controlWrapper = document.querySelector('[data-slide="controls-wrapper"]');
const slideItems = document.querySelectorAll('[data-slide="item"]');
const controlButtons = document.querySelectorAll('[data-slide="control-button"]');
var startingPoint

function onMouseDown(event){
    const slideItem = event.currentTarget;
    startingPoint = event.clientX;
    slideItem.addEventListener('mousemove', onMouseMove);
    console.log('ponto de partida', startingPoint);
    
}

function onMouseMove(event){
    const movement = event.clientX - startingPoint;
    console.log('pixel do mousemove', event.clientX, '-', 'ponto de partida', startingPoint, '=', movement );
    slideList.style.transform = 'translateX('+movement+'px)'; //erro aqui
}

function onMouseUp(event){
    const slideItem = event.currentTarget;
    slideItem.removeEventListener('mousemove', onMouseMove);
    
}

slideItems.forEach(function(slideItem, index) {
   slideItem.addEventListener('dragstart', function(event){
    event.preventDefault();
   });

   slideItem.addEventListener('mousedown', onMouseDown);
   slideItem.addEventListener('mouseup', onMouseUp);

})