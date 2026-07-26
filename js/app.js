// =========================
// USOBIT APP ENGINE
// =========================

// Get URL parameters
const params = new URLSearchParams(window.location.search);

// Current page
const page = window.location.pathname;


// -------------------------
// HOME PAGE
// -------------------------

if (document.getElementById("featuredTools")) {

    const container = document.getElementById("featuredTools");

    TOOLS.forEach(tool => {

        container.innerHTML += `

        <a class="card" href="tool.html?id=${tool.id}">

            <h3>${tool.icon} ${tool.name}</h3>

            <p>${tool.description}</p>

        </a>

        `;

    });

}



// -------------------------
// CATEGORY PAGE
// -------------------------

if (document.getElementById("categoryGrid")) {

    const category = params.get("category");

    document.getElementById("categoryTitle").textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    const grid = document.getElementById("categoryGrid");

    TOOLS.filter(tool => tool.category === category)

    .forEach(tool => {

        grid.innerHTML += `

        <a class="card" href="tool.html?id=${tool.id}">

            <h3>${tool.icon} ${tool.name}</h3>

            <p>${tool.description}</p>

        </a>

        `;

    });

}



// -------------------------
// TOOL PAGE
// -------------------------

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

            <h3>This tool is under development.</h3>

        `;

    }

    else {

        document.getElementById("toolContainer").innerHTML = `

            <h2>Tool not found.</h2>

        `;

    }

}
