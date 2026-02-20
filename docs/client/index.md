<title>Client - selfbot-ts</title>

## The core Client class
| Value | Type | Description |
| --- | --- | --- |
| connected | boolean | Whether the client has connected to the Discord Gateway |
| ready | boolean | Whether the client has successfully authenticated to the gateway |
| token | string | The user login token |
| debug | boolean | If debug mode is enabled ( Logs all recieved events ) |
| ws_connection | [WebSocket](https://www.npmjs.com/package/ws) | The WS connection used for the Discord GateWay |
| heartbeat_interval | number | The heartbeat event interval that Discord specified. Fires a `HEARTBEAT_SENT` and `HEARTBEAT_RECIEVED` event. |
| id | string | User Id of the client |
| username | string | Username of the client |
| globalName | string | The client's display name. null if none set |
| email | string | The client's email address |
| verified | boolean | Whether the email has been verified |
| discriminator | string | Deprecated user discriminator. defaults to 0 |
| bio | string | The clients's bio. null if not set |
| avatar | string | The clients's avatar hash |
| sessionId | string | Session Id used for restarting sessions |
| lastSequenceNumber | number | Last GateWay event sequence |
| Rest | Rest | Rest object used for http requests. |
| guildSubscriptions | GuildSubscriptions | Guild subscriptions object, storing the guilds that the client is listening to |

## Methods

### `avatarUrl(format, size)`

`format` - The image format to request (default: "webp")
`size` - The image size to request (default: largest)

Returns a Discord CDN url for the client's avatar image.

---

### `subscribeToGuild(guildId, GuildSubscriptionOptions)`

`guildId` - The guild to subscribe to.
`GuildSubscriptionOptions` - [type](https://github.com/ChickenStrips05/selfbot-ts/blob/main/src/Types.ts#L261)

Listen to a guild's activity by subscribing to a guild.

---

### `unsubscribeFromGuild(guildId)`

`guildId` - The guild to unsubscribe from

Stop listening to a guild's activity.

---

### `clearGuildSubscriptions()`

Stop listening to activity from all guilds.

---

### `getAllUserChannels()`

Returns an array of [DM Channels](/selfbot-ts-docs/docs/dm-channel).

---

### `getChannel(channelId)`

`channelId` -  The channel to fetch.

Returns a Channel if the [type is currently supported](/selfbot-ts-docs/docs/supported-channel-types).

---

### `getUserRelationships()`

⚠️ Probably not permanant and will be replaced with a class.
Returns an array of [Relationship](https://github.com/ChickenStrips05/selfbot-ts/blob/main/src/Types.ts#L164) objects.

---

### `getUserGuilds()`

Returns an array of [UserGuilds](/selfbot-ts-docs/docs/user-guild) (partial guilds).

---

### `getGuild(guildId, withCounts)`

`guildId` - The guild to fetch
`withCounts` - Whether the guild object should include approximate member and presence counts (default: true)

Returns a [Guild](/selfbot-ts-docs/docs/) object.

---

### `sendTypingIndicator(channelId)`

`channelId` - The channel to send the typing indicator to

---

### `sendMessage(channelId, options)`

`channelId` - The channel to send a message to
`options` - [MessageSendOptions](https://github.com/ChickenStrips05/selfbot-ts/blob/main/src/Types.ts#L137)

Returns a [Message](/selfbot-ts-docs/docs/message) object.

---

### `deleteMessage(channelId, messageId)`

`channelId` - The channel of the message to delete
`messageId` - The message to delete

Requires `MANAGE_MESSAGES` permission to delete messages the client didn't send.

---

### `updateMessage(channelId, messageId, content)`

`channelId` - The channel of the message to update
`messageId` - The message to update
`content` - The new content of the message

⚠️ This will probably be updated in the future to use an options parameter instead.
Returns the new message.

---

### `getMessages(channelId, limit)`

`channelId` - The channel to fetch messages from
`limit` - The max number of messages to fetch (max: 100, default: 30)

Returns an array of [Message](/selfbot-ts-docs/docs/message) objects.

---

***UNFINISHED, THIS IS SO BORING***