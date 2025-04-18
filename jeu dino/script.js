const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');
let isJumping = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let jumpHeight = 0;

    const jumpInterval = setInterval(() => {
        if (jumpHeight < 50) {
            jumpHeight += 5;
            dino.style.bottom = `${jumpHeight}px`;
        } else {
            clearInterval(jumpInterval);
            fall();
        }
    }, 20);
}

function fall() {
    let fallHeight = 50;
    
    const fallInterval = setInterval(() => {
        if (fallHeight > 0) {
            fallHeight -= 5;
            dino.style.bottom = `${fallHeight}px`;
        } else {
            clearInterval(fallInterval);
            isJumping = false;
        }
    }, 20);
}
