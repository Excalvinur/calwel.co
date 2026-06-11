/* Corner Clickable Logo */
const floatingLogo = document.getElementById('floatingLogo');

// Handle click to navigate to index.html
floatingLogo.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Optional: Prevent context menu on right-click
floatingLogo.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

/* Hamburger Icon Menu */
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

// Toggle menu on hamburger click
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* Autoplay on hover */
document.querySelectorAll('.grid-item').forEach(item => {
    const video = item.querySelector('video');
    
    item.addEventListener('mouseenter', () => {
        video.play();
    });
    
    item.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.load(); // Reloads the video and shows the poster thumbnail
    });
});

