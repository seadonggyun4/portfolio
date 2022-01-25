// [flip animation] ============================================================================================
var controller = new ScrollMagic.Controller();

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function(boxEl){
  new ScrollMagic
      .Scene({
        triggerElement: boxEl,// 애니메이션 시작 객체
        triggerHook: .6, // trigger 위치
        reverse:false //애니메이션 한번만실행
      })
      .setClassToggle(boxEl,'flip') // 클래스 이름 토글
      .addTo(controller);
});


// [틸트 animation] ============================================================================================
boxEls.forEach(function(boxEl){
  boxEl.addEventListener("mouseover", function(){
    VanillaTilt.init(document.querySelectorAll(".box.flip"), {
      max: 45, //최대 휘어짐
      speed: 400, // 값이 낮을수록 더 빠르게 변한다.
    });
    
  })
})
