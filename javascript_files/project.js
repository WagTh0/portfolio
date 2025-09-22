function renderProjects(containerId, projectArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    projectArray.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "single_game";
        projectDiv.onclick = () => {
            if (project.link) {
                location.href = project.link;
            }
        };
        projectDiv.innerHTML = `
            <img src="${project.src}" alt="${project.alt}">
            <h2>${project.title}</h2>
            <p>${project.info}</p>
        `;
        container.appendChild(projectDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    const title = document.getElementById("project-title");
    const heading = document.getElementById("section-heading");

    fetch("json_files/projects.json")
        .then(response => response.json())
        .then(data => {
            if (type === "games") {
                title.textContent = "Games";
                heading.textContent = "Games:";
                renderProjects("projects-list", data.games);
            } else if (type === "websites") {
                title.textContent = "Websites";
                heading.textContent = "Websites:"
                renderProjects("projects-list", data.websites);
            } else {
                title.textContent = "Projects";
                heading.textContent = "Please choose a category.";
            }
        })
        .catch(error => console.error("Error loading", error));
});
