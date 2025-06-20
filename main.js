// JavaScript untuk modal
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeBtns = document.querySelectorAll('.close-modal');

// Fungsi untuk membuka modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Event listener untuk tombol login
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
});

// Event listener untuk tombol signup
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(signupModal);
});

// Event listener untuk tombol close
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    });
});

// Event listener untuk form daftar
const signupForm = document.querySelector('#signup-modal form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(signupModal);
});

// Event listener untuk form login
const loginForm = document.querySelector('#login-modal form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    console.log('Email:', email);
    console.log('Password:', password);
    closeModal(loginModal);
});

// Tutup modal ketika klik di luar modal
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModal(loginModal);
    }
    if (e.target === signupModal) {
        closeModal(signupModal);
    }
});

// Fungsi untuk toggle menu hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
