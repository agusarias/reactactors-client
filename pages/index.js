import React, { Component } from "react";
import Router from "next/router";
import { Button, Grid, Input, Divider } from "semantic-ui-react";
import GameAPI from "../model/GameAPI";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value });

  handleNewGame = () => {
    GameAPI.createMatch().then(match => {
      Router.push("/match/" + match.code);
    });
  };

  handleJoinGame = () => {
    Router.push("/match/" + this.state.code);
  };

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Button primary fluid size="huge" onClick={this.handleNewGame}>
              NEW
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              action={{
                secondary: true,
                content: "JOIN",
                size: "huge",
                onClick: this.handleJoinGame
              }}
              name="code"
              value={this.state.code}
              onChange={this.handleChange}
              placeholder="CODE"
              fluid
              size="huge"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider hidden />
      </Grid>
    );
  }
}

export default Index;
