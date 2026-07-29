const container = document.getElementById("featuredTools");

if (container) {
    TOOLS.forEach(tool => {
        container.innerHTML += `
            <div class="card">
                <h3>${tool.icon} ${tool.name}</h3>
                <p>${tool.description}</p>
            </div>
        `;
    });
}
