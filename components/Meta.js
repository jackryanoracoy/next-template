import Head from 'next/head'

const Meta = ({ title, keywords, description, themecolor }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <meta name="msapplication-TileColor" content={themecolor} />
      <meta name="theme-color" content={themecolor} />
      <link rel="mask-icon" href="/app-icon/safari-pinned-tab.svg" color={themecolor} />

      <title>{title} - {description}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Next Template',
  keywords: 'NextJS Template',
  description: 'A NextJS Template',
  themecolor: '#B71C1C',
}

export default Meta
