import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />

      <title>{title}</title>

      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#009688" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <meta name="msapplication-TileColor" content="#263238" />
      <meta name="msapplication-TileImage" content="/app-icon/ms-icon-144x144.png" />

      <link rel="apple-touch-icon" sizes="57x57" href="/app-icon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/app-icon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/app-icon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/app-icon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/app-icon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/app-icon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/app-icon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/app-icon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/app-icon/apple-icon-180x180.png" />

      <link rel="icon" type="image/png" sizes="192x192" href="/app-icon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/app-icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/app-icon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/app-icon/favicon-16x16.png" />

      <link rel="shortcut icon" href="/app-icon/favicon.ico" />

      <link rel="manifest" href="manifest.json" />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Next Template',
  keywords: 'NextJS Template',
  description: 'A NextJS Template',
}

export default Meta