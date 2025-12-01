import type { Bot, BotOptions, Plugin } from "mineflayer";
import type { ChatPosition, DeathEventPluginOption, Nullable } from "./types";
import { VanillaProcessor } from "./processor";

let botInstance: Nullable<Bot> = null;

function getBot(): Nullable<Bot> {
  return botInstance;
}

function deathEvent(pluginOption?: DeathEventPluginOption): Plugin {
  const processor = pluginOption?.processor || VanillaProcessor;

  return (bot: Bot, options: BotOptions) => {
    botInstance = bot;

    bot.once("spawn", () => {
      bot.on("message", (jsonMsg, position: ChatPosition) => {
        const processorInstance = new processor(position, jsonMsg);

        if (!processorInstance.isDeathMessage()) {
          return;
        }

        const attacker = processorInstance.getAttacker();
        const victim = processorInstance.getVictim();
        const reason = processorInstance.getReason();

        processorInstance.getVictim();

        console.info("attacker => ", attacker?.toString());
        console.info("victim => ", victim?.toString());
        console.info("reason => ", reason);
      });
    });
  };
}

export { getBot, deathEvent };
