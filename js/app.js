// ===========================
// USOBIT ENGINE
// ===========================

const params = new URLSearchParams(window.location.search);

// ---------- HOME PAGE ----------

if (document.getElementById("featuredTools")) {

const container = document.getElementById("featuredTools");
const searchBox = document.getElementById("searchBox");

function displayTools(list) {

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `
            <div class="card">
                <h2>😕 No tools found</h2>
                <p>Try another keyword.</p>
            </div>
        `;
        return;
    }

    list.forEach(tool => {
        container.innerHTML += `
            <a class="card" href="tool.html?id=${tool.id}">
                <h3>${tool.icon} ${tool.name}</h3>
                <p>${tool.description}</p>
            </a>
        `;
    });
}

displayTools(TOOLS);

searchBox.addEventListener("input", function () {

    const search = this.value.toLowerCase();

    const results = TOOLS.filter(tool => {

        const text = [
            tool.name,
            tool.description,
            tool.category,
            ...(tool.keywords || [])
        ]
        .join(" ")
        .toLowerCase();

        return text.includes(search);
    });

    displayTools(results);
});

}

// ---------- CATEGORY PAGE ----------

if (document.getElementById("categoryGrid")) {

const category = params.get("category");
const grid = document.getElementById("categoryGrid");

document.getElementById("categoryTitle").textContent =
    category.charAt(0).toUpperCase() + category.slice(1);

DATABASE[category].forEach(tool => {
    grid.innerHTML += `
        <a class="card" href="tool.html?id=${tool.id}">
            <h3>${tool.icon} ${tool.name}</h3>
            <p>${tool.description}</p>
        </a>
    `;
});

}

// ---------- TOOL PAGE ----------

if (document.getElementById("toolContainer")) {

const id = params.get("id");
const tool = TOOLS.find(t => t.id === id);

if (tool) {

    document.title = tool.name + " | Usobit";

    document.getElementById("toolContainer").innerHTML = `
        <h1>${tool.icon} ${tool.name}</h1>
        <br>
        <p>${tool.description}</p>
        <br><br>
        <div id="toolApp"></div>
    `;

    // Run the correct tool
    const app = document.getElementById("toolApp");

    if (TOOL_FUNCTIONS[tool.id]) {
        TOOL_FUNCTIONS[tool.id](app);
    }

} else {
    document.getElementById("toolContainer").innerHTML = "<h2>Tool Not Found</h2>";
}

}

// ===========================
// DARK MODE
// ===========================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    themeButton.textContent = dark ? "☀️" : "🌙";

    localStorage.setItem("theme", dark ? "dark" : "light");
});

}
