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

          <meta name="description" content="a better way to pick dinner" />

          <meta property="og:url" content="https://getpick.net" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pick" />
          <meta
            property="og:description"
            content="a better way to pick dinner"
          />
          <meta property="og:image" content="https://getpick.net/og.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="getpick.net" />
          <meta property="twitter:url" content="https://getpick.net" />
          <meta name="twitter:title" content="Pick" />
          <meta
            name="twitter:description"
            content="a better way to pick dinner"
          />
          <meta name="twitter:image" content="https://getpick.net/og.png" />
        </Head>
        <body className="relative w-full h-full p-0 m-0 bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
