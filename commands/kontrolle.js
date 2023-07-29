module.exports = {
    name: "kontrolle",
    description: "Kontrolliere einen Benutzer!",
    category: "$\\textsf{\\color{#FF0000}3 | Chat}$",
    execute(message, args) {
      const user = args.join(" ");
      if (!user) {
        return message.reply("Bitte wähle einen gültigen Benutzer :01H1AYGYHPYZNA2TAGTX7WVVJZ:");
      }
      
      const randomNumber = Math.random() < 0.2 ? 0 : Math.random() < 0.2 ? 1 : Math.random() < 0.2 ? 2 : Math.random() < 0.2 ? 3 : 4;
      const phrases = [
        `Meldung an alle: Aufgrund alarmierender Äußerungen und Handlungen besteht der Verdacht auf eine mögliche Sympathie für faschistische Ideologien. ${user} wird ab sofort von unserem Sicherheitsapparat intensiv überwacht.`,
        `Dringende Mitteilung: Aufgrund besorgniserregender Aussagen und Verhaltensweisen besteht der Verdacht auf eine mögliche Sympathie für reaktionäre Weltanschauungen. ${user} wird von nun an einer umfassenden Überwachung durch unseren Sicherheitsapparat unterzogen.`,
        `Achtung! ${user} steht unter Verdacht, faschistische Weltanschauungen zu sympathisieren. Zur Verteidigung demokratischer Werte werden wir wachsam nach extremistischen Handlungen Ausschau halten.`,
        `Warnung! Es gibt Grund zur Annahme, dass bestimmte Personen an Aktivitäten beteiligt sind, die den sozialen Frieden und unsere Grundwerte bedrohen. Ab sofort werden wir ${user} eng überwachen, um die Sicherheit unserer Gemeinschaft, sowie die Werte von Freiheit und Gleichheit zu schützen.`,
        `Wichtige Mitteilung! Es ist uns aufgefallen, dass ${user} potenziell konterrevolutionären Aktivitäten nachgeht. Wir verfolgen sorgfältig extremistische Äußerungen, die das Fundament unserer Gesellschaft bedrohen könnten.`
      ];
      const selectedPhrase = phrases[randomNumber];
      message.reply(`:loudspeaker: ${selectedPhrase}`);
      
    },
  };
  
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  