// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .project-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const gradientPosition = (scrolled / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.body.style.backgroundPosition = `${gradientPosition}% ${gradientPosition}%`;
    });
});

// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    
    // Create three spans for the hamburger icon
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        hamburger.appendChild(span);
    }

    // Add hamburger button to header
    const header = document.querySelector('header');
    header.appendChild(hamburger);

    // Toggle navigation menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('nav ul').classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        menuButton.style.display = 'none'; // Hide the menu button completely
        document.body.classList.add('no-scroll');
    });
    
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        menuButton.style.display = 'flex'; // Show the menu button again
        document.body.classList.remove('no-scroll');
    });
    
    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        menuButton.style.display = 'flex'; // Show the menu button again
        document.body.classList.remove('no-scroll');
    });
});