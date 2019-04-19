import React from 'react';
import './Screens.css'

function TicTacToe (props) {
    let crosses = props.gamePos.p1Cards;
    let noughts = props.gamePos.p2Cards;
    let empties = props.gamePos.cardsLeft;
    // use the magic square to figure out a string of character to represent the board in noughts and crosses
    // basically: replace the numbers for the magic square with noughts or crosses
    // magic square being used:
    // 2 9 4
    // 7 5 3
    // 6 1 8
    let magicSquare = [2, 9, 4, 7, 5, 3, 6, 1, 8];
    const magicKeys = magicSquare.join("");
    var indexOfLastMove = magicSquare.indexOf(props.lastMove);
    // counter for loops:
    var i;

    for (i=0;i<empties.length;i++) {
        magicSquare[magicSquare.indexOf(empties[i])] = '?'}
    for (i=0;i<crosses.length;i++) {
        magicSquare[magicSquare.indexOf(crosses[i])] = 'X'}
    for (i=0;i<noughts.length;i++) {
        magicSquare[magicSquare.indexOf(noughts[i])] = 'O'}

    // The next is an array which will provide the correct classes for the cells of the board
    var posClasses = [
        "topLeft", "topMiddle", "topRight", 
        "midLeft", "", "midRight",
        "botLeft", "botMiddle", "botRight" 
    ];

    posClasses[indexOfLastMove] += " moveAppear";
    
    var ttBoard = magicSquare.map((cell, index) => {
        return <td 
          className={posClasses[index]} 
          key={magicKeys[index]}
          onClick={() => props.click(magicKeys[index])}>{cell}</td>
    })
    
    return (
        <table className="mainScreen">
            <tbody className="ticTacBoard">
                <tr>{ttBoard.splice(0,3)}</tr>
                <tr>{ttBoard.splice(0,3)}</tr>
                <tr>{ttBoard.splice(0,3)}</tr>
            </tbody>
        </table>
    )
}

export default TicTacToe;