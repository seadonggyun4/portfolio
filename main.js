// [wave animation] ============================================================================================

let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');


window.addEventListener('scroll',function(){
  let value = window.scrollY

  wave1.style.backgroundPositionX = 400 + value + 4 + 'px'
  wave2.style.backgroundPositionX = 300 + value + -4 + 'px'
  wave3.style.backgroundPositionX = 200 + value + 2 + 'px'
  wave4.style.backgroundPositionX = 100 + value + -2 + 'px'
})

// [flip animation] ============================================================================================
var controller = new ScrollMagic.Controller();

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function(boxEl){
  new ScrollMagic
      .Scene({
        triggerElement: boxEl,// 애니메이션 시작 객체
        triggerHook: 1, // trigger 위치
        reverse:false //애니메이션 한번만실행
      })
      .setClassToggle(boxEl,'flip') // 클래스 이름 토글
      .addTo(controller);
});


// [flip animation] ============================================================================================
boxEls.forEach(function(boxEl){
  boxEl.addEventListener("mouseover", function(){
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 45, //최대 휘어짐
      speed: 400, // 값이 낮을수록 더 빠르게 변한다.
    });
    
  })
})


