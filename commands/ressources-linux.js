const SympactEmbedBuilder = require("../lib/EmbedBuilder");

module.exports = {
  name: "linux",
  description: "Linux Ressources",
  category: "$\\textsf{\\color{#FF0000}2 | Ressources}$",
  async execute(message, args) {
    const embed = new SympactEmbedBuilder()
      .setTitle("This Embed was brought to you by the Ministry of State Security")
      .setColor("#ff0000")
      .setDescription("# :01GVNWGQ0K9VT1HR6S6PFB0D8P:\n- [Flatpak Appstore](<https://flathub.org/>)\n- [Arch Wiki](<https://wiki.archlinux.org/>)")

    message.reply({ embeds: [embed] });
  },
};