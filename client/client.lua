RegisterCommand("opensql", function()
    TriggerServerEvent("opensql")
end)

RegisterNetEvent("opensql", function(data)
    SetNuiFocus(true,true)
    SendNUIMessage({
        type = "ui",
        databases = data
    })
end)

RegisterNUICallback("closesql", function()
    SetNuiFocus(false,false)
end)