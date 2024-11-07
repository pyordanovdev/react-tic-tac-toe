import Button from './Button';
function FormAddPlayers({
  player1Name,
  player2Name,
  setPlayer1Name,
  setPlayer2Name,
  setShowGame,
  setCurrentPlayerPlaying,
}) {
  function handleSubmitForm(e) {
    e.preventDefault();
    if (!player1Name || !player2Name) {
      alert('Please enter player names');
      return;
    }
    setPlayer1Name(player1Name);
    setPlayer2Name(player2Name);
    setShowGame(true);
    setCurrentPlayerPlaying(player1Name);
  }
  return (
    <form className="add-players" onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Player 1"
        value={player1Name}
        onChange={(e) => setPlayer1Name(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2"
        value={player2Name}
        onChange={(e) => setPlayer2Name(e.target.value)}
      />
      <Button>Add players</Button>
    </form>
  );
}

export default FormAddPlayers;
