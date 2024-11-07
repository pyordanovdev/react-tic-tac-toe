function Dashboard({
  player1Name,
  player2Name,
  currentPlayerPlaying,
  winner,
  scores,
  isDraw,
}) {
  return (
    <div className="dashboard">
      <div className="players__dashboard">
        <strong>{player1Name}</strong> vs <strong>{player2Name}</strong>
      </div>
      <div className="scores__dashboard">
        <span style={{ color: 'red' }}>{scores[player1Name]}</span>
        <span>|</span>
        <span style={{ color: 'red' }}>{scores[player2Name]}</span>
      </div>
      <div className="turn__dashboard">
        On turn is: <strong>{currentPlayerPlaying}</strong>
      </div>
      {winner !== null && (
        <div className="winner__dashboard">{winner} is winner!</div>
      )}
      {isDraw && <div className="draw__dashboard">Draw!</div>}
    </div>
  );
}

export default Dashboard;
