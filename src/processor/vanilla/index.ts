import type { ChatMessage } from "prismarine-chat";
import { BaseProcessor } from "../base-processor";
import type { ChatPosition, Nullable } from "../../types";
import { Entity } from "../../entity";

class VanillaProcessor extends BaseProcessor {
  constructor(position: ChatPosition, jsonMsg: ChatMessage) {
    super(position, jsonMsg);
  }

  isDeathMessage(): boolean {
    return this.position === "system";
  }

  getAttacker(): Nullable<Entity> {
    const { uuid, name, id } = this.getEntityInfo(this.jsonMsg.json?.with?.[1]);
    return uuid ? new Entity({ uuid, name, id }) : null;
  }

  getVictim(): Nullable<Entity> {
    const { uuid, name, id } = this.getEntityInfo(this.jsonMsg.json?.with?.[0]);
    return uuid ? new Entity({ uuid, name, id }) : null;
  }

  getReason(): Nullable<string> {
    return this.jsonMsg.translate ?? null;
  }

  private getEntityInfo(jsonMsg: { insertion?: string; text?: string; hover_event?: { id?: string } }) {
    if (!jsonMsg) {
      return { uuid: null, name: null, id: null };
    }

    const uuid = jsonMsg?.insertion;
    const name = jsonMsg?.text;
    const id = jsonMsg?.hover_event?.id;
    return { uuid, name, id };
  }
}

export { VanillaProcessor };
