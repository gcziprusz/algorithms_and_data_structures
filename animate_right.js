/*This week, we’ll be solving a coding problem that was given in an actual Facebook phone screen interview. Please
comment below with your solutions! And be sure 
to look at the Facebook Interview Questions course on Coderbyte for more Facebook related challenges!

Write a function that takes a DOM element and smoothly animates it from its current position to distance pixels 
to the right over duration milliseconds. Implement the following function, animate(el, milliseconds, distance)

For example, animate(document.querySelector('#myDiv'), 2000, 100) would move the element with id myDiv 100px to 
the right over 2 seconds. Implement this function without using jQuery or any other third-party libraries.*/

// var el = document.getElementById("myDiv");

// function animate(el, totalTime, distance, position) {
//     if (position >= distance) return;
//     startTime = performance.now();

//     var expired = (new Date() - startTime) / 1000;
//     position = expired * distance / totalTime * 1000; 

//     el.style.left = position + 'px';

//     requestAnimationFrame(function() {
//         animate(el, totalTime, distance, position);
//     });
// }

// animate(el, 2000, 300, 50);

function animate(el,duration,distance){
  let start;
  let speed = distance / duration;

  function move(ctime){
    if (!start) start = ctime; // will be set to the first tick 
     // figure out timeElapsed , break out
    let elapsed = ctime - start;
    if (elapsed > duration) return;
    el.style.transform = `translateX(${Math.min(elapsed*speed,distance)}px)`;
    window.requestAnimationFrame(move);
  }
  window.requestAnimationFrame(move);
}

animate(document.getElementById("mydiv"), 2000, 100);
// HTML
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JS Bin</title>
//   <style>
//     #foo {
//       position: relative;
//       cursor: pointer;
//     }
//   </style>
// </head>
// <body>
//   <div id="foo" style="border: 1px solid red;width: 100px;height:100px;">foo boo</div>
// </body>
// </html>

function animate({timing, draw, duration}) {

  let start = performance.now();
  
  requestAnimationFrame(function animate(time) {
    
    let timePassed = time - start;
    let progress = timing(timePassed);

    draw(progress); // draw it

    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }

  });
}
// Animate on click
let el = document.getElementById("foo");

el.onclick = function() {
  animate({
    duration: 2000,
    timing: function(timeFraction) {
      return timeFraction/10;
    },
    draw: function(l) {
      el.style.left = l + 'px';
    }
  });
};
  
