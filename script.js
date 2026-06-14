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





// Carousel functionality
const carouselTrack = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let currentIndex = 0;
let autoplayTimer = null;

// Function to move carousel to specific slide
function goToSlide(index) {
  currentIndex = index;
  const offset = -index * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;
  
  // Update dot indicators
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
  // Reset autoplay timer
  resetAutoplay();
}

// Function to advance to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}

// Function to start/reset autoplay
function resetAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextSlide, 5000);
}

// Add click listeners to dots
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    goToSlide(index);
  });
});

// Start autoplay on page load
resetAutoplay();
