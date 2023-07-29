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
    name: "akte",
    description: "Erstelle einen Akteneintrag!",
    category: "$\\textsf{\\color{#FF0000}4 | Unterlagen}$",
    execute(message, args) {
      const user = args[0];
      const reason = args.slice(1).join(" ");
      if (!config.sudoers.includes(message.author_id)) {
        return message.reply(`$\\textsf{\\color{#FF0000}Your username is not in the sudoers file. This incident will be reported.}$ :01GVNWGEB8HK6B48AWXWK90DAZ:`);
      }
      if (!user || !reason) {
        return message.reply(`Bitte wähle einen gültigen Benutzer und füge einen Eintrag hinzu :01H1AYGYHPYZNA2TAGTX7WVVJZ:`);
      }
  
      const sanitizedFileName = sanitizeFileName(user);
      const userDir = path.join(__dirname, '..', 'archiv', sanitizedFileName);
      if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir, { recursive: true });
      }
      const currentDate = new Date();
      const fileName = `${formatDate(currentDate)}.txt`;
      const filePath = path.join(userDir, fileName);
      const userIdentifierOld = message.author.username;
      const userIdentifier = message.author_id;
      const entryContent = `# Akteneintrag des ${formatDate(currentDate)} von ${user}\nby <@${userIdentifier}>\n\n${reason}`;
      fs.appendFile(filePath, entryContent, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Entry added to the file:', fileName);
        }
      });
      
      message.reply(`:pencil: Akteneintrag für Benutzer ${user} hinzugefügt.`);
    },
  };

  