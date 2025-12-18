import { getBot } from ".";
import { isUUID } from "./utils";

interface EntityOptions {
  uuid?: string;
  name?: string;
  id?: string;
}

class Entity {
  private options: EntityOptions;

  constructor(options: EntityOptions) {
    this.options = options;

    if ((options.uuid && !isUUID(options.uuid)) || !options.name) {
      // try to get name from uuid
      const entity = this.getEntity();
      if (entity) {
        this.options.uuid = entity.uuid;
        if (!options.name) {
          // if name is not provided, set it from entity name
          this.options.name = entity.name;
        }
      }
    }
  }

  get uuid() {
    return this.options.uuid;
  }

  get name() {
    return this.options.name;
  }

  get id() {
    return this.options.id;
  }

  /**
   * Check if entity is player
   * @returns True if entity is player, otherwise false
   */
  isPlayer() {
    return this.id === "minecraft:player";
  }

  isNearest() {
    return this.getEntity() !== null;
  }

  /**
   * Get player from bot
   * @returns Player or null
   */
  getPlayer() {
    const bot = this.getBot();
    return bot.players[this.name as string] || null;
  }

  /**
   * Get entity from bot
   * @returns Entity or null
   */
  getEntity() {
    const bot = this.getBot();

    if (this.isPlayer()) {
      return this.getPlayer().entity || null;
    }

    if (this.uuid && isUUID(this.uuid)) {
      return Object.values(bot.entities).find((entity) => entity.uuid === this.uuid) || null;
    }

    if (this.name) {
      return Object.values(bot.entities).find((entity) => entity.name === this.name) || null;
    }

    return null;
  }

  private getBot() {
    const bot = getBot();
    if (!bot) {
      throw new Error("Bot is not initialized.");
    }

    return bot;
  }

  toString() {
    return `Entity{uuid=${this.uuid}, name=${this.name}, id=${this.id}}`;
  }
}

export { Entity };
