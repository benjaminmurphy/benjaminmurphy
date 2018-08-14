import Head from 'next/head';

export default () => (
  <Head>
    <title>benjamin murphy</title>

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous" />

    <link rel="stylesheet" href="https://use.typekit.net/zyj0uow.css" />

    <style jsx global>{`
      body {
        font-family: niveau-grotesk-small-caps, sans-serif;
        font-style: normal;
        font-weight: 300;
      }

      html, body, div#__next {
        height: 100%;
      }
    `}</style>

  </Head>
);
