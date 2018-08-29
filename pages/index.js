import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Social from '../components/social';

export default () => (
  <div id='base'>
    <style jsx>{`
      div.root {
        padding-top: 5%;
        position: relative;
        min-height: 100%;
      }

      div.root p {
        font-size: 1.2em;
      }

      div.root p:first-of-type {
        font-size: 1.8em;
      }

      div#base {
        background-image: url('/static/bamboo.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: brightness(140%);
      }
    `}</style>

    <div className='container root'>
      <Head />
      <Header />

      <div className='row'>
        <div className='col-md-8'>
          <div className='about'>
            <p className='cormorant'>
              I'm an engineer, photographer, and aspiring lawyer, currently located in Providence, Rhode Island.
            </p>

            <p className='raleway'>
              I am particularly interested in privacy, distributed systems, and machine learning. I'm also a future
              student at Harvard Law School, and consequently am interested in the intersection of technology and law.
            </p>

            <p className='raleway'>
              I'm currently looking for full-time opportunities starting in Fall 2019. If you're working on something
              interesting, let me know at <a href='mailto:ben@benjaminmurphy.me'>ben@benjaminmurphy.me</a>.
            </p>

            <Social />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
);
