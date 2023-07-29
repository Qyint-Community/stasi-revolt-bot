const { Client } = require("revolt.js");
const fs = require("fs");
const { token, prefix, logging } = require("./config.js");
const { Logger } = require("./lib/Logging");
const { Message } = require("./lib/Message");
const message = new Message("0.1.2");
const SympactEmbedBuilder = require("./lib/EmbedBuilder");
class Command {
  constructor(name, description, execute) {
    this.name = name;
    this.description = description;
    this.execute = execute;
  }
}
config = require("./config.js");

class MyRevoltBot {
  constructor() {
    this.logger = new Logger(logging);
    this.client = new Client(config["revolt.js"]);
    this.commands = new Map();
    this.setupListeners();
    this.loadCommands();
  }
  setupListeners() {
    this.client.on("ready", () =>
      this.logger.info(
        `»»»»» ${this.client.user.username}`,
        "Stasi"
      )
    );
    this.client.on("message", this.handleMessage.bind(this));
    message.start();
  }

  async handleMessage(message) {
    try {
      if (!message || !message.content || message.author.bot)
        return;
      this.executeAutomaticResponses(message);
      if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = this.commands.get(commandName);
        if (!command) {
          this.logger.warn(
            `»»» Command ${commandName} not found.`,
            "Stasi"
          );
          return;
        }
        command.execute(message, args, this.client.bot);
        this.logger.info(`»»» Command ${commandName} executed.`, "Stasi");
      }
    } catch (err) {
      this.logger.error("Error handling message:", err, "Stasi");
    }
  }

  async executeAutomaticResponses(message) {
    const keywordToArgs = {
      "1991": "1991",
      "north korea": "dprk",
      "dprk": "dprk",
      "nordkorea": "dprk",
    };
    const lowerCaseContent = message.content.toLowerCase();
    const matchedKeyword = Object.keys(keywordToArgs).find(keyword => lowerCaseContent.includes(keyword));
    if (matchedKeyword) {
      const messages = [
        ":01GVNWFPYHPP6QYXKD9M7AT6RV: You have been found guilty of disseminating False Information. As a Result, you will undergo mandatory Re-education at our Facility.",
        ":01GVNWFPYHPP6QYXKD9M7AT6RV: Your Spreading of False Information has led to your Conviction. Therefore, you will be obliged to attend a Re-education Camp.",
        ":01GVNWFPYHPP6QYXKD9M7AT6RV: Based on the dissemination of False Information, you are required to attend a Re-education Camp."
      ];
      const randomIndex = Math.floor(Math.random() * messages.length);
      const chosenMessage = messages[randomIndex];
      message.reply(chosenMessage);
      const arg = keywordToArgs[matchedKeyword];
      const commandName = "reeducation";
      const command = this.commands.get(commandName);
      if (command) {
        setTimeout(() => {
          command.execute(message, [arg]);
          this.logger.info("»»» Automatic Command executed.", "Stasi");
        }, 500);
      }
    }
  }

  loadCommands() {
    const commandFiles = fs
      .readdirSync("./commands")
      .filter((file) => file.endsWith(".js"));
    const categories = {};
    for (const file of commandFiles) {
      try {
        const { name, description, execute, category } = require(`./commands/${file}`);
        const command = new Command(name, description, execute);
        command.category = category || "$\\textsf{\\color{#FF0000}0 | General}$";
        if (!categories[command.category]) {
          categories[command.category] = [];
        }
        categories[command.category].push(command);
        this.commands.set(name, command);
      } catch (err) {
        this.logger.error(`Error loading command file '${file}':`, err, "Stasi");
      }
    }
    const sortedCategories = Object.keys(categories).sort();
    this.commands = new Map();
    for (const category of sortedCategories) {
      const categoryCommands = categories[category];
      for (const command of categoryCommands) {
        this.commands.set(command.name, command);
      }
    }
  }

  async login() {
    try {
      await this.client.loginBot(token);
    } catch (err) {
      this.logger.error("Error logging in:", err, "Stasi");
    }
  }

  async help(message) {
    const commandList = Array.from(this.commands.values()).reduce(
      (categories, command) => {
        const category = command.category || "$\\textsf{\\color{#FF0000}0 | General}$";
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(
          `\`${prefix}${command.name}\`: ${command.description}`
        );
        return categories;
      },
      {}
    );
    const embedBuilder = new SympactEmbedBuilder()
      .setTitle("Stasi Help")
      .setColor("#ff0000");
    for (const [category, commands] of Object.entries(commandList)) {
      const categoryString = `**${category}**`;
      const commandsString = commands.join("\n");
      embedBuilder.setDescription(
      `${
        embedBuilder.embed.description
          ? `${embedBuilder.embed.description}\n\n`
          : ""
      }${categoryString}\n${commandsString}`
      );
    }
    await message.reply({ embeds: [embedBuilder.build()] });
  }
}

const myBot = new MyRevoltBot();
myBot.commands.set(
  "help",
  new Command(
    "help",
    "List all Commands!",
    myBot.help.bind(myBot)
  )
);
myBot.login();