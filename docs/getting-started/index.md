<title>Getting started</title>

## Getting started
This guide will teach you about:
- Information about selfbots
- How to set up your own selfbot
- The main Client class and all it's properties
- How to make complex bots
- Reporting bugs and contributing

### What is a "selfbot"?
A selfbot is an automated script that uses a normal Discord account instead of an official bot.
They directly interact through APIs and the Discord gateway instead of through a chat interface first.
Unfortunately, selfbots are mostly used for scraping/saving messages and sending scam links.
So, automating user accounts is forbidden as per [this Discord article](https://support.discord.com/hc/en-us/articles/115002192352-Automated-User-Accounts-Self-Bots)

### Why use a selfbot instead of a normal bot?
They have access to user-only features (video/screen sharing, DMs, accessing guilds where bots are not allowed).
They can be simpler and require less setup than a normal bot. You can code a selfbot quickly and deploy it in any server almost instantly.

### How to use `selfbot-ts`
[Install the package with npm](/selfbot-ts-docs/)

And then import the main Client class in your code:

```typescript
import { Client } from "selfbot-ts"
```

The Client logs in and maintains the gateway connection. It handles heartbeats, sending and recieving packets as well as sending API http requests.
The Client will emit a `CONNECT` event when it recieves the "hello" packet from the Discord gateway, and a `READY` event when it's logged in successfully and the Client is ready to be used.

```typescript
client.once("READY", () => {
    console.log(`Logged in as ${client.username} (${client.id})`)
})
```