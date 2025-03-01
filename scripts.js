document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueBtn');
    const nameInput = document.getElementById('nameInput');
    const welcomeScreen = document.getElementById('welcome-screen');
    const dashboard = document.getElementById('dashboard');
    const userNameSpans = document.querySelectorAll('.userName');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const logoutBtns = document.querySelectorAll('.mobile-logout, .desktop-logout');

    // Menu toggle functionality
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    }

    menuBtn?.addEventListener('click', toggleMenu);
    menuOverlay?.addEventListener('click', toggleMenu);

    // Check if user is already logged in
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        showDashboard(savedName);
    }

    continueBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('userName', name);
            showDashboard(name);
        } else {
            alert('Please enter your name');
        }
    });

    logoutBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            localStorage.removeItem('userName');
            welcomeScreen.style.display = 'flex';
            dashboard.style.display = 'none';
            nameInput.value = '';
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            continueBtn.click();
        }
    });

    function showDashboard(name) {
        welcomeScreen.style.display = 'none';
        dashboard.style.display = 'block';
        userNameSpans.forEach(span => {
            span.textContent = name;
        });
    }

    // Script to update the position of the animated cursor
    const animatedCursor = document.getElementById('animatedCursor');
    
    document.addEventListener('mousemove', (e) => {
        animatedCursor.style.left = `${e.clientX}px`;
        animatedCursor.style.top = `${e.clientY}px`;
    });
});
