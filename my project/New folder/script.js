// Navbar scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', e=>{
        e.preventDefault();
        const target=document.querySelector(anchor.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
});
