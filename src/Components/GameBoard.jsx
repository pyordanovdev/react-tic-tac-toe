import { useState } from 'react';
import checkIfCellIsEmpty from '../Utils/checkIfCellIsEmpty';
import checkIfCurrentPlayerIsWinner from '../Utils/checkIfCurrentPlayerIsWinner';
import checkIfGameHasEndedWithNoWinner from '../Utils/checkIfGameHasEndedWithNoWinner';
import Button from './Button';
function GameBoard({
  setCurrentPlayerPlaying,
  currentPlayerPlaying,
  player1Name,
  player2Name,
  setWinner,
  setScores,
  gameShouldRestart,
  setGameShouldRestart,
  setIsDraw,
}) {
  // Set states
  const [progressMatrix, setProgressMatrix] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''))
  );
  const [currentSymbol, setCurrentSymbol] = useState(
    currentPlayerPlaying === player1Name ? 'X' : 'O'
  );
  function handleCellClick(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);

    const isCellEmpty = checkIfCellIsEmpty(progressMatrix, rowIndex, colIndex);

    if (!isCellEmpty) {
      return alert('Cell is not empty.');
    }

    // Copy and update matrix
    const updatedMatrix = JSON.parse(JSON.stringify(progressMatrix));
    updatedMatrix[rowIndex][colIndex] = currentSymbol;
    setProgressMatrix(updatedMatrix);

    // Check if current player is winner
    const resultIsWinner = checkIfCurrentPlayerIsWinner(
      updatedMatrix,
      rowIndex,
      colIndex,
      currentSymbol
    );

    if (resultIsWinner !== null) {
      setWinner(currentPlayerPlaying);
      setScores((prev) => {
        return {
          ...prev,
          [currentPlayerPlaying]: prev[currentPlayerPlaying] + 1,
        };
      });
      setGameShouldRestart(true);
    } else if (checkIfGameHasEndedWithNoWinner(updatedMatrix)) {
      console.log('no winner');
      setIsDraw(true);
      setGameShouldRestart(true);
    } else {
      // Switch current player && current symbol
      if (currentPlayerPlaying === player1Name) {
        setCurrentPlayerPlaying(player2Name);
        setCurrentSymbol('O');
      } else {
        setCurrentPlayerPlaying(player1Name);
        setCurrentSymbol('X');
      }
    }
  }

  function restartGame() {
    setProgressMatrix(
      Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''))
    );
    setWinner(null);
    setCurrentPlayerPlaying(player1Name);
    setCurrentSymbol('X');
    setGameShouldRestart(false);
    setIsDraw(false);
  }
  return (
    <div className="game-matrix">
      {gameShouldRestart && (
        <div className="restart-overlay">
          <Button onClickHandler={restartGame}>Restart</Button>
        </div>
      )}
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
