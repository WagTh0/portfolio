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

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    const title = document.getElementById("art-title");
    const gallery = document.getElementById("art-gallery");

    fetch('../json_files/artworks.json')
        .then(response => response.json())
        .then(data => {
            if (type === "original") {
                title.textContent = "Original Art";
                gallery.id = "original-art-gallery";
                renderArtwork("original-art-gallery", data.original);
            } else if (type === "fan") {
                title.textContent = "Fan Art";
                gallery.id = "fan-art-gallery";
                renderArtwork("fan-art-gallery", data.fanArt);
            } else {
                title.textContent = "Artwork";
                gallery.innerHTML = "<p>Please choose a category.</p>";
            }           
        })
        .catch(error => console.error('Error loading artwork data:', error));
});
