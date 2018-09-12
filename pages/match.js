import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GameAPI from "../model/GameAPI";
import Game from "../components/Game";
import Player from "../model/Player.class";
import Match from "../model/Match.class";

class MatchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: Match.fromResponse(props.match), // Couldn't receive model :S
      player: Player.none
    };
  }

  static async getInitialProps(context) {
    const code = context.query.code;

    return {
      match: await GameAPI.getMatch(code)
    };
  }

  handlePick = code => {
    this.setState({ player: Player.get(code) });
  };

  handleMove = position => {
    GameAPI.makeMove(
      this.state.match.code,
      this.state.player.code,
      position
    ).then(updatedMatch => {
      this.setState({
        match: Match.fromResponse(updatedMatch)
      });
    });
  };

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Game
              match={this.state.match}
              player={this.state.player}
              onPick={this.handlePick}
              onMove={this.handleMove}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MatchPage;
