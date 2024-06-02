document.addEventListener('DOMContentLoaded', function() {
    // Select all lane elements
    const lanes = document.querySelectorAll('.lane');
    
    lanes.forEach(lane => {
        const container = lane.querySelector('.cards-container');
        const btnLeft = lane.querySelector('.nav-button[aria-label="Scroll left"]');
        const btnRight = lane.querySelector('.nav-button[aria-label="Scroll right"]');
        
        // Event listener for left scroll button
        btnLeft.addEventListener('click', () => {
            container.scrollBy({ left: -200, behavior: 'smooth' });
            btnLeft.focus();  // Ensure the button receives focus after click
        });
        
        // Event listener for right scroll button
        btnRight.addEventListener('click', () => {
            container.scrollBy({ left: 200, behavior: 'smooth' });
            btnRight.focus();  // Ensure the button receives focus after click
        });

        // Keyboard navigation for the lane
        lane.addEventListener('keydown', (e) => {
            const focusedElement = document.activeElement;

            // Scroll left on ArrowLeft key press
            if (e.key === 'ArrowLeft') {
                container.scrollBy({ left: -200, behavior: 'smooth' });
                if (focusedElement.classList.contains('card')) {
                    const previousCard = focusedElement.previousElementSibling;
                    if (previousCard) {
                        previousCard.focus();
                    }
                }
            } 
            // Scroll right on ArrowRight key press
            else if (e.key === 'ArrowRight') {
                container.scrollBy({ left: 200, behavior: 'smooth' });
                if (focusedElement.classList.contains('card')) {
                    const nextCard = focusedElement.nextElementSibling;
                    if (nextCard) {
                        nextCard.focus();
                    }
                }
            }
        });
    });
});
