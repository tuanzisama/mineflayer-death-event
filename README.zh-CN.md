<div align="center">

# mineflayer-death-event

为 Mineflayer 提供 `playerDeath` 事件。

可插拔解析器：支持自定义死亡消息解析。

<a href="https://www.npmjs.com/package/mineflayer-death-event"><img alt="npm" src="https://img.shields.io/npm/v/mineflayer-death-event?color=2563eb" /></a> <a href="https://www.npmjs.com/package/mineflayer-death-event"><img alt="downloads" src="https://img.shields.io/npm/dm/mineflayer-death-event" /></a> <a href="./package.json"><img alt="license" src="https://img.shields.io/npm/l/mineflayer-death-event" /></a> <img alt="mineflayer" src="https://img.shields.io/badge/mineflayer-%5E4.x-16a34a" />

<a href="./README.md">English</a> · 简体中文

</div>

## 简介

`mineflayer-death-event` 是一个 Mineflayer 插件：通过解析死亡提示消息，触发 `playerDeath` 事件。

本项目的核心是“可插拔解析器”（策略模式）：你可以替换内置解析器，用来适配不同服务器、不同语言或自定义死亡提示格式。

## 安装

```bash
npm i mineflayer-death-event
```

## 用法

```js
import mineflayer from "mineflayer";
import { deathEventPlugin } from "mineflayer-death-event";

const bot = mineflayer.createBot({
  host: "127.0.0.1",
  port: 25565,
  username: "bot"
});

bot.loadPlugin(deathEventPlugin());

bot.on("playerDeath", (event) => {
  console.log({
    victim: event.getVictim()?.name,
    attacker: event.getAttacker()?.name,
    reason: event.getReason(),
    weapon: event.getWeapon()?.toString?.(),
  });
});
```

## 开发

```bash
pnpm i
pnpm build
pnpm typecheck
pnpm playground
```

## 许可证

MIT
