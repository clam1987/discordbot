const dispatcher = bot.play('../music/Avicii-Wake-Me-Up.mp3');


module.exports = {
    name: "!skip",
    description: "Used to skip music.",
    execute(msg, args) {
        // msg.reply('Hello!');
        msg.channel.send(dispatcher.destroy());
    },
};