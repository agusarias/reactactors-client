import React from "react";
import Board from "./Board";
import GameAPI from "../model/GameAPI"
import Match from "../model/Match.class";

let match = null

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "match": props.match,
    };
  }

  handleMove = (position) => {
    const updatedMatch = GameAPI.makeMove(this.state.code, this.state.match.next, position)
    this.setState({ "match": updatedMatch })
  }

  render() {
    return (
      <div>
        <h1>Hello, the winner is {this.state.match.winner}</h1>
        <Board values={this.state.board} onMove={this.handleMove} />
      </div>
    );
  }
}