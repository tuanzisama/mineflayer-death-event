import mineflayer from "mineflayer";
import { deathEventPlugin } from "../dist/index.mjs";
import { VanillaProcessor } from "../dist/processor/vanilla/index.mjs";

const bot = mineflayer.createBot({
  host: "127.0.0.1",
  port: 26000,
  username: "testbot",
  auth: "offline",
});

bot.loadPlugin(
  deathEventPlugin({
    processor: VanillaProcessor,
    processorOptions: {
      pass_parameter: "1",
    },
    debug: true,
  })
);

bot.on("login", () => {
  console.info("login");
});

bot.on("error", (err) => {
  console.info("error", err);
});

bot.once("spawn", () => {
  bot.chat("Hi, everyone!");
});

bot.on("playerDeath", (deathEvent) => {
  const attacker = deathEvent.getAttacker();
  const victim = deathEvent.getVictim();
  const reason = deathEvent.getReason();
  const weapon = deathEvent.getWeapon();

  console.info("attacker => ", attacker?.toString());
  console.info("victim => ", victim?.toString());
  console.info("reason => ", reason);
  console.info("weapon => ", weapon?.toString());

  // if (data.victim) {
  //   console.info("victim => ", data.victim.detail());
  // }
  // if (data.offender) {
  //   console.info("offender => ", data.offender.detail());
  // }
  // if (data.weapon) {
  //   console.info("weapon => ", data.weapon.tagToJSON());
  // }
});