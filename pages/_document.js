import React from "react"

import Document, { Head, Main, NextScript } from "next/document"
import flush from "styled-jsx/server"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage(),
      styles = flush()

    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    const semanticUI = "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"

    return (
      <html>
        <Head>
          <style>{"body { margin: 0 } /* custom! */"}</style>
          <link rel="stylesheet"
            href={semanticUI}></link>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}