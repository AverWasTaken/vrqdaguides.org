// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Typing effect
const words = [
    'a valorant coach.',
    'a strategy expert.',
    'an aim practitioner.',
    'experienced in esports.',
    'a live comp player.',
    'a radiant player'
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];
    if (isDeleting) {
        document.getElementById("typing-text").textContent = currentWord.substring(0, j-1);
        j--;
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
        }
    } else {
        document.getElementById("typing-text").textContent = currentWord.substring(0, j+1);
        j++;
        if (j == currentWord.length) {
            isDeleting = true;
            setTimeout(() => typeEffect(), 1500); // Pause at the end of the word
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 150);
}

// Start typing effect
typeEffect();

// Scroll animations
gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#home .container > *:not(.cta)", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from("#home .cta", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6, // Adjust this delay as needed
    ease: "power3.out"
});

gsap.from(".feature-card", {
    scrollTrigger: {
        trigger: "#features",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from("#about .container > *", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
