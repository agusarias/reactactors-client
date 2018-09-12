import React from "react";
import { Grid } from "semantic-ui-react";

import Box from "./Box";

export default class Board extends React.Component {
  render() {
    const boxes = this.props.values.map((box, index) => (
      <Grid.Column key={index}>
        <Box
          value={box}
          onClick={() => {
            this.props.onMove(index);
          }}
        />
      </Grid.Column>
    ));

    return <Grid columns={3}>{boxes}</Grid>;
  }
}
