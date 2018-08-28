import Head from 'next/head';

export default () => (
  <Head>
    <title>benjamin murphy</title>

    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
      crossOrigin='anonymous' />

    <link rel='stylesheet' href='https://use.typekit.net/zyj0uow.css' />

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,400i|Raleway:200,200i' />

    <style jsx global>{`
      .niveau {
        font-family: 'niveau-grotesk-small-caps', sans-serif;
      }

      .eaves {
        font-family: 'mrs-eaves-roman-lining', serif;
      }

      .cormorant {
        font-family: 'Cormorant Garamond', serif;
      }

      .raleway {
        font-family: 'Raleway', sans-serif;
      }

      html, body, div#__next, div#base {
        height: 100%;
      }
    `}</style>
  </Head>
);
