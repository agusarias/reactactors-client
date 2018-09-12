import React from "react";
import { Icon, Button } from "semantic-ui-react";
import { NONE } from "../model/Player.class";

export default class Box extends React.Component {
  render() {
    let text = <Icon name={this.props.player.icon} />;
    let disabled = !this.props.player.is(NONE);

    return (
      <div>
        <Button fluid onClick={this.props.onClick} disabled={disabled}>
          {text}
        </Button>
      </div>
    );
  }
}
