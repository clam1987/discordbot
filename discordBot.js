// Discord Dependancies
const Discord = require('discord.js');
const bot = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.botID;
// creating new commands
bot.commands = new Discord.Collection();
const botCommands = require("./commands")

// Mapping the commands
Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
})

// Bot to listen
bot.once('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});
// Bot command to reply to messages
bot.on("message", msg => {
    // split content by white spaces
    const args = msg.content.split(/ +/);
    // assuming the first args in our array is the command
    // using shift we take the first element and we remove it form the original array
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