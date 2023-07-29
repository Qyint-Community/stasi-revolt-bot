module.exports = {
  name: "roll",
  description: "Roll the Dice!",
  category: "$\\textsf{\\color{#FF0000}1 | Tools}$",
  execute(message, args) {
    if (!args.length) {
      return message.reply("$\\textsf{\\color{#FFD700}Please enter a valid Number}$ :01H1AYGYHPYZNA2TAGTX7WVVJZ:");
    }
    const max = args[0].toLowerCase();
    if (max === "six") {
      message.reply(":game_die: $\\textsf{\\color{#FFD700}6!}$");
    } else {
      const maxNumber = parseInt(max);
      if (isNaN(maxNumber)) {
        return message.reply("Please enter a valid Number :01H1AYGYHPYZNA2TAGTX7WVVJZ:");
      }
      const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
      message.reply(`:game_die: $\\textsf{\\color{#FFD700}${randomNumber}!}$`);
    }
  },
};
