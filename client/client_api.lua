local nsDB = {}
local databases = {}

RegisterNetEvent("nakres-jsons:loadDatabase")
AddEventHandler("nakres-jsons:loadDatabase",function (db)
    databases = db
end)

-- JSON veritabanı dosyasını yükleyen bir fonksiyon
--- @param jsonName (string)json File name
--- @return (table) Database content or nil
local function loadDatabase(jsonName)
    TriggerServerEvent("nakres-jsons:loadDatabase", jsonName)
end

-- Veritabanı nesnesi oluşturma
--- @param jsonName (string) json File name
--- @return (table) Database object or error
function nsDB:new(jsonName)
    loadDatabase(jsonName)
    local obj = {
        jsonName = jsonName,
        selectRows = self.selectRows
    }
    return obj
end

-- Satırları seçme
--- @param tableName (string) Table Name
--- @param conditionColumn (string) Condition column (optional)
--- @param conditionValue (any) Condition value (optional)
--- @return (table) List of selected lines or nil
function nsDB:selectRows(tableName, conditionColumn, conditionValue)
    local data = databases[self.jsonName]
    local tableData = data.tables[tableName]
    if not tableData then
        return nil
    end
    local result = {}
    for _, row in ipairs(tableData.rows) do
        if not conditionColumn or row[conditionColumn] == conditionValue then
            -- table.insert(result, row)
            result[#result+1] = row
        end
    end
    return result
end

exports("getMethods", function()
    return nsDB
end)
