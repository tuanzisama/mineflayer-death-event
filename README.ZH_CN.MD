# mineflayer-death-event

在 Mineflayer 上报玩家死亡事件.

[![GitHub stars](https://img.shields.io/github/stars/tuanzisama/mineflayer-death-event)](https://github.com/tuanzisama/mineflayer-death-event/stargazers)
[![GitHub license](https://img.shields.io/github/license/tuanzisama/mineflayer-death-event)](https://github.com/tuanzisama/mineflayer-death-event/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/mineflayer-death-event.svg)](https://openbase.io/js/mineflayer-death-event?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/mineflayer-death-event.png)](https://nodei.co/npm/mineflayer-death-event/)

[English Document](./README.MD)

## 安装

```
npm install mineflayer-death-event --save
```

or

```
yarn add mineflayer-death-event
```

## 示例

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
[示例代码](./test/index.js)


## 事件

`mineflayer-death-event` 将在玩家死亡的时候上报一个名称为 `playerDeath` 的事件

### victim

被击杀的玩家. 接口详见 [Entity](#Entity).

### offender

发起攻击的玩家. 接口详见 [Entity](#Entity).

<a name=module-export-contants></a>
模块将会导出两个常量，这样你可以判断 `type` 是玩家或是生物/实体

```javascript
const { DEATH_ENTITY_TYPE_MOB, DEATH_ENTITY_TYPE_PLAYER } = require("mineflayer-death-event");
```

### weapon

击杀的玩家所使用的武器. 接口详见 [Weapon](#Weapon).

### method

被击杀的玩家的死亡方式.

## 接口

### Entity

| 属性 | 类型 | 描述 |
| ------ | ------ | ------ |
| type | String | 玩家或生物/实体 |
| id | String | 玩家/生物/实体 UUID |
| detail | Function | 如果 `type` 不是 ["mob"](#module-export-contants), 将会返回 Mineflayer 的玩家接口对象 [(源)](https://mineflayer.prismarine.js.org/#/api?id=botplayers) |
| raw | Function | 原始值, 来自 [message](https://mineflayer.prismarine.js.org/#/api?id=quotmessagequot-jsonmsg-position) 事件 |

### Weapon

| 属性 | 类型 | 描述 |
| ------ | ------ | ------ |
| assetId | String | 武器的 Minecraft asset ID |
| tag | String | 武器的标签 |
| mame | String | 武器的名字，这通常是被铁砧命名了 |
| raw | Function | 原始值, 来自 [message](https://mineflayer.prismarine.js.org/#/api?id=quotmessagequot-jsonmsg-position) 事件 |
| tagToJSON | Function | 解析并简化武器标签信息 |