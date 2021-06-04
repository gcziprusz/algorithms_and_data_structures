// DEMO https://codepen.io/gcziprusz/pen/dyvmBpL
// CSS & DOM Hand Clock
// Implement a live hand-clock using only HTML, CSS and JavaScript. If time allows, make sure the various clock hands are easily distinguishable.

// CSS & DOM Hand Clock
// Layout
// We’ll use nested div elements to represent the clock, it’s face, and the various hands:

<div class="clock">
    <div class="clock-face">
        <div class="hand hours"></div>
        <div class="hand minutes"></div>
        <div class="hand seconds"></div>
    </div>
</div>
// Style
// We’ll design the clock itself to have a round, solid border:

    .clock {
        width:20rem;
        height:20rem;
        border-style: solid;
        border-radius:50%;
    }
// Next, the clock’s face should fill it’s parent container. We’ll also set the transform to adjust for the divs’ size:

    .clock-face {
        width: 100%;
        height: 100%;
        transform: translateY(0px);
    }
// The hands themselves should be centered and default to 12, so we’ll and the dimensions, and transform the origin and rotation to match.

    .hand {
        position: absolute;
        top:50%;
        width:50%;
        height:6px;
        transform-origin: 100%;
        transform: rotate(90deg);
    }
// Last, to distinguish between the hands, we’ll present them at different lengths using a gradient to the transparent color rgba(255,0,0,0).

    .hours {
        background: linear-gradient(to right,  rgba(255,0,0,0) 0%, rgba(255,0,0,0) 30%,  black 30%,  black 100%);
    }
    .minutes {
        background: linear-gradient(to right,  rgba(255,0,0,0) 0%, rgba(255,0,0,0) 10%,  black 10%,  black 100%);
    }
    .seconds {
        background: linear-gradient(to right,  rgba(255,0,0,0) 0%, rgba(255,0,0,0) 10%,  black 10%,  black 100%);
        height:3px;
    }
// Logic
// We’ll need to update the view every second for the clock to be live. That means we need to:

// Calculate the required rotation for each hand according to the current time
// Manipulate the DOM to reflect the expected rotation

    // Retrieve the DOM elements that'll be updated every second
    const secondsElement = document.querySelector('.seconds');
    const minutesElement = document.querySelector('.minutes');
    const hoursElement = document.querySelector('.hours');
    
    function setRotation(element, degrees) {
        // Set the rotation and add 90 to default from 12am
        element.style.transform = `rotate(${degrees+90}deg)`;
    }

    function updateClockHandsToCurrentTime() {
        // get the current time
        const now = new Date();

        // break it down to hours, minutes and seconds
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        // calc the rotation of each clock hand in degrees
        const secondsRotationDegrees = (seconds / 60) * 360;
        const minutesRotationDegrees = (minutes / 60) * 360 + (seconds/60)*6;
        const hoursRotationDegrees = (hours / 12) * 360 + (minutes/60)*30;

        setRotation(secondsElement, secondsRotationDegrees);
        setRotation(minutesElement, minutesRotationDegrees);
        setRotation(hoursElement, hoursRotationDegrees);
    }

    // Set the initial clock state, and update it every second
    setInterval(updateClockHandsToCurrentTime, 1000);
    updateClockHandsToCurrentTime();
    
