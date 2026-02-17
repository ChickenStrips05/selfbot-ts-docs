<title>Welcome to the selfbot-ts documentation</title>

## Welcome to the `selfbot-ts` docs
Thank you for using selfbot-ts!

Credits to:
- [ChickenStrips05 (Main developer and contributor)](https://github.com/ChickenStrips05)
- [Raynixx (First tester)](https://github.com/x4raynixx)

### Installation
To install selfbot-ts you can use the Node Package Manager command line tool. Run the following command inside of your Node JS project:

```bash
npm install selfbot-ts
```

### Getting started
Here's a ping/pong command example. You can find more examples and code on the [Getting Started](/selfbot-ts-docs/docs/getting-started/) page.

```typescript
const { Client } = require("selfbot-ts") // Import client class from selfbot-ts

const client = new Client("<token>") // Login and initialize client

client.once("READY", async () => {
    console.log(`Logged in as ${client.username}!`)
})

client.on("MESSAGE_CREATE", async (message) => { // /api/Message object
    if (message.content?.toLowerCase() === "ping" && message.author.id !== client.id) {
        await message.reply("Pong!") // built-in Message.reply() method like discord.js
    }
})
```