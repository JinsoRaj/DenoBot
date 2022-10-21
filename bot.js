import { Bot } from "./deps.js";

export const bot = new Bot(Deno.env.get("BOT_TOKEN"));

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Started.."));

//Ping
bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));

// Handle other messages.
bot.on("message", (ctx) => {
    ctx.reply("new message..",{
        reply_to_message_id: ctx.message.message_id
    })
});
