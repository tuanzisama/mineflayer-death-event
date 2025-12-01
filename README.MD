# mineflayer-death-event

# 🚧 WIP

A plugin for mineflayer that adds death event functionality to Minecraft bots.

## Description

This library extends mineflayer by adding the ability to detect and process player death events in Minecraft. It parses death messages and extracts information about the victim, attacker, and cause of death.

## Installation

```bash
npm install mineflayer-death-event
```

## Usage

```javascript
import mineflayer from "mineflayer";
import { deathEvent } from "mineflayer-death-event";

const bot = mineflayer.createBot({
  host: "127.0.0.1",
  port: 25565,
  username: "bot",
  auth: "offline",
});

bot.loadPlugin(deathEvent({}));

bot.on("message", (jsonMsg, position) => {
  // Death events are automatically processed
  // You can add custom logic here
});
```

## API

### deathEvent(options)

Creates a death event plugin with optional configuration:

- `options.processor`: Custom processor class for handling death messages (defaults to VanillaProcessor)

## Development

- Install dependencies:

```bash
npm install
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm run build
```

- Run the playground example:

```bash
npm run playground
```

## License

MIT