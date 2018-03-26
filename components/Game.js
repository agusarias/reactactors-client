import React from "react";
import Board from "./Board";
import GameAPI from "../model/GameAPI"
import Match from "../model/Match.class";

let match = null

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, the winner is {this.props.match.winner}</h1>
        <Board values={this.props.match.board} onMove={this.props.onMove} />
      </div>
    );
  }
}