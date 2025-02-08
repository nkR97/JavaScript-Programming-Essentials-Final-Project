const backgrounds = [
    './img/tokyo.jpg',  // for 0-49vh
    './img/kyoto.jpg',  // for 50-99vh
    './img/rio.jpg'     // for 100-150vh
];

const backgroundContainer = document.getElementById('background-container');

// **Fix 1: Load first image immediately**
backgroundContainer.style.backgroundImage = `url('${backgrounds[0]}')`;

// Smooth scroll transition effect
window.addEventListener('scroll', function () {
    // Calculate the scroll position relative to the page height
    let scrollPosition = window.scrollY;
    let index = 0;

    // Set the image based on scroll position
    if (scrollPosition >= window.innerHeight * 0.5 && scrollPosition < window.innerHeight * 1.0) {
        index = 1; // Show Kyoto from 50-99vh
    } else if (scrollPosition >= window.innerHeight * 1.0) {
        index = 2; // Show Rio from 100-150vh
    }

    // Only change the background if the current one is different
    if (backgroundContainer.style.backgroundImage !== `url("${backgrounds[index]}")`) {
        backgroundContainer.classList.add('fade'); // Start fade-out effect

        setTimeout(() => {
            backgroundContainer.style.backgroundImage = `url('${backgrounds[index]}')`;
            backgroundContainer.classList.remove('fade'); // Fade-in effect
        }, 150); // 150ms for faster transition
    }
});
