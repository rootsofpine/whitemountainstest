/* ==================== SCROLL-TRIGGERED ANIMATIONS ==================== */

/**
 * Intersection Observer for fade-in animations
 * Triggers animation when element enters viewport
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Also observe any future dynamically added fade-in elements
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.classList.contains('fade-in')) {
                    observer.observe(node);
                }
            });
        });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
});

/* ==================== PARALLAX EFFECT (ENHANCED) ==================== */

/**
 * Optional: JavaScript parallax for better control
 * Only applies if CSS parallax isn't sufficient
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const scrollPosition = window.scrollY;
            const elementOffset = el.offsetTop;
            const distance = scrollPosition - elementOffset;
            const parallaxSpeed = parseFloat(el.getAttribute('data-parallax')) || 0.5;

            // Only apply parallax if element is in viewport
            if (distance > -window.innerHeight && distance < window.innerHeight) {
                el.style.backgroundPosition = `center ${distance * parallaxSpeed}px`;
            }
        });
    });
}

// Initialize parallax on DOM load
document.addEventListener('DOMContentLoaded', initParallax);

/* ==================== LAZY LOADING IMAGES ==================== */

/**
 * Lazy load images with native loading attribute
 * Fallback for browsers that don't support it
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('lazy-loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback: load all images immediately
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
            img.classList.add('lazy-loaded');
        });
    }
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

/* ==================== SMOOTH REVEAL ON SCROLL ==================== */

/**
 * Reveals elements progressively as you scroll
 * Perfect for cards, list items, timeline items
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        revealObserver.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);

/* ==================== COUNTER ANIMATION ==================== */

/**
 * Animates numeric counters when they come into view
 * Usage: <span class="counter" data-target="100">0</span>
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');

    if (counters.length === 0) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = parseInt(counter.getAttribute('data-duration')) || 2000;

                animateCounter(counter, target, duration);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target, duration) {
    const startValue = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOutQuad = 1 - Math.pow(1 - progress, 2);

        const current = Math.floor(startValue + (target - startValue) * easeOutQuad);
        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

document.addEventListener('DOMContentLoaded', initCounters);

/* ==================== PROGRESS INDICATOR ==================== */

/**
 * Shows reading progress bar at top of page
 */
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'progressBar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--pine-green), var(--sky-blue), var(--tree-brown));
        width: 0%;
        z-index: 1002;
        transition: width 0.1s ease;
    `;

    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

document.addEventListener('DOMContentLoaded', initProgressBar);

/* ==================== MOBILE TOUCH ENHANCEMENTS ==================== */

/**
 * Improves touch feedback on mobile devices
 */
function initTouchEnhancements() {
    const clickableElements = document.querySelectorAll('a, button, [role="button"]');

    clickableElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });

        element.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

document.addEventListener('DOMContentLoaded', initTouchEnhancements);

/* ==================== PERFORMANCE MONITORING ==================== */

/**
 * Logs performance metrics (optional, for debugging)
 */
function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

            console.log(`%c⚡ Page Load Time: ${pageLoadTime}ms`, 'color: #0a5c36; font-weight: bold;');

            // Additional metrics
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domContentLoadedEventEnd - perfData.domLoading;

            console.log(`%cConnect Time: ${connectTime}ms | Render Time: ${renderTime}ms`, 'color: #8b4513;');
        });
    }
}

logPerformanceMetrics();

/* ==================== UTILITY: DEBOUNCE FUNCTION ==================== */

/**
 * Debounce function for performance-critical event listeners
 * Usage: const debouncedScroll = debounce(myFunction, 200);
 */
window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/* ==================== INITIALIZATION ==================== */

// Run all animations on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✨ White Mountains Spirit - Animations Loaded', 'color: #0a5c36; font-size: 14px; font-weight: bold;');
});
