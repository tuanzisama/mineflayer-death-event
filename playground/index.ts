import mineflayer from "mineflayer";
import { deathEvent } from "mineflayer-death-event";

const bot = mineflayer.createBot({
  host: "127.0.0.1",
  port: 26000,
  username: "testbot",
  auth: "offline",
});

bot.loadPlugin(deathEvent({}));

bot.on("login", () => {
  console.info("login");
});

bot.on("error", (err) => {
  console.info("error", err);
});

bot.once("spawn", () => {
  bot.chat("Hi, everyone!");
});

// bot.on("playerDeath", (data) => {
//   console.log(data);
//   if (data.victim) {
//     console.info("victim => ", data.victim.detail());
//   }
//   if (data.offender) {
//     console.info("offender => ", data.offender.detail());
//   }
//   if (data.weapon) {
//     console.info("weapon => ", data.weapon.tagToJSON());
//   }
// });

// import { expect, test } from 'vitest'
// import { fn } from '../src'

// test('fn', () => {
//   expect(fn()).toBe('Hello, tsdown!')
// })
