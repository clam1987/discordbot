const Discord = require('discord.js');
const bot = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.botID;
bot.commands = new Discord.Collection();
const botCommands = require("./commands")

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
})

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`Called command: ${command}`);

    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.log(error);
        msg.reply('There was an error trying to excute that command!');
    }
});

bot.login(token);