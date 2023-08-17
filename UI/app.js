const db = {
    "test": {
        "tables": {
            "players": {
                "rows": [
                    {
                        "history": '[{"PreviousWorth":1009,"NewWorth":1009},{"PreviousWorth":1009,"NewWorth":1009},{"PreviousWorth":1009,"NewWorth":1009},{"PreviousWorth":1009,"NewWorth":1007}]',
                        "name": "nakres",
                        "uniqkey": 1,
                        "money": 2500,
                        "id": 1,
                        "surname": "atmaca"
                    },
                    {
                        "uniqkey": 2,
                        "name": "anan",
                        "money": 1500,
                        "id": 1,
                        "surname": "sasa"
                    },
                    {
                        "uniqkey": 3,
                        "name": "bro",
                        "money": 1500,
                        "id": 1,
                        "surname": "sassssa"
                    },
                    {
                        "uniqkey": 4,
                        "name": "anan",
                        "money": 3500,
                        "id": 1,
                        "surname": "sasa"
                    },
                    {
                        "uniqkey": 5,
                        "name": "babaını",
                        "money": 3200,
                        "id": 1,
                        "surname": "zixim"
                    },
                    {
                        "uniqkey": 6,
                        "name": "deneme",
                        "money": 56,
                        "id": 1,
                        "surname": "testi"
                    }
                ],
                "columns": ["history", "id", "name", "surname", "money"]
            }
        }
    },
    "nakres": {
        "tables": {
            "vips": {
                "rows": [
                    {
                        "uniqkey": 1,
                        "name": "testnakre",
                        "money": 1500,
                        "id": 1,
                        "surname": "deneme"
                    },
                    {
                        "uniqkey": 2,
                        "name": "testnakre",
                        "money": 2500,
                        "id": 1,
                        "surname": "deneme"
                    },
                    {
                        "uniqkey": 3,
                        "name": "testnakre",
                        "money": 3700,
                        "id": 1,
                        "surname": "deneme"
                    },
                    {
                        "uniqkey": 4,
                        "name": "tendirdiot",
                        "money": 70080,
                        "id": 1,
                        "surname": "xxxxx"
                    }
                ],
                "columns": ["id", "name", "surname", "money"]
            }
        }
    },
    "veritabanı1": {
        "tables": {
            "tablo1": {
                "rows": [
                    {
                        // Veritabanı 1, Tablo 1 için row 1
                        "column1": "Veri 1",
                        "column2": "Veri 2",
                        "column3": "Veri 3"
                    },
                    {
                        // Veritabanı 1, Tablo 1 için row 2
                        "column1": "Veri 4",
                        "column2": "Veri 5",
                        "column3": "Veri 6"
                    }
                ],
                "columns": ["column1", "column2", "column3"]
            },
            "tablo2": {
                "rows": [
                    {
                        // Veritabanı 1, Tablo 2 için row 1
                        "column1": "Veri 7",
                        "column2": "Veri 8",
                        "column3": "Veri 9"
                    },
                    {
                        // Veritabanı 1, Tablo 2 için row 2
                        "column1": "Veri 10",
                        "column2": "Veri 11",
                        "column3": "Veri 12"
                    }
                ],
                "columns": ["column1", "column2", "column3"]
            }
        }
    },
    "veritabanı2": {
        "tables": {
            "tablo1": {
                "rows": [
                    {
                        // Veritabanı 2, Tablo 1 için row 1
                        "column1": "Veri 13",
                        "column2": "Veri 14",
                        "column3": "Veri 15"
                    },
                    {
                        // Veritabanı 2, Tablo 1 için row 2
                        "column1": "Veri 16",
                        "column2": "Veri 17",
                        "column3": "Veri 18"
                    }
                ],
                "columns": ["column1", "column2", "column3"]
            },
            "tablo2": {
                "rows": [
                    {
                        // Veritabanı 2, Tablo 2 için row 1
                        "column1": "Veri 19",
                        "column2": "Veri 20",
                        "column3": "Veri 21"
                    },
                    {
                        // Veritabanı 2, Tablo 2 için row 2
                        "column1": "Veri 22",
                        "column2": "Veri 23",
                        "column3": "Veri 24"
                    }
                ],
                "columns": ["column1", "column2", "column3"]
            }
        }
    },
    // Diğer veritabanları ve tablolar buraya eklenebilir
};

// const newDataListTable = document.createElement("table")
// // Daha sonra devam edilecek - tablo üzerinden data editleme
// newDataListTable.addEventListener('mousedown', (e) => {
//     const selected = e.target
//     const dataTypeOfSelected = selected.getAttribute('data-typeof')
//     const selectedTag = selected.tagName
//     console.log(selected)
//     if (selected.contentEditable !== "inherit" || dataTypeOfSelected == "uniqkey" || selectedTag == "TH") return;
//     const currentData = selected.innerHTML
//     selected.contentEditable = true;
//     selected.focus();
//     selected.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             selected.blur();
//             selected.contentEditable = "inherit";
//             const newData = selected.innerHTML
//             if (newData !== currentData) {
//                 if (dataTypeOfSelected == "number") { selected.innerHTML = parseFloat(newData) }
//             }
//         }
//     });
// })
