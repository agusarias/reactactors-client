import React from "react";
import Board from "./Board";
import PickPlayer from "./PickPlayer";
import { NONE } from "../model/Player.class";

export default class Game extends React.Component {
  render() {
    var content;
    var title;

    if (this.props.player.is(NONE)) {
      title = "Welcome to the game " + this.props.match.code;
      content = <PickPlayer onPick={this.props.onPick} />;
    } else {
      if (this.props.match.hasWinner()) {
        title = "The winner is " + this.props.match.winner;
      } else {
        if (this.props.match.next === this.props.player) {
          title = "Your turn " + this.props.match.next;
        } else {
          title = "Waiting turn " + this.props.match.next;
        }
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
