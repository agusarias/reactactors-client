import React from "react";
import Board from "./Board";
import PickPlayer from "./PickPlayer";
import { NONE } from "../model/Player.class";

export default class Game extends React.Component {
  render() {
    var content;
    var title;

    var match = this.props.match;
    var { next, winner, code } = match;

    if (this.props.match.hasWinner()) {
      title = "The winner is " + winner.name;
    } else if (this.props.player.is(NONE)) {
      title = "Welcome to the game " + code;
      content = <PickPlayer onPick={this.props.onPick} />;
    } else {
      if (this.props.player.is(next.code)) {
        title = "Your turn " + next.name;
      } else {
        title = "Waiting turn " + next.name;
      }
      content = (
        <Board values={this.props.match.board} onMove={this.props.onMove} />
      );
    }

    return (
      <div>
        <h1>{title}</h1>
        {content}
      </div>
    );
  }
}
