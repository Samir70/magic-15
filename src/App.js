import React, { Component } from 'react';
import Settings from './Screens/Settings';
import TicTacToe from './Screens/TicTacToe';
import Magic15 from './Screens/Magic15';
import {RandomMove, CheckForWin, noWinner} from './CompMoves/CompMoves';
import './App.css';

class App extends Component {
  state = {
    screenToShow: "settings",
    playMode: "Human VS Computer",
    gamePosition: {cardsLeft:[1, 2, 3, 4, 5, 6, 7, 8, 9], p1Cards:[], p2Cards:[]},
    lastMoveMade: -1,
    sideToMove: "cross", // Crosses normally goes first
    computerToPlay: "nought", 
    winner: ["no-one", 0, 0, 0]
  }

  switchModeHandler = () => {
    this.state.playMode === "Human VS Computer" ? 
        this.setState({playMode: "Human VS Human"}) : this.setState({playMode: "Human VS Computer"})           
  }

  cardChosenHandler = (card) => {
    console.log("something was clicked and I got sent:", card);
    var currentSideToMove = this.state.sideToMove;
    var currentCardsLeft = [...this.state.gamePosition.cardsLeft];
    var currentP1Cards = [...this.state.gamePosition.p1Cards];
    var currentP2Cards = [...this.state.gamePosition.p2Cards];
    var winningCards;
    if (currentSideToMove !== "pause" && currentCardsLeft.includes(Number(card))) {
      currentCardsLeft = currentCardsLeft.filter(x => x !== Number(card));
      if (currentSideToMove === "cross") {
        currentP1Cards.push(Number(card));
        currentSideToMove = "nought";
        winningCards = CheckForWin("cross", currentP1Cards)
      } else {
        currentP2Cards.push(Number(card)); 
        currentSideToMove = "cross";
        winningCards = CheckForWin("nought", currentP2Cards)
      } 

      if (winningCards !== noWinner) {
        currentSideToMove = "pause"
      }

      this.setState({sideToMove: currentSideToMove, 
        gamePosition: {cardsLeft: currentCardsLeft, p1Cards:currentP1Cards, p2Cards:currentP2Cards},
        lastMoveMade: Number(card), winner:winningCards })     
    }    
  }

  render() {
    let menuClasses = ["nav-item", "nav-item", "nav-item"]
      switch (this.state.screenToShow) {
        case "magic15"  : {menuClasses[0] = "nav-item fancyText"; break}
        case "n&c"      : {menuClasses[1] = "nav-item fancyText"; break}
        case "settings" : {menuClasses[2] = "nav-item fancyText"; break}
        default : {}
    }

    let navDisplay = (
      <div id="nav-bar">
        <div className={menuClasses[0]} 
          onClick={() => this.setState({screenToShow: "magic15"})}>Magic 15</div>
        <div className={menuClasses[1]} 
          onClick={() => this.setState({screenToShow: "n&c"})}>Noughts and crosses</div>
        <div className={menuClasses[2]} 
          onClick={() => this.setState({screenToShow: "settings"})}>Settings</div>
      </div>
    );

    if (this.state.playMode === "Human VS Computer" 
          && this.state.computerToPlay === this.state.sideToMove) {
             this.cardChosenHandler(RandomMove(this.state.gamePosition.cardsLeft))
    }

    console.log("And the winner is:", this.state.winner)

    return (
      <div className="App">
        {navDisplay}        
        {this.state.screenToShow === "magic15" && 
          <Magic15 
            gamePos={this.state.gamePosition}
            sideMove={this.state.sideToMove}
            click={this.cardChosenHandler} /> }
        {this.state.screenToShow === "n&c" && 
          <TicTacToe 
            gamePos={this.state.gamePosition}
            lastMove={this.state.lastMoveMade}
            click={this.cardChosenHandler} />}
        {this.state.screenToShow === "settings" && 
          <Settings 
            currentSetting={this.state.playMode} 
            switchMode={this.switchModeHandler} />}                  
      </div>
    );
  }
}

export default App;
