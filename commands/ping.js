module.exports = {
    name: "ping",
    description: "Ping the Bot!",
    async execute(message, args) {
      const startTime = Date.now();
      const replyMessage = await message.reply(":01H1AYJ3DT14SZZ8EHKK2G6XGT:");
      const endTime = Date.now();
      const latency = endTime - startTime;
      replyMessage.channel.sendMessage(`$\\textsf{\\color{#FF0000}${latency}ms}$`);
    },
  };