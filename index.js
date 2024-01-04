const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})

const btn = document.querySelector("#btn"); 
btn.addEventListener("click", result); 

const par = document.querySelector("#showResult"); 

function result(e) {
e.preventDefault();

let points = 0;

if (document.querySelector("#answerOne").checked) {
    points++   
}

if (document.querySelector("#answerTwo").checked) {
    points++
}

if (document.querySelector("#answerThree").checked) {
    points++
}

if (document.querySelector("#answerFour").checked) {
    points++
}

if (document.querySelector("#answerFive").checked) {
    points++
}

if (document.querySelector("#answerSix").checked) {
    points++   
}

if (document.querySelector("#answerSeven").checked) {
    points++
}

if (document.querySelector("#answerEight").checked) {
    points++
}

if (document.querySelector("#answerNine").checked) {
    points++
}

if (document.querySelector("#answerTen").checked) {
    points++
}

par.textContent = "Your points: " + points; 
}

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




