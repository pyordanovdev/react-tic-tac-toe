function Dashboard({ player1Name, player2Name, currentPlayerPlaying }) {
  return (
    <div className="dashboard">
      <div className="players__dashboard">
        <strong>{player1Name}</strong> vs <strong>{player2Name}</strong>
      </div>
      <div className="turn__dashboard">
        On turn is: <strong>{currentPlayerPlaying}</strong>
      </div>
    </div>
  );
}

export default Dashboard;
