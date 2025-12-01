import { ChatMessage } from "prismarine-chat";
import type { ChatPosition, Nullable } from "../types";
import type { Entity } from "../entity";

export class BaseProcessor implements IProcessor {
  constructor(public position: ChatPosition, public jsonMsg: ChatMessage) {}

  isDeathMessage(): boolean {
    throw new Error("Method not implemented.");
  }

  getAttacker(): Nullable<Entity> {
    throw new Error("Method not implemented.");
  }

  getVictim(): Nullable<Entity> {
    throw new Error("Method not implemented.");
  }

  getReason(): Nullable<string> {
    throw new Error("Method not implemented.");
  }
}

export interface IProcessor {
  /**
   * Check if the message is a death message.
   */
  isDeathMessage(): boolean;

  /**
   * Get the attacker name from the message.
   */
  getAttacker(): Nullable<Entity>;

  /**
   * Get the victim name from the message.
   */
  getVictim(): Nullable<Entity>;

  /**
   * Get the reason from the message.
   */
  getReason(): Nullable<string>;
}
