const SympactEmbedBuilder = require("../lib/EmbedBuilder");

module.exports = {
  name: "chess",
  description: "Chess Ressources",
  category: "$\\textsf{\\color{#FF0000}2 | Ressources}$",
  async execute(message, args) {
    const embed = new SympactEmbedBuilder()
      .setTitle("This Embed was brought to you by the Ministry of State Security")
      .setColor("#ff0000")
      .setDescription("# :01H2PW3YH4YF7PBS2VVX0A02JY:\n## Online Games\n### [:01H2PV70CJ64WP7ECMTH3JZK1E: Lichess](<https://lichess.org/>)\n### [:01H2PV8867XDVB1JV25EXKED9G: Chess.com](<https://www.chess.com/>)\n#### [∞ Infinite Chess](<https://www.infinitechess.org/>)\n#### [⌛️ Real Time Chess](<https://rtchess.org/>)\n#### [⚒ Custom Chess Boards](<https://greenchess.net/>)\n#### [🛠 Chess with custom Pieces](<https://store.steampowered.com/app/1635790/ChessCraft/>)\n#### [🌀 5D Chess with Multiverse Timetravel](<https://store.steampowered.com/app/1349230/5D_Chess_With_Multiverse_Time_Travel/>)\n#### [:01H2PX4N42Q8KE898M7M9WPXAQ: FPS Chess](<https://store.steampowered.com/app/2021910/FPS_Chess/>)\n# :01H2PW28AJ5B79FJ628FM51RJZ:\n## [Chess Server](https://rvlt.gg/1V5jkvQ3)")

    message.reply({ embeds: [embed] });
    //message.reply("https://rvlt.gg/1V5jkvQ3");
  },
};
