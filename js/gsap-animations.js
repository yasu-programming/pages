// ===== GSAP SETUP =====
gsap.registerPlugin(ScrollTrigger);

// ===== GENERAL SETTINGS =====
const animationConfig = {
    duration: 1,
    ease: "power3.out",
    stagger: 0.1
};

// ===== HERO SECTION ANIMATIONS =====
function initHeroAnimations() {
    const heroTimeline = gsap.timeline();
    
    // Set initial states
    gsap.set([".hero__greeting", ".hero__name", ".hero__subtitle", ".hero__description", ".hero__cta .btn"], {
        opacity: 0,
        y: 50
    });
    
    gsap.set(".hero__scroll", {
        opacity: 0,
        y: 20
    });
    
    // Animate hero content
    heroTimeline
        .to(".hero__greeting", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .to(".hero__name", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.4")
        .to(".hero__subtitle", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .to(".hero__description", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .to(".hero__cta .btn", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.2
        }, "-=0.4")
        .to(".hero__scroll", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.2");
}

// ===== NAVIGATION ANIMATIONS =====
function initNavAnimations() {
    // Nav items animation on load
    gsap.from(".nav__link", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
    });
    
    // Logo animation
    gsap.from(".nav__logo", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3
    });
}

// ===== SCROLL TRIGGERED ANIMATIONS =====
function initScrollAnimations() {
    // Section titles animation
    gsap.utils.toArray(".section__title").forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Career timeline animations
    gsap.utils.toArray(".career__item").forEach((item, index) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
        
        timeline
            .from(item.querySelector(".career__date"), {
                opacity: 0,
                x: -30,
                duration: 0.6,
                ease: "power3.out"
            })
            .from(item.querySelector(".career__title"), {
                opacity: 0,
                x: -20,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(item.querySelector(".career__company"), {
                opacity: 0,
                x: -20,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(item.querySelector(".career__description"), {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.3")
            .from(item.querySelectorAll(".tech-tag"), {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: "back.out(1.7)",
                stagger: 0.1
            }, "-=0.3");
    });
    
    // Skills categories animation
    gsap.utils.toArray(".skills__category").forEach((category, index) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: category,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
        
        timeline
            .from(category, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(category.querySelectorAll(".skill__item"), {
                opacity: 0,
                x: -30,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1
            }, "-=0.4");
    });
    
    // Project cards animation
    gsap.utils.toArray(".project__card").forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Contact section animation
    const contactTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    contactTimeline
        .from(".contact__info", {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".contact__form", {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".contact__item", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1
        }, "-=0.4")
        .from(".form__group", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1
        }, "-=0.4");
}

// ===== HOVER ANIMATIONS =====
function initHoverAnimations() {
    // Button hover animations
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Project card hover animations
    document.querySelectorAll('.project__card').forEach(card => {
        const image = card.querySelector('.project__image');
        const content = card.querySelector('.project__content');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(image, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });
    
    // Navigation link hover animations
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
    
    // Skill items hover
    document.querySelectorAll('.skill__item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    // Hero background parallax
    gsap.to(".hero", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Floating elements
    gsap.to(".hero__scroll", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
    });
}

// ===== TEXT ANIMATIONS =====
function initTextAnimations() {
    // Split text animation for hero name
    const heroName = document.querySelector('.hero__name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.innerHTML = text
            .split('')
            .map(char => char === ' ' ? ' ' : `<span>${char}</span>`)
            .join('');
        
        gsap.from('.hero__name span', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.05,
            delay: 0.5
        });
    }
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    // Create loading timeline
    const loadingTimeline = gsap.timeline();
    
    // Hide all content initially
    gsap.set("body", { overflow: "hidden" });
    gsap.set(".nav, .hero__content, .hero__scroll", { opacity: 0 });
    
    // Loading complete
    loadingTimeline
        .set("body", { overflow: "auto" })
        .to(".nav", {
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        })
        .to(".hero__content", {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3")
        .to(".hero__scroll", {
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4");
}

// ===== FORM ANIMATIONS =====
function initFormAnimations() {
    // Form input focus animations
    document.querySelectorAll('.form__input, .form__textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Form submission animation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });
        });
    }
}

// ===== MOBILE MENU ANIMATIONS =====
function initMobileMenuAnimations() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                // Opening animation
                gsap.from('.nav__list', {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: "power3.out"
                });
                
                gsap.from('.nav__link', {
                    opacity: 0,
                    x: -20,
                    duration: 0.4,
                    ease: "power3.out",
                    stagger: 0.1
                });
            }
        });
    }
}

// ===== INITIALIZE ALL ANIMATIONS =====
function initAllAnimations() {
    // Wait for DOM and GSAP to be ready
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        return;
    }
    
    // Initialize animations
    initLoadingAnimations();
    initHeroAnimations();
    initNavAnimations();
    initScrollAnimations();
    initHoverAnimations();
    initParallaxEffects();
    initTextAnimations();
    initFormAnimations();
    initMobileMenuAnimations();
    
    console.log('GSAP animations initialized! ✨');
}

// ===== INITIALIZE ON DOM CONTENT LOADED =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllAnimations);
} else {
    initAllAnimations();
}

// ===== REFRESH SCROLL TRIGGER ON RESIZE =====
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ===== PERFORMANCE OPTIMIZATION =====
// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(10); // Speed up animations significantly
    ScrollTrigger.config({ limitCallbacks: true });
}