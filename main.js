// [header title logo animation: header] ============================================================================================
// gsap 라이브러리 사용
// lodash 라이브러리 사용
const HeaderBtnEl = document.querySelector('.header-button');
const HeadertitleEl = document.querySelector('.header-title');

window.addEventListener('scroll',_.throttle(function(){
  //gsap.to(적용요소, 지속시간, 스타일옵션)


    // Y축 스크롤값이 100이상일때
    if(window.scrollY > 100){

      if(window.innerWidth >= 1200){
        //데스크탑 : header button 등장
        gsap.to(HeaderBtnEl, .1, {
          opacity:1,
          x:30,
        });
      } else if(window.innerWidth >= 768){
        //타블렛 : header button 등장 
        gsap.to(HeaderBtnEl, .1, {
          opacity:1,
          x:15,
        });
      } else{
        //모바일 : header button 등장
        gsap.to(HeaderBtnEl, .1, {
          opacity:1,
          x:5,
        });
      }
      //header title 숨김
      gsap.to(HeadertitleEl,.1,{
        opacity:0,
        x:-100
      })
    } else{
      //header button 숨김
      gsap.to(HeaderBtnEl, .1, {
        opacity:0,
        x:-100
      })
      //header title 등장
      gsap.to(HeadertitleEl,.1,{
        opacity:1,
        x:15
      })
    }
  

}));
// [header-bar change color: header Btn & Menu] ============================================================================================
// gsap 라이브러리 사용
// lodash 라이브러리 사용
const headerMenuListEl = document.querySelectorAll('.header-menu-list a');


window.addEventListener('scroll',_.throttle(function(){
  if(scrollY >= 700){
    //header 메뉴
    gsap.to(headerMenuListEl,.1,{
      color: "#191015"
    })
    //header 버튼
    gsap.to(HeaderBtnEl,.1,{
      backgroundColor: "#191015"
    })
  } else {
    //header 메뉴
    gsap.to(headerMenuListEl,.1,{
      color: "#fff"
    })
    //header 버튼
    gsap.to(HeaderBtnEl,.1,{
      backgroundColor: "transparent"
    })
  }
}))


// [title-section tilte 나타남 효과 : title-section] ============================================================================================
// gsap 라이브러리 사용
const fadeEls = document.querySelectorAll('.title-section .fade-in');

fadeEls.forEach(function(fadeEl, index){
  //gsap.to(적용요소, 지속시간, 스타일옵션)
  gsap.to(fadeEl, 1, {
    y:0,
    opacity:1,
    // 0.7 -> 1.4 -> 2.1 -> 2.7
    delay: (index + 1) * .7
  });
});

// [profile about-title 색 변환 효과 : profile-section] ============================================================================================
// scrollMagic 라이브러리 사용
var controller = new ScrollMagic.Controller();

const pEls = document.querySelectorAll('.about-title p')
pEls.forEach(function(pEl){
  new ScrollMagic
      .Scene({
        triggerElement: pEl,// 애니메이션 시작 객체
        triggerHook: .5, // trigger 위치
      })
      .setClassToggle(pEl, 'change-color')
      .addTo(controller)
})






// [flip animation: tech-skill-section] ============================================================================================
// scrollMagic 라이브러리 사용
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


// [틸트 animation: tech-skill-section] ============================================================================================
// 틸트.js 라이브러리 사용
boxEls.forEach(function(boxEl){
  boxEl.addEventListener("mouseover", function(){
    VanillaTilt.init(document.querySelectorAll(".box.flip"), {
      max: 45, //최대 휘어짐
      speed: 400, // 값이 낮을수록 더 빠르게 변한다.
    });
    
  })
})
