import React from "react";
import { Grid } from "semantic-ui-react";
import Player from "../model/Player.class";

import Box from "./Box";

export default class Board extends React.Component {
  render() {
    const boxes = this.props.values.map((box, index) => {
      let player = Player.get(box);
      return (
        <Grid.Column key={index}>
          <Box
            player={player}
            onClick={() => {
              this.props.onMove(index);
            }}
          />
        </Grid.Column>
      );
    });

    return <Grid columns={3}>{boxes}</Grid>;
  }
}
