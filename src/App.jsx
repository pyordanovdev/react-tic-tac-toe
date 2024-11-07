import React, { useState } from 'react';
import Header from './Components/Header';
import FormAddPlayers from './Components/FormAddPlayers';
import GameBoard from './Components/GameBoard';
import Dashboard from './Components/Dashboard';
function App() {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [showGame, setShowGame] = useState(false);
  const [currentPlayerPlaying, setCurrentPlayerPlaying] = useState('');
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [scores, setScores] = useState({});
  const [gameShouldRestart, setGameShouldRestart] = useState(false);

  return (
    <div className="tic-tac-toe-app">
      <Header>
        <h1>Tic Tac Toe</h1>
      </Header>
      {!showGame && (
        <FormAddPlayers
          player1Name={player1Name}
          player2Name={player2Name}
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
          setShowGame={setShowGame}
          setCurrentPlayerPlaying={setCurrentPlayerPlaying}
          setScores={setScores}
        />
      )}
      {showGame && (
        <Dashboard
          player1Name={player1Name}
          player2Name={player2Name}
          currentPlayerPlaying={currentPlayerPlaying}
          winner={winner}
          scores={scores}
          isDraw={isDraw}
        />
      )}
      {showGame && (
        <GameBoard
          setCurrentPlayerPlaying={setCurrentPlayerPlaying}
          player1Name={player1Name}
          player2Name={player2Name}
          currentPlayerPlaying={currentPlayerPlaying}
          setWinner={setWinner}
          setScores={setScores}
          gameShouldRestart={gameShouldRestart}
          setGameShouldRestart={setGameShouldRestart}
          setIsDraw={setIsDraw}
        />
      )}
    </div>
  );
}

export default App;
