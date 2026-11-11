//mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});

//Dark mode toggle 
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Profile image modal
const profileImgNav = document.getElementById('profileImgNav');
const aboutProfileImg = document.querySelector('.about-profile-img');
const imageModal = document.getElementById('imageModal');
const modalClose = document.getElementById('modalClose');

function openModal() {
    if (!imageModal) return;
    imageModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!imageModal) return;
    imageModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

if (profileImgNav) {
    profileImgNav.addEventListener('click', openModal);
}

if (aboutProfileImg) {
    aboutProfileImg.addEventListener('click', openModal);
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (imageModal) {
    imageModal.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            closeModal();
        }
    });
}
    const aboutVideo = document.getElementById('aboutVideo');
    const aboutSection = document.getElementById('about');

    if (aboutVideo && aboutSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutVideo.play().catch(() => {
                        // Autoplay may be blocked; muted video helps in most browsers.
                    });
                } else {
                    aboutVideo.pause();
                }
            });
        }, { threshold: 0.45 });

        observer.observe(aboutSection);
    }

    const revealElements = document.querySelectorAll('.reveal');
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.25 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    function animateCounters() {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = Number(counter.dataset.target);
                const current = Number(counter.textContent);
                const increment = Math.ceil(target / 50);

                if (current < target) {
                    counter.textContent = String(Math.min(current + increment, target));
                    setTimeout(updateCount, 40);
                }
            };
            updateCount();
        });
    }

    if (aboutSection && 'IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    animateCounters();
                    countersAnimated = true;
                }
            });
        }, { threshold: 0.4 });

        statsObserver.observe(aboutSection);
    }

    const typingText = document.getElementById('typingText');
    const roles = ['UI/UX Designer', 'Full Stack & Web Developer', 'Creative Thinker'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function updateTyping() {
        if (!typingText) return;
        const role = roles[currentRoleIndex];
        const visibleText = role.slice(0, currentCharIndex);
        typingText.textContent = visibleText;

        if (!isDeleting && currentCharIndex < role.length) {
            currentCharIndex += 1;
            setTimeout(updateTyping, 120);
        } else if (!isDeleting) {
            isDeleting = true;
            setTimeout(updateTyping, 1500);
        } else if (isDeleting && currentCharIndex > 0) {
            currentCharIndex -= 1;
            setTimeout(updateTyping, 60);
        } else {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(updateTyping, 300);
        }
    }

    updateTyping();

    // Projects tilt interaction
    const projectCards = document.querySelectorAll('.project-card');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && projectCards.length) {
        projectCards.forEach(card => {
            const media = card.querySelector('.project-media');
            card.classList.add('tilt');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                const rotateY = (px - 0.5) * 14; // degrees
                const rotateX = -(py - 0.5) * 8;
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });

            // Keyboard focus reveal for accessibility
            card.addEventListener('focusin', () => card.classList.add('focus'));
            card.addEventListener('focusout', () => card.classList.remove('focus'));
        });
    }

    // Make overlay action buttons open live demo when clicked on card background
    document.querySelectorAll('.project-card').forEach(card => {
        const live = card.dataset.live;
        if (live && live !== '#') {
            card.addEventListener('dblclick', () => { window.open(live, '_blank'); });
        }
    });

    // Skills progress animation when visible
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.querySelector('.skills-section');

    if ('IntersectionObserver' in window && progressBars.length && skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        const fill = bar.querySelector('.progress-fill');
                        const pct = bar.dataset.percentage || '0';
                        fill.style.width = pct + '%';
                    });
                }
            });
        }, { threshold: 0.35 });

        skillsObserver.observe(skillsSection);
    }