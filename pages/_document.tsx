import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="w-full h-full p-0 m-0">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍔</text></svg>"
          />
        </Head>
        <body className="relative w-full h-full p-0 m-0 bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
