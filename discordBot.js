const Discord = require('discord.js');
const bot = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();

const token = process.env.botID;

// client.on('ready', () => {
//     console.log("Connected as " + client.user.tag)
//     // List servers the bot is connected to
//     console.log("Servers:")
//     client.guilds.forEach((guild) => {
//         console.log(" - " + guild.name)
//     })
// })

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    // console.log(client.guilds.cache);
    // client.guilds
    // List servers the bot is connected to
    // console.log("Servers:")
    // client.guilds.forEach((guild) => {
    //     console.log(" - " + guild.name)

    //     // List all channels
    //     guild.channels.forEach((channel) => {
    //         console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
    //     })
    // })
});

bot.on("message", msg => {
    if (msg.content === "how do you") {
        msg.reply('Google it');
        msg.channel.send('Google it');
    } else if (msg.content.startsWith("!kick")) {
        if (msg.mentions.users.size) {
            const taggedUser = msg.mentions.users.first();
            msg.channel.send(`You want to kick: ${taggedUser.username}`);
        } else {
            msg.reply("Please tag a valid user!");
        }
    }
});
// console.log(client.guilds);

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"


bot.login(token);