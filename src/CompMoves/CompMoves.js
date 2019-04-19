function RandomMove (choiceOfCards) {
    return choiceOfCards[Math.floor(Math.random()*choiceOfCards.length)]
}

const noWinner = ["no-one", 0, 0, 0];

function CheckForWin (player, cards) {
    switch (cards.length) {
        case 3 : {
            if (cards.reduce((a, b) => a+b) === 15) {return [player, ...cards]}
              else {return noWinner}
            break;
        }
        default : {return noWinner}
    }
}

export {CheckForWin, RandomMove, noWinner};