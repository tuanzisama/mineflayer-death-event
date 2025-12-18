import type { ChatMessage } from "prismarine-chat";
import type { ChatPosition, Data, Nullable, ProcessorOptions } from "../types";
import type { Entity } from "../entity";

/**
 * Base class for processors.
 */
abstract class AbstractBaseProcessor<T extends Data, DE extends AbstractDeathEvent> {
  constructor(public options: ProcessorOptions<T>) {
  }

  /**
   * Identifier of the processor.
   */
  getIdentifer(): string {
    throw new Error("Method not implemented.");
  }

  /**
   * Author of the processor.
   */
  getAuthor(): string {
    throw new Error("Method not implemented.");
  }

  /**
   * Parse the message and return the death event.
   * @param position The position of the message.
   * @param jsonMsg The `Mojangson` message.
   * @returns The death event if the message is a death message, otherwise null.
   */
  parse(position: ChatPosition, jsonMsg: ChatMessage): DE {
    throw new Error("Method not implemented.");
  }
}

/**
 * Base class for death events.
 */
abstract class AbstractDeathEvent {
  constructor(public position: ChatPosition, public jsonMsg: ChatMessage) {}

  /**
   * Check if the message is a valid death event.
   */
  isValidEvent(): boolean {
    throw new Error("Method not implemented.");
  }

  /**
   * Get the attacker name from the message.
   */
  getAttacker(): Nullable<Entity> {
    throw new Error("Method not implemented.");
  }

  /**
   * Get the victim name from the message.
   */
  getVictim(): Nullable<Entity> {
    throw new Error("Method not implemented.");
  }

  /**
   * Get the reason from the message.
   */
  getWeapon(): Nullable<string> {
    throw new Error("Method not implemented.");
  }

  /**
   * Get the reason from the message.
   */
  getReason(): Nullable<string> {
    throw new Error("Method not implemented.");
  }

  /**
   * Check if the death event occurred near the bot.
   * @returns True if the death event occurred near the bot, otherwise false.
   */
  isNearest(): boolean {
    const victim = this.getVictim();
    if (!victim) {
      return false;
    }

    return victim.isNearest();
  }
}

export { AbstractBaseProcessor, AbstractDeathEvent };
