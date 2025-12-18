/**
 * Logger class for logging messages with different log levels.
 */
class Logger {
  private static TAG = `[DeathEvent]`;
  private debug: boolean;

  constructor(debug: boolean) {
    this.debug = debug;
  }

  /**
   * Print a message to the console (bypass debug mode).
   * @param messages Messages to print
   */
  print(...messages: any[]) {
    console.log(Logger.TAG, ...messages);
  }

  info(...messages: any[]) {
    if (this.debug) {
      console.info(Logger.TAG, `[${LogLevel.INFO}]`, ...messages);
    }
  }

  warn(...messages: any[]) {
    if (this.debug) {
      console.warn(Logger.TAG, `[${LogLevel.WARN}]`, ...messages);
    }
  }

  error(...messages: any[]) {
    if (this.debug) {
      console.error(Logger.TAG, `[${LogLevel.ERROR}]`, ...messages);
    }
  }
}

/**
 * Log levels for the Logger class.
 */
const LogLevel = {
  INFO: "INFO",
  WARN: "WARN",
  ERROR: "ERROR",
} as const;

export { Logger, LogLevel };
