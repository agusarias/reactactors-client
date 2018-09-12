import Player, { NONE } from "./Player.class";

export const POSITIONS = 9;

class Match {
  constructor(code, board) {
    this.code = code;
    this.board = board === undefined ? Array(POSITIONS).fill(NONE) : board;
    this.next = Player.circ;
    this.winner = Player.none;
  }

  hasWinner = () => {
    return !this.winner.is(NONE);
  };

  static fromResponse(response) {
    let match = new Match(response.code, response.board);
    match.next = Player.get(response.next);
    match.winner = Player.get(response.winner);

    return match;
  }
}

export default Match;
