// ===========================
// USOBIT APP ENGINE
// ===========================

// HOME PAGE
const featuredContainer = document.getElementById("featuredTools");

if (featuredContainer) {

    TOOLS.forEach(tool => {

        featuredContainer.innerHTML += `
            <a class="card" href="tool.html?id=${tool.id}">
                <h3>${tool.icon} ${tool.name}</h3>
                <p>${tool.description}</p>
            </a>
        `;

    });

    const searchBox = document.getElementById("searchBox");

    if (searchBox) {

        searchBox.addEventListener("input", function () {

            const search = this.value.toLowerCase();

            const filtered = TOOLS.filter(tool => {
                return (
                    tool.name.toLowerCase().includes(search) ||
                    tool.description.toLowerCase().includes(search)
                );
            });

            featuredContainer.innerHTML = "";

            filtered.forEach(tool => {
                featuredContainer.innerHTML += `
                    <a class="card" href="tool.html?id=${tool.id}">
                        <h3>${tool.icon} ${tool.name}</h3>
                        <p>${tool.description}</p>
                    </a>
                `;
            });
        });
    }
}

// CATEGORY PAGE
const categoryGrid = document.getElementById("categoryGrid");

if (categoryGrid) {

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    document.getElementById("categoryTitle").textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    (DATABASE[category] || []).forEach(tool => {
        categoryGrid.innerHTML += `
            <a class="card" href="tool.html?id=${tool.id}">
                <h3>${tool.icon} ${tool.name}</h3>
                <p>${tool.description}</p>
            </a>
        `;
    });
}

// TOOL PAGE
const toolContainer = document.getElementById("toolContainer");

if (toolContainer) {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const tool = TOOLS.find(t => t.id === id);

    if (tool) {

        toolContainer.innerHTML = `
            <h1>${tool.icon} ${tool.name}</h1>
            <br>
            <p>${tool.description}</p>
            <br>
            <div id="toolApp"></div>
        `;

        const app = document.getElementById("toolApp");

        if (TOOL_FUNCTIONS[tool.id]) {
            TOOL_FUNCTIONS[tool.id](app);
        }
    } else {
        toolContainer.innerHTML = "<h2>Tool not found</h2>";
    }
}
