export const NONE = 0,
  CIRC = 1,
  CRSS = 2,
  POSITIONS = 9;

class Match {
  constructor(code, board) {
    this.code = code
    this.board = board === undefined ?
      Array(POSITIONS).fill(NONE) : board
    this.next = CIRC
    this.winner = NONE
  }

  move(position, player) {
    // TODO validate next, or don't receive player at all

    this.board[position] = player
  }
}

export default Match;