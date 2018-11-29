import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import GameAPI from "../model/GameAPI";
import Game from "../components/Game";
import Player from "../model/Player.class";
import Router from "next/router";
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
    if (this.state.player.code != this.state.match.next.code) {
      return;
    }
    GameAPI.makeMove(this.state.match.code, position).then(updatedMatch => {
      this.setState({
        match: Match.fromResponse(updatedMatch)
      });
    });
  };

  handleBack = () => {
    Router.push("/");
  };
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Button onClick={this.handleBack}>Go back</Button>
        </Grid.Row>
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

  componentDidMount() {
    this.createSocket();
    this.setTimer();
  }

  createSocket() {
    this.ws = GameAPI.createSocket(this.state.match.code);
    this.ws.onmessage = event => {
      this.setState({
        match: Match.fromResponse(JSON.parse(event.data))
      });
    };
  }

  setTimer() {
    this.interval = setInterval(this.handleRefresh.bind(this), 1000);
  }

  handleRefresh = () => {
    if (this.state.match.hasWinner()) {
      this.stopTimer();
      return;
    }
    this.ws.send("state");
  };

  componentWillUnmount() {
    if (this.interval) {
      this.stopTimer();
    }
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}

export default MatchPage;
