module.exports = {
    name: "?hello",
    description: "The bot says hello.",
    execute(msg, args) {
        msg.reply('Hello!');
        msg.channel.send('And hello to everyone else');
    },
};