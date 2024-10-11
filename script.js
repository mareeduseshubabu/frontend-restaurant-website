// Simple interactivity: highlight a chef card on click
const chefCards = document.querySelectorAll('.chef-card');

chefCards.forEach(card => {
    card.addEventListener('click', () => {
        chefCards.forEach(c => c.classList.remove('highlight'));
        card.classList.add('highlight');
    });
});



// Function to open the lightbox with the clicked image
function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightbox.style.display = 'flex';
    lightboxImage.src = image.src;
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}




