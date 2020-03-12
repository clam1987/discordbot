module.exports = {
    name: "?how",
    description: "Command to search stack overflow using the stack exchange api to grab results and returns results page. For now just returns Corrado telling you to google it.",
    execute(msg, args) {
        msg.reply('Corrado told me to tell you to Google it');
        msg.channel.send('Corrado told me to tell you to Google it');
    },
};