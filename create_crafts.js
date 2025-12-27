ServerEvents.recipes(event => {
    event.remove({ output: 'mekanismgenerators:fission_fuel_assembly' })
    event.remove({ output: 'mekanismgenerators:control_rod_assembly' })
    event.remove({ output: 'mekanismgenerators:fission_reactor_casing' })
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
    event.recipes.create.mechanical_crafting('9x mekanismgenerators:control_rod_assembly',[
        'OXOXOXOXO',
        'OHOHOHOHO',
        'OHOHJHOHO',
        'OYOYOYOYO',
        'OYJYJYJYO',
        'OYOYOYOYO',
        'OYOYJYOYO',
        'OYOYOYOYO',
        'OZOZOZOZO'
    ], {
        X:'create:mechanical_pump',
        O:'mekanism:ingot_lead',
        H:'create:fluid_pipe',
        Y:'create:piston_extension_pole',
        Z:'create:mechanical_piston',
        J:'mekanism:ultimate_control_circuit'

    })
    event.recipes.create.mechanical_crafting('81x mekanismgenerators:fission_reactor_casing',[
        'OOOOOOOOO',
        'OJJJJJJJO',
        'OJOOOOOJO',
        'OJOOWOOJO',
        'OJOWWWOJO',
        'OJOOWOOJO',
        'OJOOOOOJO',
        'OJJJJJJJO',
        'OOOOOOOOO'
    ], {
        O:'minecraft:polished_granite',
        J:'minecraft:obsidian',
        W:'mekanism:steel_casing'

    })
})