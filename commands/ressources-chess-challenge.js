module.exports = {
    name: "chesschallenge",
    description: "Give the User a random Chess Challenge!",
    category: "$\\textsf{\\color{#FF0000}2 | Ressources}$",
    execute(message, args) {
      
      const randomNumber = Math.floor(Math.random() * 13);
      const phrases = [
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Bongcloud Opening\n**Rules:**\n!! You must start the Game by moving the Kings Pawn two Squares. Then you move the King up one Square. !!\n**Objective:**\n!! You must checkmate the Opponent. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Copy Chess\n**Rules:**\n!! You have to move the same Piece your Opponent just moved. All Pawns, Bishops, etc. are the same. Castling counts as a King Move. !!\n**Objective:**\n!! You must checkmate the Opponent. !!\n**Problems:**\n!! If you cant move the same Piece, you lose the Game. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Eine Schande\n**Rules:**\n!! Your Knights must always touch one of the 4 Edges of the Board. You may move the Knights away, but they have to return to the Edge in the next Move. !!\n**Objective:**\n!! You must checkmate the Opponent. !!\n**Problems:**\n!! If you cant move a Knight back to the Edge, you lose the Game. If you leave your Knight in the Center for more than one Move, you lose the Game. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Botez Gambit\n**Rules:**\n!! You must lose your Queen as soon as possible. !!\n**Objective:**\n!! Lose the Queen, then checkmate the Opponent. !!\n**Problems:**\n!! If you dont sacrifice your Queen within the first few Moves, you lose the Game. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Double Chess\n**Rules:**\n!! You have to move the same Piece twice in a Row. Castling counts as a King Move. !!\n**Objective:**\n!! You must checkmate the Opponent. !!\n**Problems:**\n!! If you cant move the same Piece again, you lose the Game. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: World Tour\n**Rules:**\n!! Your Pieces must travel a certain Distance. By Default this is 100 Squares. !!\n**Objective:**\n!! Move the required Distance, then checkmate the Opponent. !!\n**Problems:**\n!! If you dont travel the required Distance, you lose the Game. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Capture Chess\n**Rules:**\n!! If you can capture a Piece, you have to. !!\n**Objective:**\n!! You must checkmate the Opponent. !!\n**Problems:**\n!! If you are in Check, while also being able to capture Pieces, as long as its not the Piece delivering the Check, Capturing is not forced. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Traveling King\n**Rules:**\n!! Your King must touch the Opponents Back-Rank. !!\n**Objective:**\n!! You must checkmate the Opponent after your King touched the Opponents Back-Rank. !!`, 
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Freezing Pawns\n**Rules:**\n!! You can move every Pawn only once, before they freeze permanently. Frozen Pawns can still capture. !!\n**Objective:**\n!! You must checkmate the Opponent. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Queencloud\n**Rules:**\n!! Your Queen must leave your Home- and Pawn-Ranks within the first two Moves. It cant return for the Rest of the Game. !!\n**Objective:**\n!! You must checkmate the Opponent. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Rookcloud\n**Rules:**\n!! Both of your Rooks must leave your Home-Rank within 20 Moves. If they die, thats not a Problem. They cant return for the Rest of the Game. !!\n**Objective:**\n!! You must checkmate the Opponent. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Peace Treaty\n**Objective:**\n!! The Game must end in a Draw. !!\n**Problems:**\n!! If you accidentally checkmate the Opponent or if you are checkmated, you lose the Game. If anyone loses on Time, you lose. !!`,
        `#### :01H2PW28AJ5B79FJ628FM51RJZ: Queen-Castling\n**Rules:**\n!! Your King and Queen have to swap Squares within the Opening Phase of the Game. !!\n**Objective:**\n!! You must checkmate the Opponent after castling King and Queen. !!\n**Problems:**\n!! If your Queen dies before they have swapped Places, you lose the Game. !!`
      ];
      const selectedPhrase = phrases[randomNumber];
      message.reply(`${selectedPhrase}`);
      
    },
  };
  
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  