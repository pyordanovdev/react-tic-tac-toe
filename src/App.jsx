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
        />
      )}
      {showGame && (
        <Dashboard
          player1Name={player1Name}
          player2Name={player2Name}
          currentPlayerPlaying={currentPlayerPlaying}
        />
      )}
      {showGame && (
        <GameBoard
          setCurrentPlayerPlaying={setCurrentPlayerPlaying}
          player1Name={player1Name}
          player2Name={player2Name}
          currentPlayerPlaying={currentPlayerPlaying}
        />
      )}
    </div>
  );
}

export default App;
