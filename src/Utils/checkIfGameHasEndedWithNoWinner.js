export default function checkIfGameHasEndedWithNoWinner(matrix) {
  return matrix.every((row) => row.every((cell) => cell !== ''));
}
