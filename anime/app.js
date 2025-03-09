document.addEventListener('DOMContentLoaded', () => {
    // Animate the heart logo
    const heartLogo = document.querySelector('.heart-logo');
    
    // Animate the heading with a typing effect
    const heading = document.querySelector('h1');
    const headingText = heading.textContent;
    heading.innerHTML = '';
    
    // Create wrapper for each character
    [...headingText].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        heading.appendChild(span);
    });
    
    // Animate each character
    anime({
        targets: 'h1 span',
        opacity: 1,
        duration: 50,
        easing: 'easeInOutQuad',
        delay: anime.stagger(50)
    });
    
    // Animate the tagline
    anime({
        targets: '.tagline',
        opacity: [0, 0.8],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: 1000
    });
    
    // Animate the input container
    anime({
        targets: '.input-container',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: 1200
    });
    
    // Animate the suggestion chips
    anime({
        targets: '.chip',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: anime.stagger(100, {start: 1400})
    });
    
    // Add hover effect to chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('mouseenter', () => {
            anime({
                targets: chip,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        chip.addEventListener('mouseleave', () => {
            anime({
                targets: chip,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Add focus effect to input
    const input = document.querySelector('input');
    input.addEventListener('focus', () => {
        anime({
            targets: '.input-container',
            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    
    input.addEventListener('blur', () => {
        anime({
            targets: '.input-container',
            boxShadow: '0 0 0 0px rgba(255, 255, 255, 0)',
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            anime({
                targets: button,
                scale: [1, 0.95, 1],
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Create a gradient animation for the heart logo
    anime({
        targets: '.heart-logo, .heart-logo:before, .heart-logo:after',
        background: [
            'linear-gradient(135deg, #ff5f6d, #ffc371, #2ecc71)',
            'linear-gradient(135deg, #2ecc71, #ff5f6d, #ffc371)',
            'linear-gradient(135deg, #ffc371, #2ecc71, #ff5f6d)',
            'linear-gradient(135deg, #ff5f6d, #ffc371, #2ecc71)'
        ],
        duration: 10000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
    });
    
    // Lightbulb animation
    const lightbulb = document.querySelector('.lightbulb');
    const particlesContainer = document.querySelector('.particles-container');
    const lightbulbContainer = document.querySelector('.lightbulb-container');
    
    // Create particles for explosion
    function createParticles() {
        // Clear existing particles
        particlesContainer.innerHTML = '';
        
        // Create new particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random colors for particles
            const colors = ['#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#ffffff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = randomColor;
            
            // Random size
            const size = Math.random() * 8 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position at center
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%)';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Animate lightbulb explosion
    function explodeLightbulb() {
        // Toggle active state
        lightbulb.classList.add('active');
        
        // Create particles
        createParticles();
        
        // Animate bulb flash and disappear
        anime.timeline()
            .add({
                targets: '.bulb',
                backgroundColor: 'rgba(255, 255, 100, 0.9)',
                boxShadow: '0 0 40px rgba(255, 255, 100, 0.8)',
                scale: 1.2,
                duration: 300,
                easing: 'easeOutQuad'
            })
            .add({
                targets: '.bulb',
                opacity: 0,
                scale: 0.8,
                duration: 300,
                easing: 'easeOutQuad'
            }, '+=100')
            .add({
                targets: '.base',
                opacity: 0,
                translateY: 10,
                duration: 200,
                easing: 'easeOutQuad'
            }, '-=200')
            .add({
                targets: '.filament-left, .filament-right',
                opacity: 0,
                scale: 0.5,
                duration: 200,
                easing: 'easeOutQuad'
            }, '-=300');
        
        // Animate particles explosion
        anime({
            targets: '.particle',
            translateX: () => anime.random(-100, 100),
            translateY: () => anime.random(-100, 100),
            scale: [0, () => anime.random(0.5, 1.5)],
            opacity: [0, 1, 0],
            easing: 'easeOutExpo',
            duration: () => anime.random(1000, 1500),
            delay: anime.stagger(10),
            complete: function() {
                // Reset lightbulb after animation completes
                setTimeout(() => {
                    resetLightbulb();
                }, 1000);
            }
        });
    }
    
    // Reset lightbulb
    function resetLightbulb() {
        lightbulb.classList.remove('active');
        
        anime({
            targets: ['.bulb', '.base', '.filament-left', '.filament-right'],
            opacity: 1,
            scale: 1,
            translateY: 0,
            duration: 500,
            easing: 'easeOutQuad'
        });
    }
    
    // Add click event to lightbulb
    lightbulbContainer.addEventListener('click', explodeLightbulb);
    
    // Initial animation for lightbulb
    anime({
        targets: '.lightbulb',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad',
        delay: 500
    });
    
    // Subtle floating animation for lightbulb
    anime({
        targets: '.lightbulb',
        translateY: [0, -5, 0],
        duration: 3000,
        easing: 'easeInOutQuad',
        loop: true
    });
    
    // Products section animations
    
    // Animate section title and subtitle
    anime({
        targets: ['.section-title', '.section-subtitle'],
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: anime.stagger(200)
    });
    
    // Animate product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the card when it comes into view
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
                
                // Animate the icon
                anime({
                    targets: entry.target.querySelector('.product-icon'),
                    scale: [0, 1],
                    rotate: [45, 0],
                    opacity: [0, 1],
                    duration: 600,
                    delay: 300,
                    easing: 'easeOutBack'
                });
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each product card
    productCards.forEach(card => {
        // Set initial state
        card.style.opacity = '0';
        observer.observe(card);
    });
    
    // Add hover effect to product cards
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card.querySelector('.product-icon'),
                scale: 1.1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card.querySelector('.product-icon'),
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}); 