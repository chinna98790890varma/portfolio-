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
