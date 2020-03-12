module.exports = {
    name: "?how",
    description: "Ping!",
    execute(msg, args) {
        msg.reply('Corrado told me to tell you to Google it');
        msg.channel.send('Corrado told me to tell you to Google it');
    },
};