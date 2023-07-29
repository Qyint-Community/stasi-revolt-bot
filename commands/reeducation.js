const SympactEmbedBuilder = require("../lib/EmbedBuilder");

module.exports = {
  name: "reeducation",
  description: "Send a User to Re-education!",
  category: "$\\textsf{\\color{#FF0000}2 | Ressources}$",
  execute(message, args) {
    const embedType = args[0] ? args[0].toLowerCase() : "default";

    const embeds = {
      1991: new SympactEmbedBuilder()
        .setTitle("Re-education Camp")
        .setColor("#ff0000")
        .setDescription("coming soonTM"),

      dprk: new SympactEmbedBuilder()
        .setTitle("Re-education Camp")
        .setColor("#ff0000")
        .setDescription("coming soonTM"),
      
    };

    const selectedEmbed = embeds[embedType] || getDefaultEmbed();
    message.reply({ embeds: [selectedEmbed] });
  },
};
function getDefaultEmbed() {
  return new SympactEmbedBuilder()
    .setTitle("Re-education Camp")
    .setColor("#ff0000")
    .setDescription("### 1 · USSR\n `1991`: Learn more about the Destruction of the Soviet Union.");
}
