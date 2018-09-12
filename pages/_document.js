import React from "react";

import { Container, Image, Grid, Segment, Divider } from "semantic-ui-react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage(),
      styles = flush();

    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    const semanticUI =
      "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css";

    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <style>{"body { margin: 0 } /* custom! */"}</style>
          <link rel="stylesheet" href={semanticUI} />
        </Head>
        <body>
          {this.props.customValue}
          <Container text>
            <Grid centered padded>
              <Grid.Column>
                {/* <Image src="/static/logo.png" size="large" centered></Image> */}
                {/* <Divider hidden /> */}
                <Main />
              </Grid.Column>
            </Grid>
          </Container>
          <NextScript />
        </body>
      </html>
    );
  }
}
