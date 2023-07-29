module.exports = {
  name: "coin",
  description: "Flip a Coin!",
  category: "$\\textsf{\\color{#FF0000}1 | Tools}$",
  execute(message, args) {
    if (!args.length) {
      const coinSide = Math.random() < 0.5 ? "Kopf" : "Zahl";
      return message.reply(`:coin: $\\textsf{\\color{#FFD700}${coinSide}!}$`);
    }
    const max = args[0].toLowerCase();
    if (max === "flip") {
      message.reply(":coin: $\\textsf{\\color{#FFD700}Kopf!}$");
    }
  },
};
