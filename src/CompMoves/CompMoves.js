function RandomMove (choiceOfCards) {
    return choiceOfCards[Math.floor(Math.random()*choiceOfCards.length)]
}

const noWinner = ["no-one", 0, 0, 0];

function sumThreeAndList (cards, indices) {
    var cardSubset = cards.filter((c, i) => indices.includes(i));
    return [cardSubset.reduce((a, b) => a+b), ...cardSubset];
}

const threeOfFour = [ [0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3] ];
const threeOfFive = [ 
    [0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4],
    [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4] 
]


function CheckForWin (player, cards) {
    var sumList = [];
    switch (cards.length) {
        case 3 : { sumList.push(sumThreeAndList(cards, [0,1,2])); break }
        case 4 : { sumList = threeOfFour.map(a => sumThreeAndList(cards, a)); break}        
        case 5 : { sumList = threeOfFive.map(a => sumThreeAndList(cards, a)); break}        
        default : {return noWinner}
    }
    console.log("this is sumlist: ", sumList)
    sumList = sumList.filter(s => s[0] === 15);
    console.log("this is sumlist after filtering: ", sumList)
    if (sumList.length > 0) { return [player, ...sumList[0].slice(1)]}
       if (cards.length === 5) {return ["drawn", 0, 0, 0]}
          else {return noWinner};
}

export {CheckForWin, RandomMove, noWinner};