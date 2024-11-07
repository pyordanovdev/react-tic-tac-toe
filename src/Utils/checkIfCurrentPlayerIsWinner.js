export default function checkIfCurrentPlayerIsWinner(
  matrix,
  rowIndex,
  colIndex,
  currentSymbol
) {
  // Check if player has 3 in a row
  if (matrix[rowIndex].every((cell) => cell === currentSymbol))
    return 'win by row';

  // Check if player has 3 in a column
  if (matrix.every((row) => row[colIndex] === currentSymbol))
    return 'win by column';

  // Check if player has 3 in a diagonal
  if (
    matrix[0][0] === currentSymbol &&
    matrix[1][1] === currentSymbol &&
    matrix[2][2] === currentSymbol
  )
    return 'win by diagonal';
  if (
    matrix[0][2] === currentSymbol &&
    matrix[1][1] === currentSymbol &&
    matrix[2][0] === currentSymbol
  )
    return 'win by diagonal';
}
