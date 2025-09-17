function renderArtwork(galleryId, artworkArray) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;
    
    artworkArray.forEach(art => {
        const artDiv = document.createElement("div");
        artDiv.className = "art_piece"
        artDiv.innerHTML = `
            <img 
                src="${art.src}" 
                alt="${art.alt}" 
                data-title="${art.title}" 
                data-info="${art.info}" 
                data-bts="${art.bts}"
                onclick="showPopup(this)"
            >
        `;
        gallery.appendChild(artDiv);
    });
}

fetch('artworks.json')
    .then(response => response.json())
    .then(data => {
        renderArtwork("fan-art-gallery", data.fanArt);
        renderArtwork("original-art-gallery", data.original);
    })
    .catch(error => console.error('Error loading artwork data:', error));
