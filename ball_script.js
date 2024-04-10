const ball = document.querySelector('.ball');
let velocity = 0; // Initial velocity
let position = 25; // Initial position
const gravity = 0.03; // Acceleration due to gravity
const damping = 0.8; // Damping factor for rebound
let xposition=0;    //xtranslate
let xvelocity=0.2;
function update() {
    velocity += gravity; // Apply gravity
    position -= velocity; // Update position
    xposition+=xvelocity
    if (position <= 0) {
        velocity = -velocity * damping; // Reverse velocity and dampen
        position = 0; // Set position to ground level
    }

    ball.style.bottom = position + 'vh'; // Update ball position
    ball.style.transform=`translateX(${xposition}vw)`
    if(xposition>=.99*50){
        velocity=0;
        position=25;
        xposition=0;
    }
    requestAnimationFrame(update); // Loop animation
}

// update(); // Start animation
requestAnimationFrame(update);
// setInterval(update,10)