//main.scss 연결
import '../styles/main.scss'



// [header 타이틀 로고 animation: header] ============================================================================================
// gsap 라이브러리 사용
// lodash 라이브러리 사용
const headerBtnEl = document.querySelector('.header-button');
const headertitleEl = document.querySelector('.header-title');

window.addEventListener('scroll',_.throttle(function(){
  //gsap.to(적용요소, 지속시간, 스타일옵션)
  
  // Y축 스크롤값이 100이상일때
  if(window.scrollY > 100){

    if(window.innerWidth >= 1200){
      //데스크탑 : header button 등장
      gsap.to(headerBtnEl, .1, {
        opacity:1,
        x:30,
      });
    } else if(window.innerWidth >= 768){
      //타블렛 : header button 등장 
      gsap.to(headerBtnEl, .1, {
        opacity:1,
        x:15,
      });
    } else{
      //모바일 : header button 등장
      gsap.to(headerBtnEl, .1, {
        opacity:1,
        x:5,
      });
    }

    //header title 숨김
    gsap.to(headertitleEl,.1,{
      opacity:0,
      x:-100
    })
  } else{

    //타블렛 크기 이상에서만
    if(window.innerWidth >= 768){
      //header button 숨김
      gsap.to(headerBtnEl, .1, {
        opacity:0,
        x:-100
      })
      //header title 등장
      gsap.to(headertitleEl,.1,{
        opacity:1,
        x:15
      })
    }
  }
  
}));

// [header 타이틀 로고 색상 변경: header] ============================================================================================
// gsap 라이브러리 사용
const headertitleAEl = document.querySelector('.header-title a');


//headerTitle 색상변경
headertitleAEl.addEventListener('mouseover',function(){
  gsap.to(this,1,{color:"#5e96ff"})
})
headertitleAEl.addEventListener('mouseout',function(){
  gsap.to(this, 1,{
    color:"#fff"
  })
})


//headerBtn 색상변경
headerBtnEl.addEventListener('mouseover',function(){
  gsap.to(this,.01,{
    backgroundColor:"#5e96ff"
  })
})
headerBtnEl.addEventListener('mouseout',function(){
  if(scrollY >= 700){
    gsap.to(this,.01,{
      backgroundColor:"#191015"
    })
  } else {
    gsap.to(this,.01, {
      backgroundColor: "transparent"
    })
  }
})








// [header-bar 색상 변경: header Btn & Menu] ============================================================================================
// gsap 라이브러리 사용
// lodash 라이브러리 사용
const headerMenuListEls = document.querySelectorAll('.header-menu-list a');


window.addEventListener('scroll',_.throttle(function(){
  if(scrollY >= 700){
    //header 메뉴
    gsap.to(headerMenuListEls,.1,{
      color: "#191015"
    })
    //header 버튼
    gsap.to(headerBtnEl,.1,{
      backgroundColor: "#191015"
    })
  } else {
    //header 메뉴
    gsap.to(headerMenuListEls,.1,{
      color: "#fff"
    })
    //header 버튼
    gsap.to(headerBtnEl,.1,{
      backgroundColor: "transparent"
    })
  }
}))

//header menu 색상변경
headerMenuListEls.forEach(function(headerMenuListEl){
  //마우스 오버시 -> blue()함수 사용
  headerMenuListEl.addEventListener('mouseover',function(){
    gsap.to(this,.1,{color:"#5e96ff"})
  })
  //마우스 아웃시
  headerMenuListEl.addEventListener('mouseout',function(){
    if(scrollY >= 700){
      gsap.to(this,.001,{color:"#191015"})
    } else {
      gsap.to(this,.001,{color:"#fff"})
    }
    
  })
})




// [색션 와이프: title-section] ============================================================================================
// scrollMagic 라이브러리 사용
var controller = new ScrollMagic.Controller(); //scrollMagic 라이브러리 컨트롤러 생성 -> 한번만 선언하면 된다.

const panelEl = document.querySelector('.panel')

  new ScrollMagic
    .Scene({
      triggerElement: panelEl,// 애니메이션 시작 객체
      triggerHook: 'onLeave', // trigger 위치 -> onLeave는 0과 같은 의미
      duration:"100%" //애니메이션 끝나는 위치 설정
    })
    .setPin(panelEl, {pushFollowers: false})
    .addTo(controller)


// [title-section tilte 나타남 효과(fade-in) : title-section] ============================================================================================
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
// var controller = new ScrollMagic.Controller();

const pEls = document.querySelectorAll('.about-title p')
pEls.forEach(function(pEl){

  new ScrollMagic
      .Scene({
        triggerElement: pEl,// 애니메이션 시작 객체
        triggerHook: .3, // trigger 위치
        duration:90 //애니메이션 끝나는 위치 설정
      })
      .setClassToggle(pEl, 'change-color')
      .addTo(controller)
})

// [profile about-text 나타남 효과(fade-in) : profile-section] ============================================================================================
// scrollMagic 라이브러리 사용
// var controller = new ScrollMagic.Controller();


const textEls = document.querySelectorAll('.about-text .text')
textEls.forEach(function(textEl){

  new ScrollMagic
      .Scene({
        triggerElement: textEl,// 애니메이션 시작 객체
        triggerHook: .7,// trigger 위치
        reverse: false,//애니메이션 한번만실행
      })
      .setClassToggle(textEl,'fade-in')
      .addTo(controller)
})







// [뒤집어지는(flip) animation: tech-skill-section] ============================================================================================
// scrollMagic 라이브러리 사용
// var controller = new ScrollMagic.Controller();

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
  boxEl.addEventListener("mouseenter", function(){
    VanillaTilt.init(document.querySelectorAll(".box.flip"), {
      max: 45, //최대 휘어짐
      speed: 400, // 값이 낮을수록 더 빠르게 변한다.
    });
    
  })
})







// [bg-effect 애니메이션 : toy-project-section] ============================================================================================
// jquery사용
const cardEls = document.querySelectorAll('.project-card')
const spanEls = document.querySelectorAll('.project-card span')

cardEls.forEach(function(cardEl){
  cardEl.addEventListener('mouseenter',function(e){
    // let top1 = window.pageYOffset + cardEl.getBoundingClientRect().top
    // let left1 = window.pageXOffset + cardEl.getBoundingClientRect().left

    x = e.pageX - $(this).offset().left,
    y = e.pageY - $(this).offset().top;

    //jquery 문법
    $(this).find('span').css({top:y, left:x})
  })

  cardEl.addEventListener('mouseout',function(e){
    // let top2 = window.pageYOffset + cardEl.getBoundingClientRect().top
    // let left2 = window.pageXOffset + cardEl.getBoundingClientRect().left

    x = e.pageX - $(this).offset().left,
    y = e.pageY - $(this).offset().top;

    //jquery 문법
    $(this).find('span').css({top:y, left:x})
  })
})
// e는 mouse event 반환값
// pageX, pageY  => 브라우페이지에서 x,y 축 좌표
// .offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시킵니다.
// 위에서 offset 메서드는 이벤트가 걸려 있는 DOM객체를 기준으로 좌표(x,y)를 출력합니다.






// [toy-project-title 애니메이션 : toy-project-section] ============================================================================================
//scrollMagic 라이브러리 사용
// var controller = new ScrollMagic.Controller();

const toyTitleEl = document.querySelector('.toy-project-text-group .toy-project-title')
const toyTextEl = document.querySelector('.toy-project-text-group .toy-project-text')

new ScrollMagic
    .Scene({
      triggerElement:toyTitleEl,
      triggerHook:.6,
    })
    .setClassToggle(toyTitleEl,'active')
    .addTo(controller)



new ScrollMagic
    .Scene({
      triggerElement:toyTextEl,
      triggerHook:.6,
    })
    .setClassToggle(toyTextEl,'active')
    .addTo(controller)









// [나타남(fade-in) 애니메이션 : toy-project-section] ============================================================================================
//scrollMagic 라이브러리 사용
// var controller = new ScrollMagic.Controller();

const imgBxEls = document.querySelectorAll('.toy-project-section .imgBx')
const projectCardEls = document.querySelectorAll('.toy-project-section .project-card')

//imgBxEls 탐색
imgBxEls.forEach(function(imgBxEl){
  //imgBxEl 효과부여
  new ScrollMagic
      .Scene({
        triggerElement: imgBxEl,
        triggerHook: .6,
        reverse: false,
      })
      .setClassToggle(imgBxEl, 'fade-in')
      .addTo(controller)
})

//projectCardEls 탐색
projectCardEls.forEach(function(projectCardEl){
  //projectCardEl 효과 부여
  new ScrollMagic
      .Scene({
        triggerElement:projectCardEl,
        triggerHook: .6,
        reverse:false,
      })
      .setClassToggle(projectCardEl, 'fade-in')
      .addTo(controller)
})



// [to-top 버튼 애니메이션 : to-top] ============================================================================================
//gsap 라이브러리 사용

const toTopEl = document.querySelector('.to-top')

window.addEventListener('scroll',_.throttle(function(){

  //scrollY>=1000 일때 to-top버튼 등장
  if(window.scrollY >= 1000){
    gsap.to(toTopEl,.15,{
      x:0
    })
  }else{
    gsap.to(toTopEl,.15,{
      x:100
    })
  }
}))

//to-top 버튼 클릭시 window창 최상위로 이동
toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo: 0
  })
})
