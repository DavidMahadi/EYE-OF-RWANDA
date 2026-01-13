// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 90;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    }
});

// Form submission handler
const contactForms = document.querySelectorAll('form');
contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');
        
        if (name && email && message) {
            if (!name.value || !email.value || !message.value) {
                alert('Please fill in all required fields.');
                return;
            }
            
            alert('Thank you for your message! We will get back to you within 24 hours.');
            form.reset();
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .feature-card, .gallery-item, .faq-item, .split-section');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Dropdown menu improved stability
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    let timeout;
    const menu = dropdown.querySelector('.dropdown-menu');
    
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        if (menu) {
            menu.style.display = 'block';
        }
    });
    
    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            if (menu) {
                menu.style.display = 'none';
            }
        }, 300);
    });
    
    if (menu) {
        menu.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
        });
        
        menu.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });
    }
});

// Parallax effect for headers
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
    
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader && scrolled < 500) {
        const headerBg = pageHeader.querySelector('.page-header-bg');
        if (headerBg) {
            headerBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Image loading animation
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.5s ease';
                img.style.opacity = '1';
            });
        }
    });
});

// Add pulse animation to CTA buttons
const ctaButtons = document.querySelectorAll('.hero-cta, .nav-cta');
ctaButtons.forEach(button => {
    setInterval(() => {
        button.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            button.style.animation = '';
        }, 500);
    }, 3000);
});

// Gallery hover effect enhancement
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.gallery-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.gallery-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
    });
});

console.log('✨ Rwanda Travel Website - All Scripts Loaded Successfully');
