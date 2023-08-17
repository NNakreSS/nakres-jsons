
------ test ------
local jsonApi = exports['nakres-jsons']:getMethods()
local db = jsonApi:new("nakres")
jsonApi:new("test")
RegisterCommand("jtest", function(source, args)
    if db.data == "error" then
        return print("bulunamadı")
    end
    arg = args[1]
    arg = tonumber(arg)
    if arg == 1 then
        -- Tablo oluşturma
        db:createTable("vips", {"id", "name", "surname", "money"})
    elseif arg == 2 then
        -- Satır ekleme
        local succes = db:insertRow("vips", {
            id = 1,
            name = args[2],
            surname = args[3],
            money = tonumber(args[4])
        })
    elseif arg == 3 then
        -- Satır güncelleme
        db:updateRow("players", "id", 1, {
            money = 1500
        })
    elseif arg == 4 then
        -- Satır silme
        db:deleteRow("players", "id", 1)
    elseif arg == 5 then
        -- Sorgu yapma ve sonuçları almak
        local result = db:selectRows("vips")
        if result then
            for _, row in ipairs(result) do
                print("ID: " .. row.id)
                print("Name: " .. row.name)
                print("Surname: " .. row.surname)
                print("Money: " .. row.money)
                print("----------------------")
            end
        else
            print("Tablo veya koşul bulunamadı.")
        end
    elseif arg == 6 then
        db:fastSave()
    end
end)
