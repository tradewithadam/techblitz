// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = menuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// Scroll animations for features and journey items
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnEntry = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnEntry, observerOptions);

// Initialize animation properties
document.addEventListener('DOMContentLoaded', () => {
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(card);
    });
    
    // Journey items animation - works with new structure
    const journeyItems = document.querySelectorAll('.journey-container .journey-item');
    journeyItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
        
        observer.observe(item);
    });
    
    // Contact options animation
    const contactOptions = document.querySelectorAll('.contact-option');
    contactOptions.forEach((option, index) => {
        option.style.opacity = '0';
        option.style.transform = 'translateY(20px)';
        option.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        option.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(option);
    });
    
    // Add class to trigger animations
    document.querySelectorAll('.animated').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
});

// Add animated class on scroll
document.addEventListener('scroll', () => {
    document.querySelectorAll('.feature-card, .journey-container .journey-item, .contact-option').forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.8) {
            el.classList.add('animated');
            
            // Ensure all properties are properly set when the animated class is added
            if (el.classList.contains('animated')) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            }
        }
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.05}px`;
    }
});

// Add glowing effect to CTA button
const ctaButton = document.querySelector('.cta .btn');
if (ctaButton) {
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.boxShadow = '0 0 20px rgba(0, 196, 255, 0.7)';
    });
    
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.boxShadow = '';
    });
}

// Typewriter effect for hero headline
const heroHeadline = document.querySelector('.hero-content h1');
if (heroHeadline && window.innerWidth > 768) {
    const originalText = heroHeadline.innerText;
    heroHeadline.innerText = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroHeadline.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Add hover effect to navigation items
const navItems = document.querySelectorAll('nav a');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        if (!item.classList.contains('active')) {
            item.style.color = 'var(--primary-color)';
        }
    });
    
    item.addEventListener('mouseout', () => {
        if (!item.classList.contains('active')) {
            item.style.color = '';
        }
    });
});

// Logo hover effect
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.05)';
        logo.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.transform = '';
    });
}

// Preload logo image
const preloadLogo = new Image();
preloadLogo.src = 'techblitz-logo.png';

// Add page transition effect
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});