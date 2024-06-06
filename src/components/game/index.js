import React from 'react'
import Board from '../board'
import './style.css';

const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    )
}

export default Game