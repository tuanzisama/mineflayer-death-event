import type { AbstractBaseProcessor, AbstractDeathEvent } from "../processor/base-processor";

export type ProcessorOptions<T extends Data = Data> = {
  /**
   * Minecraft version, e.g. "1.19.4"
   */
  version: string;

  /**
   * Minecraft major version, e.g. "1.19"
   */
  majorVersion: string;

  /**
   * Minecraft protocol version, e.g. 754
   */
  protocolVersion: number;
} & T;

export type Data = Record<string, any>;

export interface DeathEventPluginOption<T = Data> {
  /**
   * Processor to use for processing death events.
   * Defaults to VanillaProcessor.
   */
  processor?: new (options: ProcessorOptions<T>) => AbstractBaseProcessor<T, AbstractDeathEvent>;

  /**
   * Options to pass to the processor.
   */
  processorOptions?: T;

  /**
   * Whether to enable debug logging.
   * Defaults to false.
   */
  debug?: boolean;
}

export type ChatPosition = "system" | "player" | "action_bar" | string;

export type Nullable<T> = T | null;
