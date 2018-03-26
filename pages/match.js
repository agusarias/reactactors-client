import React, { Component } from "react"
import { Grid, Header } from "semantic-ui-react";
import Game from "../components/Game";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header>{this.props.url.query.code}</Header>
            <Game />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Match;