import type { VanillaProcessor } from "../processor";
import { BaseProcessor } from "../processor/base-processor";

export interface DeathEventPluginOption {
  processor?: typeof BaseProcessor;
}

export type ChatPosition = "system" | "player" | "action_bar" | string;

export type Nullable<T> = T | null;
