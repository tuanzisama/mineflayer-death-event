const mineflayer = require("mineflayer");
const deathEvent = require("../");
const { DEATH_ENTITY_TYPE_MOB, DEATH_ENTITY_TYPE_PLAYER } = require("../");

const bot = mineflayer.createBot({
    host: "127.0.0.1",
    port: "25566",
    username: "testbot",
});

bot.loadPlugin(deathEvent);

bot.once("spawn", () => {
    bot.chat("Hi, everyone!");
});

bot.on("playerDeath", (data) => {
    console.log(data);
    if (data.victim) {
        console.info('victim => ', data.victim.detail());
    }
    if (data.offender) {
        console.info('offender => ', data.offender.detail());
    }
    if (data.weapon) {
        console.info('weapon => ', data.weapon.tagToJSON());
    }
});
