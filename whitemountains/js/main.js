/* ==================== NAVIGATION ==================== */
const mobileToggle = document.getElementById('mobileToggle');
const mobileClose = document.getElementById('mobileClose');
const navMobile = document.getElementById('navMobile');
const navOverlay = document.getElementById('navOverlay');
const header = document.getElementById('header');

// Toggle mobile navigation
if (mobileToggle) {
    mobileToggle.addEventListener('click', openMobileNav);
}

if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
}

if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileNav);
}

function openMobileNav() {
    if (navMobile) {
        navMobile.classList.add('active');
    }
    if (navOverlay) {
        navOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    if (navMobile) {
        navMobile.classList.remove('active');
    }
    if (navOverlay) {
        navOverlay.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}

// Close mobile nav when clicking on a link
const navLinks = document.querySelectorAll('.nav-mobile a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

/* ==================== HEADER SCROLL EFFECT ==================== */
window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    // Update active navigation based on scroll
    updateActiveNav();
});

/* ==================== UPDATE ACTIVE NAVIGATION ==================== */
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Update desktop nav
    const desktopItems = document.querySelectorAll('.nav-desktop li');
    desktopItems.forEach(li => {
        li.classList.remove('active');
        const link = li.querySelector('a');
        if (link) {
            const href = link.getAttribute('href');
            // Match section ID or home page
            if (href === `#${current}` || (current === 'hero' && href === 'index.html')) {
                li.classList.add('active');
            }
        }
    });

    // Update mobile nav
    const mobileItems = document.querySelectorAll('.nav-mobile li');
    mobileItems.forEach(li => {
        li.classList.remove('active');
        const link = li.querySelector('a');
        if (link) {
            const href = link.getAttribute('href');
            if (href === `#${current}` || (current === 'hero' && href === 'index.html')) {
                li.classList.add('active');
            }
        }
    });
}

/* ==================== SMOOTH SCROLLING FOR ANCHOR LINKS ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            closeMobileNav();

            // Smooth scroll with offset for fixed header
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== INITIALIZATION ==================== */
// Set initial active nav on page load
document.addEventListener('DOMContentLoaded', updateActiveNav);

/* ==================== BACK TO TOP BUTTON ==================== */
// Create and manage back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.setAttribute('aria-label', 'Back to top');
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background-color: var(--pine-green);
    color: var(--white);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: var(--shadow);
`;

document.body.appendChild(backToTopBtn);

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
        setTimeout(() => {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        }, 0);
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
        setTimeout(() => {
            backToTopBtn.style.display = 'none';
        }, 300);
    }
});

// Back-to-top click handler
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for back-to-top button
backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.backgroundColor = 'var(--tree-brown)';
});

backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.backgroundColor = 'var(--pine-green)';
});

/* ==================== FORM UTILITIES ==================== */
// Validate form fields on input
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });
});

function validateField(field) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    const label = field.getAttribute('data-error') || field.getAttribute('name');
    let isValid = true;

    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
    }

    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        isValid = false;
    }

    // Add/remove validation state
    if (!isValid) {
        formGroup.classList.add('error');
    } else {
        formGroup.classList.remove('error');
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add smooth scroll behavior polyfill for older browsers (optional)
if (!('scrollBehavior' in document.documentElement.style)) {
    console.log('Smooth scroll not supported in this browser');
}
