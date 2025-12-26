ServerEvents.recipes(event => {
    event.remove({ output: 'mekanismgenerators:fission_fuel_assembly' })
    event.recipes.create.mechanical_crafting('9x mekanismgenerators:fission_fuel_assembly',[
        'ODDHUHDDO',
        'ODDHUHDDO',
        'ODDBUBDDO',
        'ODDUUUDDO',
        'ODDUJUDDO',
        'ODDUUUDDO',
        'ODDBUBDDO',
        'ODDHUHDDO',
        'ODDHUHDDO'
    ], {
        O:'mekanism:ingot_steel',
        D:'mekanism:ingot_lead',
        H:'create:fluid_tank',
        U:'mekanism:ingot_uranium',
        B:'create:portable_fluid_interface',
        J:'mekanism:ultimate_chemical_tank'

    })
})