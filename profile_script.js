// script.js

// Select all flip cards
const flipCards = document.querySelectorAll('.flip-card');

// Add click event listener to each card
flipCards.forEach(card=> {
    card.addEventListener('click', () => {
        //Toggle the 'flipped' class to trigger the flip animation
        card.classList.toggle('flipped');
    });
});