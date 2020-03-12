// Random Quotes to cheer coders up
const cheerQuotes = ["“Computer science is a liberal art.” - Steve Jobs", 
"“Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.” - Linus Torvalds (Software Engineer)",
"“Coding gives everyone really (not just young people) tools to express themselves in cool and creative ways… It’s as easy as learning a language.” - Marily Nika",
"“Don’t worry if it doesn’t work right [when coding]. If everything did, you’d be out of a job.” - Mosher’s Law of Software Engineering"
];
// Randomize function
const randomQuote = () => {
    return chosenQuote = cheerQuotes[Math.floor(Math.random() * cheerQuotes.length)];
}

module.exports = {
    name: "!cheerup",
    description: "The bot will try and cheer you up.",
    execute(msg, args) {
        // msg.reply('Hello!');
        msg.channel.send(randomQuote());
    },
};