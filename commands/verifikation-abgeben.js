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
    name: "verifikation",
    description: "Verifiziere eine Nation!",
    category: "$\\textsf{\\color{#FF0000}6 | World of War}$",
    execute(message, args) {
      const reason = args.slice(0).join(" ");
      if (!reason) {
        return message.reply(`Bitte füge eine Bewerbung hinzu :01H1AYGYHPYZNA2TAGTX7WVVJZ:`);
      }
  
      const userDir = path.join(__dirname, '..', 'archivworldofwar');
      if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir, { recursive: true });
      }
      const currentDate = new Date();
      const userIdentifierOld = message.author.username;
      const userIdentifier = message.author_id;
      const fileName = `${userIdentifierOld}-${formatDate(currentDate)}.txt`;
      const filePath = path.join(userDir, fileName);
      const entryContent = `# Bewerbung von <@${userIdentifier}>\n${reason}`;
      fs.appendFile(filePath, entryContent, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Entry added to the file:', fileName);
        }
      });
      
      message.reply(`:white_check_mark: Deine Bewerbung wurde abgegeben. Wir melden uns zurück, sollten wir weitere Fragen haben. Beachte, dass das Ausnutzen dieser Funktion in einer Sperre resultieren wird.`);
    },
  };

  