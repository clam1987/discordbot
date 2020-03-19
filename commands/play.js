module.exports = {
  name: "!play",
  description: "The bot will try and cheer you up.",
  execute(msg, args) {
    msg.channel.send("Playing wake me up");
  }
};
