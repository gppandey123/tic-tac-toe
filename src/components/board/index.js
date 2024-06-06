import React, { useState } from 'react'
import Square from '../square';
import { calculateWinner } from '../shared/helper';
import './style.css';

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [clickNo, setClickNo]= useState(0);
    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        const square = squares.slice();
        if (calculateWinner(square) || square[i]) {
            return;
        }
        square[i] = xIsNext ? 'X' : 'O';
        setClickNo(clickNo+1);
        setSquares(square);
        setXIsNext(!xIsNext)
    }

    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }

    // const handleStartAgain = () => {
    //     if(winner){
    //         setSquares(Array(9).fill(null)) 
    //            setXIsNext(true) 
    //     }
    // }

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else if(clickNo==9 ){
        status = 'Match Draw';
    }
     else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

   
    return (
        <div>
            <div className={winner ? "winner" : "status"}>{status}</div>
            {/* {winner && <button onClick={handleStartAgain}>Start Again</button>} */}
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board