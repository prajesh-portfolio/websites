//to, from and set tween
//gsap.to("#header",{y:20});
//gsap.from("#header",{x:20});
//gsap.set("#header",{x:20});


// Callback methods 
const start = () => {
    console.log("start");
}
const complete = () => {
    console.log("complete");
}
const update = () => {
    console.log("update");
}

var tl = gsap.timeline({
    duration: 1,
    paused: true,
    onStart: start,
    onComplete: complete,
    onUpdate: update
});
tl
    .from('#header > *', {
        y: 20,
        opacity: 0,
        stagger: 0.3,
    })
    .from('.list li', {
        ease: "power3.out",
        y: 20,
        stagger: 0.3,
        opacity: 0
    });

// Controls 

//core js:
// var play = document.querySelector("#btnPlay");
// var pause = document.querySelector("#btnPause");
// var resume = document.querySelector("#btnResume");
// var reverse = document.querySelector("#btnReverse");
// var speedup = document.querySelector("#btnSpeedUp");
// var slowdown = document.querySelector("#btnSlowDown");
// var seek = document.querySelector("#btnSeek");
// var prog = document.querySelector("#btnProgress");
// var restart = document.querySelector("#btnRestart");

// play.addEventListener("click", function(){
// 	tl.play();
// });
// pause.addEventListener("click", function(){
// 	tl.pause();
// });
// resume.addEventListener("click", function(){
// 	tl.resume();
// });
// reverse.addEventListener("click", function(){
// 	tl.reverse();
// });
// speedup.addEventListener("click", function(){
// 	tl.timeScale(2);
// });
// slowdown.addEventListener("click", function(){
// 	tl.timeScale(0.5);
// });
// seek.addEventListener("click", function(){
// 	tl.seek(1.5);
// });
// prog.addEventListener("click", function(){
// 	tl.progress(0.5);
// });
// restart.addEventListener("click", function(){
// 	tl.restart();
// });



// with jquery:
$(document).ready(function() {
    $("#btnPlay").click(function() {
        tl.play();
    });
    $("#btnPause").click(function() {
        tl.pause();
    });
    $("#btnResume").click(function() {
        tl.resume();
    });
    $("#btnReverse").click(function() {
        tl.reverse();
    });
    $("#btnSpeedUp").click(function() {
        tl.timeScale(2);
    });
    $("#btnSlowDown").click(function() {
        tl.timeScale(0.5);
    });
    $("#btnSeek").click(function() {
        tl.seek(1.5);
    });
    $("#btnProgress").click(function() {
        tl.progress(0.5);
    });
    $("#btnRestart").click(function() {
        tl.restart();
    });

});

     
// ScrollTrigger
gsap.to(".box",{backgroundPositionY: "100%",
	scrollTrigger: {
        trigger: '.box',
        start: 'top bottom',
        scrub: true,
        end: "bottom top",
        markers:true
    }
    });
gsap.from(".box.main > *", {
    opacity: 0,
    y: 400,
    scrollTrigger: {
        trigger: '.box.main',
        start: 'top center-=20%',
        scrub: true,
        end: "bottom bottom",
    }
});
gsap.from(".box.one > *", {
    opacity: 0,
    y: 400,
    scrollTrigger: {
        trigger: '.box.one',
        start: 'top center-=20%',
        scrub: true,
        end: "bottom bottom",
    }
});
gsap.from(".box.two > *", {
    opacity: 0,
    y: 400,
    scrollTrigger: {
        trigger: '.box.two',
        start: 'top center-=20%',
        scrub: true,
        end: "bottom bottom",
    }
});