const liquidCards = document.querySelectorAll('.liquid-card');
        let currentlyFlipped = null;

        // Handle card clicks
        liquidCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                const cardId = this.getAttribute('data-card');
                
                // If this card is already flipped, close it
                if (currentlyFlipped === cardId) {
                    this.classList.remove('flipped');
                    currentlyFlipped = null;
                    return;
                }
                
                // Close any currently flipped card
                if (currentlyFlipped) {
                    const previousCard = document.querySelector(`[data-card="${currentlyFlipped}"]`);
                    if (previousCard) {
                        previousCard.classList.remove('flipped');
                    }
                }
                
                // Flip this card
                this.classList.add('flipped');
                currentlyFlipped = cardId;
            });

            // Prevent context menu on long press (mobile)
            card.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });

            // Handle touch events to prevent scrolling interference
            card.addEventListener('touchstart', function(e) {
                e.stopPropagation();
            });

            card.addEventListener('touchend', function(e) {
                e.stopPropagation();
            });
        });

        // Close all cards when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.liquid-card')) {
                if (currentlyFlipped) {
                    const flippedCard = document.querySelector(`[data-card="${currentlyFlipped}"]`);
                    if (flippedCard) {
                        flippedCard.classList.remove('flipped');
                    }
                    currentlyFlipped = null;
                }
            }
        });