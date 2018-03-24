import React from "react"

import Game from "../components/Game";
import { Container, Grid, Segment, Header } from "semantic-ui-react"

export default () => (
  <Container text>
    <Header>
      ReacTacTors
    </Header>
    <Segment>
      <Game />
    </Segment>
  </Container>
)