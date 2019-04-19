function RandomMove (choiceOfCards) {
    return choiceOfCards[Math.floor(Math.random()*choiceOfCards.length)]
}

export default RandomMove;