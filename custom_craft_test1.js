ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:steel_casing' })
    event.remove({ output: 'mekanism:teleportation_core' })
    event.remove({ output: 'mekanism:advanced_control_circuit' })
    event.remove({ output: 'mekanism:energy_tablet' })
    event.remove({ output: 'mekanism:mekasuit_helmet' })
    event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
    event.remove({ output: 'mekanism:mekasuit_pants' })
    event.remove({ output: 'mekanism:mekasuit_boots' })
    event.shaped(
        Item.of('mekanism:steel_casing', 1),
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: '#forge:glass/silica',
            B: 'mekanism:ingot_steel',
            C: 'create:precision_mechanism'
        }
    )
    event.shaped(
        Item.of('mekanism:teleportation_core', 1),
        [
            'BAB',
            'FCF',
            'BAB'
        ],
        {
            A: 'mekanism:alloy_atomic',
            B: 'minecraft:lapis_lazuli',
            F: 'minecraft:gold_ingot',
            C: 'create_things_and_misc:radar'
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_control_circuit', 1),
        [
            'FCF',
            'ABA',
            'FCF'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:basic_control_circuit',
            F: 'createaddition:gold_spool',
            C: 'createaddition:electrum_sheet'
        }
    )
    event.shaped(
        Item.of('mekanism:energy_tablet', 1),
        [
            'QZQ',
            'TZT',
            'QZQ'
        ],
        {
            Q: 'minecraft:redstone',
            T: 'mekanism:alloy_infused',
            Z: 'createaddition:capacitor'
        }
    )
    event.shaped(
        Item.of('mekanism:mekasuit_helmet', 1),
        [
            'ABA',
            'CQC',
            'IJI'
        ],
        {
           A:'createaddition:electric_motor',
           B:'mekanism:ultimate_control_circuit',
           C:'mekanism:hdpe_sheet',
           Q:'minecraft:netherite_helmet',
           I:'mekanism:pellet_polonium',
           J:'mekanism:basic_induction_cell'
        }
    )
    event.shaped(
        Item.of('mekanism:mekasuit_bodyarmor', 1),
        [
            'ABA',
            'CQC',
            'IJI'
        ],
        {
            A:'createaddition:electric_motor',
            B:'mekanism:ultimate_control_circuit',
            C:'mekanism:hdpe_sheet',
            Q:'minecraft:netherite_chestplate',
            I:'mekanism:pellet_polonium',
            J:'mekanism:basic_induction_cell'
        }
    )
    event.shaped(
        Item.of('mekanism:mekasuit_pants', 1),
        [
            'ABA',
            'CQC',
            'IJI'
        ],
        {
            A:'createaddition:electric_motor',
            B:'mekanism:ultimate_control_circuit',
            C:'mekanism:hdpe_sheet',
            Q:'minecraft:netherite_leggings',
            I:'mekanism:pellet_polonium',
            J:'mekanism:basic_induction_cell'
        }
    )
    event.shaped(
        Item.of('mekanism:mekasuit_boots', 1),
        [
            'ABA',
            'CQC',
            'IJI'
        ],
        {
            A:'createaddition:electric_motor',
            B:'mekanism:ultimate_control_circuit',
            C:'mekanism:hdpe_sheet',
            Q:'minecraft:netherite_boots',
            I:'mekanism:pellet_polonium',
            J:'mekanism:basic_induction_cell'
        }
    )

})