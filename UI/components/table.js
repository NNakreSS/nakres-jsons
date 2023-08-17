const newDataListHead = document.createElement("thead")
const newDataListBody = document.createElement("tbody")

function createDatabaseTable(databases) {
    console.log("Creating database table")
    databasesDiv.innerHTML = ''
    for (const database in databases) {
        const dbDiv = document.createElement("div");
        dbDiv.className = "data-base";
        dbDiv.innerHTML = `${database} <span><i class="fa-solid fa-turn-down"></i></span>`
        dbDiv.setAttribute("database-name", database)
        dbDiv.setAttribute("drop-status", 0)
        databasesDiv.appendChild(dbDiv)
    }
    return true;
}

function databasesUI(selected) {
    switch (selected.className) {
        case "data-base":
            createTableRows(selected)
            break;
        case "tables":
            createTables(selected)
            break;
        default:
            break;
    }
}

function createTableRows(selected){
    const dataName = selected.getAttribute("database-name")
            const dropStatus = parseInt(selected.getAttribute("drop-status"))
            if (!dropStatus) {
                const tableList = document.createElement("div")
                tableList.id = dataName + "_tables"
                tableList.className = "tablelist"
                var inner = ""
                for (const table in db[dataName].tables) {
                    inner += `<div data-table="${table}" data-main=${dataName} class="tables">${table} <span><i class="fa-solid fa-circle-arrow-right"></i></span></div>`
                }
                tableList.innerHTML = inner
                databasesDiv.insertBefore(tableList, selected.nextSibling)
                selected.setAttribute("drop-status", 1)
            } else {
                const dropTable = document.getElementById(dataName + "_tables")
                dropTable.remove()
                selected.setAttribute("drop-status", 0)
            }
}

function createTables(selected) {
    const dname = selected.getAttribute("data-main")
    const dtable = selected.getAttribute("data-table")
    const dataBase = db[dname].tables[dtable]
    const dataList = document.getElementById("data-list")
    newDataListTable.className = "content-table"
    let headarRow = "<tr> <th>#uniqkey</th> "
    dataBase.columns.forEach(column => {
        headarRow += `<th>${column}</th>`
    })
    headarRow += "</tr>"
    newDataListHead.innerHTML = headarRow

    let bodyRow = ""
    dataBase.rows.forEach(row => {
        bodyRow += '<tr> <td data-typeof ="uniqkey">' + row.uniqkey + '</td>'
        dataBase.columns.forEach(column => {
            bodyRow += `<td data-typeof = ${typeof (row[column])} data-uniqkey = ${row.uniqkey} >${row[column]}</td>`
        })
        bodyRow += "</tr>"
    });
    newDataListBody.innerHTML = bodyRow
    dataList.appendChild(newDataListTable)
    newDataListTable.appendChild(newDataListHead)
    newDataListTable.appendChild(newDataListBody)
}