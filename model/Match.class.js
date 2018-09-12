import { NONE, CIRC } from "./Player.class";

export const POSITIONS = 9;

class Match {
  constructor(code, board) {
    this.code = code;
    this.board = board === undefined ? Array(POSITIONS).fill(NONE) : board;
    this.next = CIRC;
    this.winner = NONE;
  }

  hasWinner = () => this.winner !== NONE;

  static fromResponse(response) {
    let match = new Match(response.code, response.board);
    match.next = response.next;
    match.winner = response.winner;

    return match;
  }
}

export default Match;
