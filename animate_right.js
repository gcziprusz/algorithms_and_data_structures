

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
  
