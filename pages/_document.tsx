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
        <Head />
        <body className="relative w-full h-full p-0 m-0 bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
