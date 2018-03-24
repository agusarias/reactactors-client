import React from "react";
import Board from "./Board";

const POSITIONS = 9,
  INITIAL_VALUE = 0,
  INITIAL_NEXT = 1;

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "board": Array(POSITIONS).fill(INITIAL_VALUE),
      "winner": 0,
      "next": INITIAL_NEXT
    };
  }

  handleMove(player, position){
    
  }

  render() {
    return (
      <div>
        <h1>Hello, the winner is {this.state.winner}</h1>
        <Board values={this.state.board} onMove={this.handleMove}/>
      </div>
    );
  }
}