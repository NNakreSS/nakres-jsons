
const databasesDiv = document.getElementById("databases")
const container = document.getElementById("container")
var db = [];

window.addEventListener('message', function (e) {
    const data = e.data
    if (data.type === "ui") {
        db = data.databases
        createDatabaseTable(db);
        container.style.display = "block";
    }
});

window.addEventListener('keydown', (e) => {
    const key = e.key
    if (key === "Escape") {
        container.style.display = "none";
        db = [];
        post("closesql")
    }
})

databasesDiv.addEventListener("click", (e) => {
    databasesUI(e.target);
})

