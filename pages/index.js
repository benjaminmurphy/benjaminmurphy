import Head from '../components/head';
import Header from '../components/header';
import Social from '../components/social';

export default () => (
  <div className='container root'>
    <style jsx>{`
      div.root {
        padding-top: 5%;
        position: relative;
      }

      body {
        background-color: #efefef;
      }

      div.root p {
        font-size: 1.2em;
      }

      div.root p:first-of-type {
        font-size: 1.8em;
      }
    `}</style>

    <Head />
    <Header />

    <div className='row'>
      <div className='col-md-8'>
        <div className='about'>
          <p className='cormorant jet'>
            I'm an engineer, photographer, and aspiring lawyer, currently located in Providence, Rhode Island.
          </p>

          <p className='raleway jet'>
            I am particularly interested in privacy, distributed systems, and machine learning. I'm a future Site Reliability Engineer
            at Google, and am also a future student at Harvard Law School, where I'll be focusing on privacy law.
          </p>

          <p className='raleway jet'>
            If I've got a spare moment, I'm likely out taking photos, playing games, or attempting to cook. You can find some of my work
            at my blog or on my photography page.
          </p>

          <Social />
        </div>
      </div>
    </div>
  </div>
);
