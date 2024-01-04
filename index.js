

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})

let isRotated = false;

document.querySelector('#myButton').addEventListener('click', () => {
    isRotated = !isRotated;
    gsap.to('#myButton', {
      duration: 0.5,
      rotate: isRotated ? 360 : 0,
      ease: 'power2.out',
    });
  });

  gsap.to('.friends', { y: -20, duration: 1, ease: 'bounce.out', repeat: -1, yoyo: true });
 
  gsap.from('h1', {
    scale: 0,
    opacity: 0, 
    duration: 1.5,
    ease: 'power4.out', 
    onComplete: () => {
        gsap.to('.h1', {
            scale: 1, 
            opacity: 1, 
            delay: 4,
            duration: 0.5, 
            ease: 'power2.in' 
        });
    }
});




