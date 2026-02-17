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

### [Getting Started](/selfbot-ts-docs/docs/getting-started/)
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

### Source & other links
You can find the source code of this module at [https://github.com/ChickenStrips05/selfbot-ts](https://github.com/ChickenStrips05/selfbot-ts).
The NPM package can be found at [https://www.npmjs.com/package/selfbot-ts](https://www.npmjs.com/package/selfbot-ts).
Some data structures were made by the [Discord Userdoccers](https://github.com/discord-userdoccers) and their doccumentations helped create this project.

### Getting a Discord User token
To get your Discord User token:
1. Go in the Discord desktop app or on the [web app](https://discord.com/channels/@me)
2. Open the developer tools (ctrl+shift+I) and head to the network/requests tab
3. Make any request (opening a channel, sending a message, reacting)
4. Inspect that request and find and copy the Authorization http header. 
**DO NOT SHARE THIS TOKEN OR ANY SCREENSHOTS OF A REQUEST.**

### Safety
- **NEVER** share your account token with anyone else, as they will be able to impersonate you, bypassing mfa.
- Use selfbot-ts on an alt account. This module is not guaranteed to be undetected by Discord.
- Beware of unofficial/malicious packages that may have similar names to `selfbot-ts`.
- Be careful when programming your selfbot. Make sure not to leak raw stack traces, objects and internal classes.
- When uploading your code to GitHub, make sure to add your `.env` file to `.gitignore`.