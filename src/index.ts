import type { Bot, Plugin } from "mineflayer";
import type { ChatPosition, Data, DeathEventPluginOption, Nullable, ProcessorOptions } from "./types";
import { VanillaProcessor } from "./processor";
import type { ChatMessage } from "prismarine-chat";
import { AbstractDeathEvent } from "./processor/base-processor";
import { Logger } from "./utils/logger";

declare module 'mineflayer' {
  interface BotEvents {
    playerDeath: (data: AbstractDeathEvent) => void;
  }
}

let botInstance: Nullable<Bot> = null;

function getBot(): Nullable<Bot> {
  return botInstance;
}

function deathEventPlugin<T extends Data>(pluginOption?: DeathEventPluginOption<T>): Plugin {
  const processor = pluginOption?.processor || VanillaProcessor;

  const logger = new Logger(pluginOption?.debug || false);

  return (bot: Bot) => {
    botInstance = bot;

    const processorInstance = new processor({
      ...pluginOption?.processorOptions,
      version: bot.version,
      majorVersion: bot.majorVersion,
      protocolVersion: parseInt(bot.protocolVersion),
    } as ProcessorOptions<T>);

    logger.print(`Processor: ${processorInstance.getIdentifer()} (by ${processorInstance.getAuthor()})`);

    bot.once("spawn", () => {
      bot.on("message", (jsonMsg: ChatMessage, position: ChatPosition) => {
        try {
          const deathEvent = processorInstance.parse(position, jsonMsg);

          if (!deathEvent.isValidEvent()) {
            return;
          }

          bot.emit("playerDeath", deathEvent);
        } catch (error) {
          logger.error("Error while parsing death message:", error);
        }
      });
    });
  };
}

export { getBot, deathEventPlugin, AbstractDeathEvent as DeathEvent };
