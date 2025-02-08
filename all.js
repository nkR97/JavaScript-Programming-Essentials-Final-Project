const backgrounds = [
    './img/tokyo.jpg',
    './img/kyoto.jpg',
    './img/rio.jpg'
];

const backgroundContainer = document.getElementById('background-container');

// **Fix 1: Load first image immediately**
backgroundContainer.style.backgroundImage = `url('${backgrounds[0]}')`;

// Smooth scroll transition effect
window.addEventListener('scroll', function () {
    // Calculate index based on scroll position divided by 50vh (viewport height)
    let index = Math.min(Math.floor(window.scrollY / (window.innerHeight / 2)), backgrounds.length - 1);

    // Only change the background if the current one is different
    if (backgroundContainer.style.backgroundImage !== `url("${backgrounds[index]}")`) {
        backgroundContainer.classList.add('fade'); // Start fade-out effect

        setTimeout(() => {
            backgroundContainer.style.backgroundImage = `url('${backgrounds[index]}')`;
            backgroundContainer.classList.remove('fade'); // Fade-in effect
        }, 150); // 150ms for faster transition
    }
});
