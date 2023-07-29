module.exports = {
    name: "status",
    description: "Change the Bots Status!",
    category: "$\\textsf{\\color{#FF0000}5 | Config}$",
    execute(message, args) {
        if (!config.sudoers.includes(message.author_id)) {
            return message.reply(`$\\textsf{\\color{#FF0000}Your username is not in the sudoers file. This incident will be reported.}$ :01GVNWGEB8HK6B48AWXWK90DAZ:`);
        }
        message.reply(`$\\textsf{\\color{#FF0000}Sorry, this Command is W.I.P.!}$`);
    }
};
