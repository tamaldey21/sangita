// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts background
    createFloatingHearts();
    
    // Set up the special button
    const specialButton = document.getElementById('specialButton');
    const popup = document.getElementById('lovePopup');
    const closeBtn = document.querySelector('.close');
    
    // Set up the "Continue Reading" button for the love letter
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenLetterContent = document.getElementById('hiddenLetterContent');
    
    // Show popup when button is clicked
    specialButton.addEventListener('click', function() {
        popup.style.display = 'block';
        // Add a little animation effect
        this.textContent = "You're Amazing! ❤️";
        setTimeout(() => {
            this.textContent = "Click for a Special Message";
        }, 2000);
    });
    
    // Close popup when X is clicked
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
    
    // Show more content when button is clicked
    showMoreBtn.addEventListener('click', function() {
        // Reveal hidden letter content
        hiddenLetterContent.classList.add('show');
        
        // Change button text and style
        this.textContent = "Thank You for Reading My Love Letter! ❤️";
        this.style.background = "linear-gradient(to right, #2196f3, #f48fb1)";
        
        // Add animation effect
        this.style.transform = "scale(1.05)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300);
    });
    
    // Function to create floating hearts in the background
    function createFloatingHearts() {
        const container = document.querySelector('.floating-hearts');
        const heartCount = 30;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            
            // Random position
            heart.style.left = Math.random() * 100 + 'vw';
            
            // Random size
            const size = Math.random() * 20 + 10;
            heart.style.fontSize = size + 'px';
            
            // Random animation duration
            const duration = Math.random() * 10 + 5;
            heart.style.animationDuration = duration + 's';
            
            // Random animation delay
            const delay = Math.random() * 5;
            heart.style.animationDelay = delay + 's';
            
            // Random color (blue, pink, and white tones)
            const colors = ['#2196f3', '#bbdefb', '#f48fb1', '#fce4ec', '#e3f2fd'];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            container.appendChild(heart);
        }
    }
    
    // Add subtle animations to sections when they come into view
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});