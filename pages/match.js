import React, { Component } from "react"
import { Grid, Header } from "semantic-ui-react";
import GameAPI from "../model/GameAPI"
import Game from "../components/Game";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match
    }
  }

  static async getInitialProps(context) {
    const code = context.query.code;

    return {
      match: await GameAPI.getMatch(code)
    }
  }

  handleMove = (position) => {
    console.log(position)
    GameAPI.makeMove(this.state.match.code, this.state.match.next, position)
      .then(updatedMatch => {
        this.setState({
          match: updatedMatch
        })
      })

  }

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header>{this.state.match.code}</Header>
            <Game match={this.state.match} onMove={this.handleMove} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Match;