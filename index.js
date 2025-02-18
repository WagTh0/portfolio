function showPopup(imageElement) {
    const modal = document.getElementById('artModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalInfo = document.getElementById('modalInfo');
    const modalbts = document.getElementById('modalbts');

    // Set modal content
    modalImage.src = imageElement.src;
    modalTitle.textContent = imageElement.getAttribute('data-title');
    modalInfo.textContent = imageElement.getAttribute('data-info');
    modalbts.textContent = imageElement.getAttribute('data-bts');

    // Display modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling on the main page
}

function closePopup() {
    const modal = document.getElementById('artModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling on the main page
}