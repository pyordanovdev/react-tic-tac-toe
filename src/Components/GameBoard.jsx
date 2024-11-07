import { useState } from 'react';
import checkIfCellIsEmpty from '../Utils/checkIfCellIsEmpty';
import checkIfCurrentPlayerIsWinner from '../Utils/checkIfCurrentPlayerIsWinner';
function GameBoard({
  setCurrentPlayerPlaying,
  currentPlayerPlaying,
  player1Name,
  player2Name,
}) {
  // Set states
  const [progressMatrix, setProgressMatrix] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''))
  );
  const [currentSymbol, setCurrentSymbol] = useState('X');
  function handleCellClick(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);

    const isCellEmpty = checkIfCellIsEmpty(progressMatrix, rowIndex, colIndex);

    if (!isCellEmpty) {
      return alert('Cell is not empty.');
    }

    // Update matrix
    const updatedMatrix = [...progressMatrix];
    updatedMatrix[rowIndex][colIndex] = currentSymbol;
    console.log(
      checkIfCurrentPlayerIsWinner(
        updatedMatrix,
        rowIndex,
        colIndex,
        currentSymbol
      )
    );

    // Switch current player && current symbol

    if (currentPlayerPlaying === player1Name) {
      setCurrentPlayerPlaying(player2Name);
      setCurrentSymbol('O');
    } else {
      setCurrentPlayerPlaying(player1Name);
      setCurrentSymbol('X');
    }

    // On click I have to check:
    // 1. Is the cell empty? ✅
    // 2. Is the game over?
    // 2.1. There's a winner
    // 2.2. It's a draw - meaning no winner and no empty cells left
  }
  return (
    <div className="game-matrix">
      {progressMatrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={colIndex + rowIndex}
            className="cell__game-matrix"
            data-row-index={rowIndex}
            data-cell-index={colIndex}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );
}

export default GameBoard;
