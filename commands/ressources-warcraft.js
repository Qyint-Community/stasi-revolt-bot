const SympactEmbedBuilder = require("../lib/EmbedBuilder");

module.exports = {
  name: "warcraft",
  description: "Warcraft Ressources",
  category: "$\\textsf{\\color{#FF0000}2 | Ressources}$",
  async execute(message, args) {
    const embed = new SympactEmbedBuilder()
      .setTitle("This Embed was brought to you by the Ministry of State Security")
      .setColor("#FF0000")
      .setDescription("# :01H3D1ZQXBK5JZEC0AR269HQCS:\ncoming soon™\n## [Warcraft Server](https://rvlt.gg/0g6NZz3n)")

    message.reply({ embeds: [embed] });
  },
};
