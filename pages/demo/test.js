import Head from 'next/head'

function IndexPage({SEO}) {
  return (
    <div>
      <Head>
        <title>{SEO.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content={SEO.description}></meta>
        <meta property="og:image" content={SEO.image}></meta>
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

IndexPage.getInitialProps = () => {
    const SEO = (() => ({
        title: "My page title",
        description: "My page description",
        image: "https://i.imgur.com/pgUSqa5.jpeg"
    }))()
    return {SEO}
}
export default IndexPage