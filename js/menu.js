(function () {
  'use strict';

  var menuIconElement = document.querySelector('.header__icon');
  var menuElement = document.querySelector('.menu');
  var menuOpened = false;

  //Menu click event
  menuIconElement.addEventListener('click', toggleMenu, false);
  menuElement.addEventListener('transitionend', onTransitionEnd, false);

  function toggleMenu(){
    if(menuOpened){
      menuOpened = false;
      menuElement.style.transform = "translateX(-110%)";
      menuElement.classList.remove('menu--show');
      menuElement.addEventListener('transitionend', onTransitionEnd, false); 
    }
    else{
      menuOpened = true;
      menuElement.style.transform = "translateX(0)";
      menuElement.classList.add('menu--show');
    }
  }
  
  var touchStartPoint, touchMovePoint;

  /*Swipe from edge to open menu*/

  //`TouchStart` event to find where user start the touch
  document.body.addEventListener('touchstart', function(event) {
    touchStartPoint = event.changedTouches[0].pageX;
    touchMovePoint = touchStartPoint;
  }, false);
  
  //`TouchMove` event to determine user touch movement
  document.body.addEventListener('touchmove', function(event) {
    touchMovePoint = event.touches[0].pageX;
    if (touchStartPoint < 10 && touchMovePoint > 30) {          
      menuElement.style.transform = "translateX(0)";
    }
  }, false);

  function onTransitionEnd() {
    if (touchStartPoint < 10) {
      menuElement.style.transform = "translateX(0)";
      menuElement.removeEventListener('transitionend', onTransitionEnd, false); 
    }
  }
})();