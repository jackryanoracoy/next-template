import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/app-icon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/app-icon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="194x194" href="/app-icon/favicon-194x194.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/app-icon/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/app-icon/favicon-16x16.png" />
          <link rel="shortcut icon" href="/app-icon/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
