
EntityEvents.update(event => {
    const bee = event.entity;


    if (bee.type == 'minecraft:bee') {
        const level = bee.level;

        if (!level.isDay() || level.isRaining() || level.isThundering()) {

            bee.setNoAi(false);


        }
    }
});
