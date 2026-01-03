
    EntityEvents.tick(event => {
    let entity = event.entity;

    if (entity.type == 'minecraft:bee') {

        entity.persistentData.activeOverride = true;

        if (event.level.isRaining() || event.level.isThundering() || !event.level.isDay()) {

            entity.setNoAi(false);
            entity.setSprinting(true);
        }
    }
})
