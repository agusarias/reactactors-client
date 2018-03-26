import React from "react";
import { Icon, Button } from "semantic-ui-react";
import Match, { CIRC, CRSS, NONE } from "../model/Match.class";

export default class Box extends React.Component {


  render() {
    let text = "-"

    switch (this.props.value) {
      case CIRC:
        text = <Icon name="circle" />
        break;

      case CRSS:
        text = <Icon name="x" />
        break;
    }

    return (
      <div>
        <Button fluid onClick={this.props.onClick}>
          {text}
        </Button>
      </div>
    );
  }
}