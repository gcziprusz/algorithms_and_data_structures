// If you have multiple users making updates to the same resource, 
// how would you design a way to make sure the user is updating the 
// most up to date version? 
// For example, multiple people editing the same file document.



// #1 ----------------------------------------
// Write a JavaScript function which, given a piece of data containing a url to an image, 
// a label and an index to its position, creates a single row of this table. Also write the CSS for it.
// type data = {
//     image_url: string;
//     label: string;
//     index:number;
// }
function makeImg(url, label){
    var img = document.createElement('img');
    img.src = url;
    img.alt = label;
    return img;
}
function insertRow(id, {image_url,label,index}){
    let table = document.getElementById(id);

    // defensive stuff here 
    let newRow = table.insertRow(index)
    let newLabel = newRow.insertCell(-1)
    let newImage = newRow.insertCell(-1)

    newLabel.appendChild(label)
    newImage.appendChild(makeImg(image_url,label))
}
insertRow("#table" , {image_url:'http://facebook.profile.pic.png',label:'sunset picture',index:3})



// #2 ----------------------------------------
// The user has selected a section of text that may span across multiple paragraphs. There may be images or 
// other non-text nodes in the middle. We want to get the contents of that text.
<p id="p">Example: <i>italic</i> and <b>bold</b></p>
<script>
    document.onselectionchange = function() {
        let selection = document.getSelection();
        let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
    };

  let range = new Range();

  range.setStart(p.firstChild, 2);
  range.setEnd(p.querySelector('b').firstChild, 3);

  console.log(range); // ample: italic and bol

  // use this range for selection (explained later)
  window.getSelection().addRange(range);
</script>



// #3 ----------------------------------------
// Given references to two text nodes (not elements!), A and B, return the string of text in between A and B, inclusive.
// A is guaranteed to be before B in document order.

const findCorrespondingNode = (A, B,) => {
    const aWalker = document.createTreeWalker( document.body,A, NodeFilter.SHOW_ALL);
    let str = [aWalker.currentNode.textContent];
    while (A !== B) {
      str += [aWalker.nextNode().textContent, rootBWalker.nextNode()];
    }
    return str.push(B.textContent).join('');
  }


// #4 ----------------------------------------
// There is a button on a page with text inside that says 'Clicked {#} times' with the number changing each time the button has been clicked. Follow up: Now each time the button is clicked, spawn a new button with its own counter, and the same functionality.

<div id="form">
    <button class="counter" data-clicked="0">Clicked {0} times</button> 
</div>

function countClicksHandler(e) {
    if (e.target.matches('.counter')) {
        update(e.target, parseInt(e.target.dataset.clicked,10)+1)
    }
    const copy = e.target.cloneNode(true);
    update(copy,0)
    form.appendChild(copy);
}
function update(el, val){
   el.dataset.clicked = `${val}`;
   el.innerText = el.innerText.replace(/{(.*?)}/,`{${val}}`)
}
const form = document.querySelector('#form');
form.addEventListener('click', countClicksHandler);


// #5 ----------------------------------------
// Create a basic Car object with functions accelerate and deccelerate. 
// Now create two cars with separate starting speeds and perform this set of speed changes on them.

var Car = function(startingSpeed) {
    var speed = startingSpeed;

    this.accelerate = function(change) {
        speed += change;
    };
    this.decelerate = function(change=5) {
        speed -= change;
    };
    this.getSpeed = function() {
        return speed;
    };
};

var myCar = new Car(35);
console.log(myCar.getSpeed());
myCar.accelerate(5);
console.log(myCar.getSpeed());
myCar.decelerate();
console.log(myCar.getSpeed());

console.log('fast car');

var fastCar = new Car(235);
console.log(fastCar.getSpeed());
fastCar.accelerate(100);
console.log(fastCar.getSpeed());
fastCar.decelerate(300);
console.log(fastCar.getSpeed());


// What is the difference between MyObject.foo and MyObject.prototype.foo?

// A series of CSS selector questions that built off the last 
// (like what does .my-div select? Okay now what does .my-div p select? etc)

// Tell me about a project you worked on?

// Why would a website minify their source code?

// What code would you use to make a front end website with JavaScript and jQuery functionality?




