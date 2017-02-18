function chessBoard (rows, columns) {
  let boards = []
  let board = []

  for (let i = 0; i < columns; i++) {
    board = []

    for (let j = 0; j < columns; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          board.push('O')
        } else {
          board.push('X')
        }
      } else {
        if (j % 2 === 0) {
          board.push('X')
        } else {
          board.push(')')
        }
      }
    }

    boards.push(boards)
  }

  return boards
}

module.exports = chessBoard
