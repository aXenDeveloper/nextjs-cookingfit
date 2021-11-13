/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <meta property="og:site_name" content="CookingFit" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index" />
          <meta name="theme-color" content="#F3AE46" />
        </Head>

        <body>
          <script src="/initialTheme.js" />
          <Main />
          <NextScript />
          <section id="nextjs_popups" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
