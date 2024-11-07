export default function checkIfCurrentPlayerIsWinner(
  matrix,
  rowIndex,
  colIndex,
  currentSymbol
) {
  // 1) Check if player has 3 in a row
  if (matrix[rowIndex].every((cell) => cell === currentSymbol))
    return { winBy: 'row', rowIndex, colIndex };
  // 2) Check if player has 3 in a column
  else if (matrix.every((row) => row[colIndex] === currentSymbol))
    return { winBy: 'column', rowIndex, colIndex };
  // 3) Check if player has 3 in a diagonal
  else if (
    matrix[0][0] === currentSymbol &&
    matrix[1][1] === currentSymbol &&
    matrix[2][2] === currentSymbol
  )
    return { winBy: 'diagonal', direction: 'forward', rowIndex, colIndex };
  else if (
    matrix[0][2] === currentSymbol &&
    matrix[1][1] === currentSymbol &&
    matrix[2][0] === currentSymbol
  )
    return { winBy: 'diagonal', direction: 'reverse', rowIndex, colIndex };
  else return null;
}
