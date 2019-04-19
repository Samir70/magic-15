import React from 'react';

function Magic15 (props) {
  let player1Cards = props.gamePos.p1Cards;
  let player2Cards = props.gamePos.p2Cards;
  let notChosen = props.gamePos.cardsLeft;

  var notChosenList = notChosen.map((card) => {
    return <button 
      className="card"
      onClick={() => props.click(card)}
      key={card} >{card}</button>
  })
  var player1CardsList = player1Cards.map((card) => {
    return <button className="card card-player1" key={card}>{card}</button>
  })
  var player2CardsList = player2Cards.map((card) => {
    return <button className="card card-player2" key={card}>{card}</button>
  })

  let borderClasses = ["p1Area", "p2Area"];
  if (props.sideMove === "cross") {
    borderClasses[0] += " redBorder"; borderClasses[1] += " blueBorder"
  } else {
    borderClasses[0] += " blueBorder"; borderClasses[1] += " redBorder"
  }

    return (
        <div id="magic15Container">
        <div className="freeCardArea blueBorder">
          <p>Pick a card</p> 
          {notChosenList}
        </div>
        <div className="playerArea">
          <div className={borderClasses[0]} >
            <p>Player 1's cards</p>
            {player1CardsList}
          </div>
          <div className={borderClasses[1]} >
            <p>Player 2's cards</p>
            {player2CardsList}
          </div>
        </div>
      </div>
    )
}

export default Magic15;