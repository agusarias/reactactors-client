import Document, {Head, Main, NextScript} from "next/document"
import flush from "styled-jsx/server"

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage(),
      styles = flush()

    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return (
      <html>
        <Head>
          <style>{"body { margin: 0 } /* custom! */"}</style>
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