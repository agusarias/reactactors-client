import React from "react";
import Box from "./Box";

export default class Board extends React.Component {

  render() {
    const boxes = this.props.values.
      map((box, index) => <Box key={index} value={box}
        onClick={() => {
          this.props.onMove(index)
        }} />)

    return (
      <div>
        {boxes}
      </div>
    );
  }
}