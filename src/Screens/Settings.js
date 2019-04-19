import React from 'react';
import './Screens.css'

function Settings (props) {
    return (
        <div className="mainScreen">
            <div className="oneOfTwoCol blueBorder">
                <h1>How to play magic 15</h1>
                <p>Players take turns to pick cards.</p>
                <p>If any three of a player's cards add up to 15, that player wins. For example:</p>
                <p>Suppose you have chosen the cards 3, 5 and 6. These cards only add up to 14.
                    So you haven't won yet! But if you can choose a 4 on your next turn you will have the cards:
                    <br/> 3, 5, 6 and 4. Of these cards, three of them (5, 6 and 4) add up to 15. Winner!
                </p>
                <p>(Notice that, with 3, 5 and 6 in you hand, you could also have chosen a 7. 
                    <br />Because 3, 5 and 7 also add up to 15).</p>
                <h2>Why is this game being presented with Noughts and Crosses?</h2>
                <p>Well... There is a connection. 
                    Move from screen to screen as you play and see if you can figure it out</p>
            </div>
            <div className="oneOfTwoCol blueBorder">
                <p>The current playing mode is set to:</p>
                <h2 className="modeDisplay">{props.currentSetting}</h2>
                <div className="switchModeBtn" onClick={props.switchMode}>Switch to other playing mode</div>
            </div>
        </div>
    )
}

export default Settings;