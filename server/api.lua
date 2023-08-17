databases = {} -- Bütün datalar luada tutulur ve sonra jsona yazılır

-- JSON veritabanı dosyasını yükleyen bir fonksiyon
--- @param jsonName (string)json File name
--- @return (table) Database content or nil
function loadDatabase(jsonName)
    if databases[jsonName] then
        return databases[jsonName]
    end
    local fileContent = LoadResourceFile(GetCurrentResourceName(), "/jsons-data/" .. jsonName .. ".json")
    if fileContent then
        local db = json.decode(fileContent)
        databases[jsonName] = db
        return db
    else
        local emptyDatabase = {}
        emptyDatabase.tables = {}
        -- Dosya mevcut değilse, boş bir veritabanı oluştur
        SaveResourceFile(GetCurrentResourceName(), "/jsons-data/" .. jsonName .. ".json", json.encode(emptyDatabase), -1)
        databases[jsonName] = emptyDatabase
        return emptyDatabase
    end
end

-- JSON veritabanı dosyasını kaydeden bir fonksiyon
--- @param resourceName (string) Resource name
--- @param jsonName (string)json File name
--- @param data (table) Database content
--- @return (boolean) success status
local function saveDatabase(jsonName)
    local data = databases[jsonName]
    local success = SaveResourceFile(GetCurrentResourceName(), "/jsons-data/" .. jsonName .. ".json", json.encode(data),
        -1)
    print("Saved All databases successfully")
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000 * 60)
        for jsonName, _ in pairs(databases) do
            saveDatabase(jsonName)
            Wait(1000)
        end
    end
end)

AddEventHandler("onResourceStop", function(resource)
    if resource == GetCurrentResourceName() then
        for jsonName, _ in pairs(databases) do
            saveDatabase(jsonName)
            Wait(1000)
        end
    end
end)

local nsDB = {}

-- Veritabanı nesnesi oluşturma
--- @param jsonName (string) json File name
--- @return (table) Database object or error
function nsDB:new(jsonName)
    -- local data = 
    loadDatabase(jsonName)
    -- data.tables = data.tables or {}
    local obj = {
        jsonName = jsonName,
        -- data = data,
        fastSave = self.fastSave,
        createTable = self.createTable,
        insertRow = self.insertRow,
        updateRow = self.updateRow,
        deleteRow = self.deleteRow,
        selectRows = self.selectRows
    }
    return obj
end

-- Veritabanını anlık olarak jsona kaydetme
--- @return (boolean) succes status
function nsDB:fastSave()
    return saveDatabase(self.jsonName)
end

-- Tablo oluşturma
--- @param tableName (string) Table name
--- @param columns (table) lines
--- @return (boolean) Table creation success status
function nsDB:createTable(tableName, columns)
    local data = databases[self.jsonName]
    if data.tables[tableName] then
        return false
    end
    data.tables[tableName] = {
        columns = columns,
        rows = {}
    }
    -- self:save()
    return true
end

-- Sütun ekleme
--- @param tableName (string) Table name
--- @param rowData (table) Line data
--- @return (boolean) Line insertion success status
function nsDB:insertColumn(tableName, columnData)
    local data = databases[self.jsonName]
    local tableData = data.tables[tableName]
    if not tableData then
        return false
    end
    -- table.insert(tableData.columns, columnData)
    tableData.columns[#tableData.columns + 1] = columnData
    -- self:save()
    return true
end

-- Satır ekleme
--- @param tableName (string) Table name
--- @param rowData (table) Line data
--- @return (boolean) Line insertion success status
function nsDB:insertRow(tableName, rowData)
    if rowData.uniqkey then
        return false
    end -- Uniqkey otomatik verilen keydir bunu bir satır olarak belirtemezsiniz
    local data = databases[self.jsonName]
    local tableData = data.tables[tableName]
    if not tableData then
        return false
    end
    rowData.uniqkey = #tableData.rows + 1
    -- table.insert(tableData.rows, rowData)
    tableData.rows[#tableData.rows + 1] = rowData
    -- self:save()
    return true
end

-- Satır güncelleme
--- @param tableName (string) Table name
--- @param conditionColumn (string) Condition column
--- @param conditionValue (any) Condition value
--- @param updateData (table) Update veilre
--- @return (boolean) success status
function nsDB:updateRow(tableName, conditionColumn, conditionValue, updateData)
    local data = databases[self.jsonName]
    local tableData = data.tables[tableName]
    if not tableData then
        return false
    end
    for _, row in ipairs(tableData.rows) do
        if row[conditionColumn] == conditionValue then
            for key, value in pairs(updateData) do
                row[key] = value
            end
            -- self:save()
            return true
        end
    end
    return false
end

-- Satır silme
--- @param tableName (string) Table name
--- @param conditionColumn (string) Condition column
--- @param conditionValue (any) Condition value
--- @return (boolean) succes status
function nsDB:deleteRow(tableName, conditionColumn, conditionValue)
    local data = databases[self.jsonName]
    local tableData = data.tables[tableName]
    if not tableData then
        return false
    end
    for i, row in ipairs(tableData.rows) do
        if row[conditionColumn] == conditionValue then
            table.remove(tableData.rows, i)
            -- self:save()
            return true
        end
    end
    return false
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
            result[#result + 1] = row
        end
    end
    return result
end

exports("getMethods", function()
    return nsDB
end)
