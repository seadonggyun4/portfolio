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
let headerMenuListEls = document.querySelectorAll('.header-menu-list a');


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

// [header-menu  밑줄 이동: header menu] ============================================================================================
let horizontalBar = document.getElementById('horizontal-underline')
let horizontalMenus = document.querySelectorAll('.header-menu-list');

horizontalMenus.forEach( (menu) => 
  menu.addEventListener('click',(e)=> 
    horizontalIndicator(e.currentTarget)
    )
)

function horizontalIndicator(e){
  horizontalBar.style.display = 'block';
  horizontalBar.style.left = e.offsetLeft + 'px';
  horizontalBar.style.width = e.offsetWidth + 'px';
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + 'px';
}




// [색션 와이프: title-section] ============================================================================================
// scrollMagic 라이브러리 사용
var controller = new ScrollMagic.Controller(); //scrollMagic 라이브러리 컨트롤러 생성 -> 한번만 선언하면 된다.

const panelEl = document.querySelector('.panel');

if(window.innerWidth > 768){

  new ScrollMagic
    .Scene({
      triggerElement: panelEl,// 애니메이션 시작 객체
      triggerHook: 'onLeave', // trigger 위치 -> onLeave는 0과 같은 의미
      duration:"100%" //애니메이션 끝나는 위치 설정
    })
    .setPin(panelEl, {pushFollowers: false})
    .addTo(controller)
}


// [title-section tilte 나타남 효과(fade-in) : title-section] ============================================================================================
// gsap 라이브러리 사용
const fadeEls = document.querySelector('.title-section .fade-in');

fadeEls.classList.add('active')

// [profile photo  효과 : profile-section] ============================================================================================
const profile = document.querySelector('.profile')

new ScrollMagic
  .Scene({
    triggerElement: profile,// 애니메이션 시작 객체
    triggerHook: .5, // trigger 위치
    reverse: false,//애니메이션 한번만실행
  })
  .setClassToggle(profile, 'active')
  .addTo(controller)


// [profile about-title 색 변환 효과 : profile-section] ============================================================================================
// scrollMagic 라이브러리 사용
// var controller = new ScrollMagic.Controller();

const pEls = document.querySelectorAll('.about-title p')
pEls.forEach(function(pEl){

  new ScrollMagic
      .Scene({
        triggerElement: pEl,// 애니메이션 시작 객체
        triggerHook: .5, // trigger 위치
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
      .setClassToggle(boxEl,'active') // 클래스 이름 토글
      .addTo(controller);
});


// [틸트 animation: tech-skill-section] ============================================================================================
// 틸트.js 라이브러리 사용
boxEls.forEach(function(boxEl){
  boxEl.addEventListener("mouseenter", function(){
    VanillaTilt.init(document.querySelectorAll(".box.active"), {
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
      triggerHook:.8,
    })
    .setClassToggle(toyTitleEl,'active')
    .addTo(controller)



new ScrollMagic
    .Scene({
      triggerElement:toyTextEl,
      triggerHook:.8,
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
        triggerHook: 1,
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
        triggerHook: 1,
        reverse:false,
      })
      .setClassToggle(projectCardEl, 'fade-in')
      .addTo(controller)
})


// [틸트 for footer-tag: footer] ============================================================================================
// 틸트.js 라이브러리 사용


VanillaTilt.init(document.querySelectorAll(".footer-tag"), {
  max: 20, //최대 휘어짐
  speed: 400, // 값이 낮을수록 더 빠르게 변한다.
});
    





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
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

// [타이틀 색션 Particle효과 : title-section] ============================================================================================
function Particle (){
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;


  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "source-over"; 

  var particles = [];
  var pIndex = 0;
  var x, y, frameId;

  //Particle
  function Particle(x,vx,vy,color,size){
    this.x = x;
    this.y = -canvas.height/2;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.maxlife = 600;
    this.degree = getRandom(0,360);//
    this.size = Math.floor(getRandom(size*0.8,size));//
  };
  Particle.prototype.draw = function(){
    this.degree += 1;
    this.vx *= 0.99;//
    this.vy *= 0.999;//
    this.x += this.vx+Math.cos(this.degree*Math.PI/180);
    this.y += this.vy;
    this.width = this.size;
    this.height = Math.cos(this.degree*Math.PI/45)*this.size;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x+this.x/2, this.y+this.y/2);
    ctx.lineTo(this.x+this.x/2+this.width/2, this.y+this.y/2+this.height);
    ctx.lineTo(this.x+this.x/2+this.width+this.width/2, this.y+this.y/2+this.height);
    ctx.lineTo(this.x+this.x/2+this.width, this.y+this.y/2);
    ctx.closePath();
    ctx.fill();
    this.life++;
    if(this.life >= this.maxlife){
      delete particles[this.id];
    }
  }


  //SetStyles
  var params,params_A,params_B,params_C;
  function SetStyles(){

    params = {
      'colorful_mode': false,
      'amount': 5,
      'bg_color' : "#00155c",
      'vx' : 2,
      'vy' : 4,
      'size' : 10

    };

    params_A = {
      'color': "#5e96ff",
    };

    params_B = {
      'color': "#FFF",
    };
  }
  SetStyles();

  
  function loop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);  
    canvas.style.background = params.bg_color;



    if(frameId % (11-params.amount) == 0){
      if (params.colorful_mode) {
        var hue = Math.floor(getRandom(0,12.99))*30;
        var hsl_color = "hsl(" + hue + ", 80%, 60%)";
        new Particle(canvas.width*Math.random(), getRandom(-params.vx, params.vx), getRandom(params.vy-2, params.vy),hsl_color,params.size);
      } else{
        var x1 = canvas.width*Math.random()+canvas.width/2*Math.random();
        var x2 = canvas.width*Math.random()-canvas.width/2*Math.random();
        new Particle(x1,-1 *getRandom(params.vx-2, params.vx),  getRandom(params.vy-2, params.vy),params_A.color,params.size);
        new Particle(x2,getRandom(params.vx-2, params.vx),  getRandom(params.vy-2, params.vy),params_B.color,params.size);
      }

    }

    for(var i in particles){
      particles[i].draw();
    }
    frameId = requestAnimationFrame(loop);
    if(frameId % 2 == 0) { return; }
    // stats.update();
  }
  loop();


  window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2;
    y = canvas.height / 2;
  });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}
Particle()

// [타이틀 색션 click 콘페티 효과 : title-section] ============================================================================================
/* Random Id generator for giving confetti elements unique IDs */
const randomId = function(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * 
charactersLength)));
}
return result.join('');
}

/* Short function to create confetti at x, y with confettiItems number of items */
const createConfetti = function(x, y, confettiItems) {
  let createElement = document.createElement('div');
  createElement.classList.add('confetti');
  let makeId = randomId(10);
  createElement.setAttribute('data-id', makeId);
  let confettiHTML = '';
  let colors = [ '#5e96ff', '#FAFAFA', '#5e96ff', '#232323', '#00155c' ]
  
  for(var i = 0; i < confettiItems; ++i) {
      let color = Math.floor(Math.random() * (colors.length));
      confettiHTML += `<div class="confetti-item" style="background-color: ${colors[color]};" data-angle="${Math.random()}" data-speed="${Math.random()}"></div>`;
      confettiHTML += `<div class="confetti-item reverse" style="background-color: ${colors[color]};" data-angle="${Math.random()}" data-speed="${Math.random()}"></div>`;
  }
  
  createElement.style.position = `fixed`;
  createElement.style.top = `${y}px`;
  createElement.style.left = `${x}px`;
  createElement.innerHTML = confettiHTML;
  document.body.appendChild(createElement);
  
  let gravity =  50; // Fjolt is a high gravity planet
  let maxSpeed = 105000; // Pixels * 1000
  let minSpeed = 65000; // Pixels * 1000
  let t = 0; // Time starts at 0
  let maxAngle = 1500; // Radians * 1000
  let minAngle = 400; // Radians * 1000
  let opacity = 1;
  let rotateAngle = 0;

  let interval = setInterval(function() {
      document.querySelectorAll(`[data-id="${makeId}"] .confetti-item`).forEach(function(item) {
          let modifierX = 1;
          let modifierY = 1;
          if(item.classList.contains('reverse')) {
              modifierX = -1;
          }
          item.style.opacity = opacity;
          let randomNumber = parseFloat(item.getAttribute('data-angle'));
          let otherRandom = parseFloat(item.getAttribute('data-speed'));
          let newRotateAngle = randomNumber * rotateAngle;
          let angle = (randomNumber * (maxAngle - minAngle) + minAngle) / 1000;
          let speed = (randomNumber * (maxSpeed - minSpeed) + minSpeed) / 1000;
          let realT = t * (parseFloat(item.getAttribute('data-angle')));
          let x = speed * t * Math.cos(angle) + (50 * otherRandom * t);
          let y = speed * t * Math.sin(angle) - (0.5 * gravity * Math.pow(t, 2))  + (50 * otherRandom * t);
          item.style.transform = `translateX(${x * modifierX}px) translateY(${y * -1 * modifierY}px) rotateY(${newRotateAngle}deg) scale(${1})`;
      })
      t += 0.1;
      rotateAngle += 3;
      opacity -= 0.02;
      if(t >= 6) {
          t = 0.1;
          if(document.querySelector(`[data-id="${makeId}"]`) !== null) {
              document.querySelector(`[data-id="${makeId}"]`).remove();
          }
          clearInterval(interval);
      }
  }, 33.33);
}

document.addEventListener('DOMContentLoaded', function(e) {
document.querySelector('#wrap').addEventListener('pointerdown', function(e) {
  createConfetti(e.pageX, e.pageY, 20);
});
});

// [SVG 애니메이션 효과 : SVG container] ============================================================================================
function svgEffect(){
  const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

	if(isAnimationOk) {
		setupAnimations();
	}

	function setupAnimations() {

		gsap.registerPlugin(MotionPathPlugin);

		// gsap.from(".stroke__wide", {
		// 	drawSVG: "0%",
		// 	delay: 1,
		// 	scrollTrigger: {
		// 		trigger: "main",
		// 		start: "-10% top",
		// 		end: "bottom+=30% bottom",
		// 		scrub: 1
		// 	}
		// });

		// gsap.from(".stroke__mask", {
		// 	drawSVG: "0%",
		// 	scrollTrigger: {
		// 		trigger: "#page",
		// 		start: "-7% top",
		// 		end: "bottom+=20% bottom",
		// 		scrub: 1
		// 	}
		// });

		gsap.from(".stroke__narrow", {
			"--dashOffset": 2000,
			scrollTrigger: {
				trigger: "main",
				start: "-10% top",
				end: "bottom+=30% bottom",
				scrub: 2
			}
		});

		gsap.set(".stroke__blob", {transformOrigin: "50% 100%"});
		gsap.from(".stroke__blob", {
			scale: 0.85,
			y: 3000,
			x: -500,
			rotate: 10,
			delay: 1,
			scrollTrigger: {
				trigger: "main",
				start: "center top",
				end: "bottom top",
				toggleActions: "restart pause resume reset",
				scrub: 1
			}
		});
	}
}
svgEffect()