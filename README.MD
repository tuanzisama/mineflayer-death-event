# mineflayer-death-event

Emit player death event in Mineflayer.

[![GitHub stars](https://img.shields.io/github/stars/tuanzisama/mineflayer-death-event)](https://github.com/tuanzisama/mineflayer-death-event/stargazers)
[![GitHub license](https://img.shields.io/github/license/tuanzisama/mineflayer-death-event)](https://github.com/tuanzisama/mineflayer-death-event/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/mineflayer-death-event.svg)](https://openbase.io/js/mineflayer-death-event?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/mineflayer-death-event.png)](https://nodei.co/npm/mineflayer-death-event/)

[简体中文 文档](./README.ZH_CN.MD)

## Install

```
npm install mineflayer-death-event --save
```

or

```
yarn add mineflayer-death-event
```

## Example

```javascript
const mineflayer = require("mineflayer")
const autoeat = require("mineflayer-death-event")

const bot = mineflayer.createBot({
  host: "mc.example.com",
  username: "testbot"
})

// Load the plugin
bot.loadPlugin(autoeat)

bot.on("playerDeath", (data) => {
    console.log(data);
});

```
[Example Code](./test/index.js)


## Event

`mineflayer-death-event` will emit a event when player die. The event name is `playerDeath`.

### victim

Attacker. Interface see [Entity](#Entity).

### offender

The player being attacked. Interface see [Entity](#Entity).

<a name=module-export-contants></a>
module will export two constants. You can Determine the type of variable "`type`"

```javascript
const { DEATH_ENTITY_TYPE_MOB, DEATH_ENTITY_TYPE_PLAYER } = require("mineflayer-death-event");
```

### weapon

The weapon used to kill the attacked player. Interface see [Weapon](#Weapon).

### method

offender death method.

## Interface

### Entity

| property | type | description |
| ------ | ------ | ------ |
| type | String | Is player or mob/entity |
| id | String | Player UUID |
| detail | Function | If type not is ["mob"](#module-export-contants), then will return Mineflayer player interface [(source)](https://mineflayer.prismarine.js.org/#/api?id=botplayers) |
| raw | Function | Original value, from [message](https://mineflayer.prismarine.js.org/#/api?id=quotmessagequot-jsonmsg-position) event |

### Weapon

| property | type | description |
| ------ | ------ | ------ |
| assetId | String | Weapon's Minecraft asset ID |
| tag | String | Weapon's tag |
| mame | String | Weapon's mame, This is usually named after the anvil |
| raw | Function | Original value, from [message](https://mineflayer.prismarine.js.org/#/api?id=quotmessagequot-jsonmsg-position) event |
| tagToJSON | Function | Parse and simplify weapon tag |