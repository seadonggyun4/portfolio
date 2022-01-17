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


var flip = TweenMax.to('.box',0.5,{
  transform: rotateY(0)
})




const boxEls = document.querySelectorAll('.box');
boxEls.forEach(function(boxEl){
  new ScrollMagic
      .Scene({
        triggerElement: boxEl,
        triggerHook: 1
      })
      .setTween(boxEl, flip) // setClassToggle(적용될 식별자, 토글될 클래스 명)
    .addTo(new ScrollMagic.Controller());
})

console.log(boxEls.classList);

// VanillaTilt.init(document.querySelectorAll(".box"), {
//   max: 35, //최대 휘어짐
//   speed: 400, // 값이 낮을수록 더 빠르게 변한다.
// });

