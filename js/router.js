// ===============================
// USOBIT ROUTER
// ===============================

function getParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function getTool(id) {
    return TOOLS.find(tool => tool.id === id);
}

function getCategory(name) {
    return DATABASE[name] || [];
}
