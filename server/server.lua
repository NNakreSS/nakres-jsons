RegisterServerEvent("opensql")
AddEventHandler("opensql", function()
    local src = source
    TriggerClientEvent("opensql", src, databases)
end)

RegisterServerEvent("nakres-jsons:loadDatabase")
AddEventHandler("nakres-jsons:loadDatabase", function(jsonName)
    local src = source
    if not  databases[jsonName] then
        local res = loadDatabase(jsonName)
        while not res do
            Citizen.Wait(500)
        end
    end
    TriggerClientEvent("nakres-jsons:loadDatabase", src, databases[jsonName])
end)
