const backgrounds = [
    './img/tokyo.jpg',
    './img/kyoto.jpg',
    './img/rio.jpg'
];
const texts = [{h1:'Who is WanderWise?' , p:'WanderWise is your personal travel assistant, helping you discover the perfect destinations tailored to your unique style.'},
    {h1:'Why WanderWise?' , p:'We offer personalized travel recommendations that make exploring the world easy, exciting, and unforgettable.' },
    {h1:'What Makes WanderWise Different?' , p:'With smart algorithms and insider tips, WanderWise finds hidden gems and unique getaways that match your exact travel vibe.'}];

const backgroundContainer = document.getElementById('background-container');
const h1Text = document.querySelector('.describe h1');
const pText = document.querySelector('.describe p');

// **Fix 1: Load first image immediately**
backgroundContainer.style.backgroundImage = `url('${backgrounds[0]}')`;
h1Text.textContent = texts[0].h1;
pText.textContent = texts[0].p;

// Smooth scroll transition effect
window.addEventListener('scroll', function () {
    // Calculate index based on scroll position divided by 50vh (viewport height)
    let index = Math.min(Math.floor(window.scrollY / (window.innerHeight / 2)), backgrounds.length - 1);

    // Only change the background if the current one is different
    if (backgroundContainer.style.backgroundImage !== `url("${backgrounds[index]}")`) {
        backgroundContainer.classList.add('fade'); // Start fade-out effect

        setTimeout(() => {
            backgroundContainer.style.backgroundImage = `url('${backgrounds[index]}')`;
            h1Text.textContent = texts[index].h1;
            pText.textContent = texts[index].p;
            backgroundContainer.classList.remove('fade'); // Fade-in effect
        }, 150); // 150ms for faster transition
    }
});
