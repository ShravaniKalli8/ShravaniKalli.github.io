
const container = document.querySelector('.animation-container');

// Function to create moving dots
function createDots() {
    for (let i = 0; i < 10; i++) { // Adjust number of dots here
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Randomize size
        const size = Math.random() * 20 + 5; // Size between 5px and 25px
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        // Randomize starting position
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.top = `${Math.random() * 100}vh`;

        // Randomize animation delay and duration
        dot.style.animationDelay = `${Math.random() * 2}s`;
        dot.style.animationDuration = `${3 + Math.random()}s`;

        container.appendChild(dot);

        // Remove dot after animation
        dot.addEventListener('animationend', () => {
            dot.remove();
        });
    }
}

// Continuously create dots
setInterval(createDots, 3000); // Creates dots every 3 seconds
