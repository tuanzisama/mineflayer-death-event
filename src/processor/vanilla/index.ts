import type { ChatMessage } from "prismarine-chat";
import { AbstractBaseProcessor, AbstractDeathEvent } from "../base-processor";
import type { ChatPosition, Data, Nullable } from "../../types";
import { Entity } from "../../entity";
import { Item } from "../../item";

class VanillaProcessor<T extends Data> extends AbstractBaseProcessor<T, VanillaDeathEvent> {
  getIdentifer(): string {
    return "Vanilla (Built-in)";
  }

  getAuthor(): string {
    return "@tuanzisama";
  }

  parse(position: ChatPosition, jsonMsg: ChatMessage): VanillaDeathEvent {
    return new VanillaDeathEvent(position, jsonMsg);
  }
}

class VanillaDeathEvent extends AbstractDeathEvent {
  constructor(position: ChatPosition, jsonMsg: ChatMessage) {
    super(position, jsonMsg);
  }

  isValidEvent(): boolean {
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

  getWeapon(): Nullable<any> {
    if (this.getReason()?.endsWith("item")) {
      // killed by item.
      const jsonMsg = this.jsonMsg.json?.with?.find((item: ChatMessage) => item.translate === "chat.square_brackets");
      if (jsonMsg.hover_event) {
        return new Item(jsonMsg);
      } else {
        return null;
      }
    }
    return null;
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
