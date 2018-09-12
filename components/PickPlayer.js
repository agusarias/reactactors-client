import React from "react";
import { Grid, Button } from "semantic-ui-react";
import Player, { CRSS, CIRC } from "../model/Player.class";

export default class PickPlayer extends React.Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>Pick a player</Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Button fluid onClick={() => this.props.onPick(CRSS)}>
              {Player.crss().name()}
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button fluid onClick={() => this.props.onPick(CIRC)}>
              {Player.circ().name()}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
