ServerEvents.recipes(event => {
    event.remove({ output: 'mekanismgenerators:control_rod_assembly' })
    event.recipes.create.mechanical_crafting('9x mekanism:steel_casing',[
        'OXOXOXOXO',
        'OLOLOLOLO',
        'OLOLJLOLO',
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
        z:'create:mechanical_piston',
        J:'mekanism:ultimate_control_circuit'

    })
})