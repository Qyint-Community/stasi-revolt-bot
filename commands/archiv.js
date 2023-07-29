const fs = require('fs');
const path = require('path');

function sanitizeFileName(fileName) {
  return fileName.replace(/[/\\?%*:|"<>@]/g, '');
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}-${hours}-${minutes}`;
}

module.exports = {
  name: "archiv",
  description: "Durchsuche das Archiv!",
  category: "$\\textsf{\\color{#FF0000}4 | Unterlagen}$",
  execute(message, args) {
    const user = args[0];
    const fileName = args[1];

    if (!config.sudoers.includes(message.author_id)) {
        return message.reply(`$\\textsf{\\color{#FF0000}Your username is not in the sudoers file. This incident will be reported.}$ :01GVNWGEB8HK6B48AWXWK90DAZ:`);
      }

    if (!user) {
      return message.reply("Bitte wähle einen gültigen Benutzer :01H1AYGYHPYZNA2TAGTX7WVVJZ:");
    }

    const sanitizedFileName = sanitizeFileName(user);
    const userDir = path.join(__dirname, '..', 'archiv', sanitizedFileName);

    if (!fs.existsSync(userDir)) {
      return message.reply(`:file_folder::mag_right: Keine Unterlagen von ${user} gefunden.`);
    }

    if (!fileName) {
      fs.readdir(userDir, (err, files) => {
        if (err) {
          console.error('Error:', err);
          return message.reply(`Error: ${err.message}`);
        }

        if (files.length === 0) {
          return message.reply(`:file_folder::mag_right: Keine Unterlagen von ${user} gefunden.`);
        }

        const modifiedFileList = files.map(file => {
            const newName = `- \`${file.replace(/\.txt$/, '')}\``;
            return newName;
          });
          
        const fileList = modifiedFileList.join('\n');
        message.channel.sendMessage(`### :open_file_folder: Unterlagen im Archiv von ${user}:\n${fileList}`, { split: true });
      });
    } else {
      const filePath = path.join(userDir, `${fileName}.txt`);

      if (!fs.existsSync(filePath)) {
        return message.reply(`:open_file_folder::mag_right: Die Akte des \`${fileName}\` von ${user} wurde nicht im Archiv gefunden.`);
      }

      fs.readFile(filePath, 'utf8', (err, fileContents) => {
        if (err) {
          console.error('Error:', err);
          return message.reply(`Error: ${err.message}`);
        }

        message.channel.sendMessage(`### :open_file_folder: Akte des \`${fileName}\` von ${user}:\n\`\`\`${fileContents}`);
      });
    }
  },
};
