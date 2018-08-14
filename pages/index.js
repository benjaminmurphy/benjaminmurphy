import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
  <div className='container root'>
    <Head />
    <Header />

    <style jsx>{`
      div.root {
        padding-top: 5%;
        position: relative;
        min-height: 100%;
      }

      div.about, div.photography, div.contact, div.projects {
        padding: 20px;
      }

      div.photography h1 {
        display: block;
      }

      div.photography img {
        width: 50%;
        padding: 5px;
      }
    `}</style>

    <div className='row'>
      <div className='col-md-4'>
        <div className='about'>
          <h1>About</h1>

          <p>
            I'm an engineer, photographer, and aspiring lawyer, currently located in Providence, Rhode Island.
            At the moment, I am particularly interested in privacy and security, distributed systems, and machine
            learning.
          </p>

          <p>
            I'm currently looking for full-time opportunities starting in Fall 2019. If you're working on something
            cool, let me know at <a href='mailto:ben@benjaminmurphy.me'>ben@benjaminmurphy.me</a>!
          </p>
        </div>

        <div className='contact'>
          <h1>Contact</h1>
        </div>

        <div className='projects'>
          <h1>Projects</h1>
        </div>
      </div>

      <div className='photography col-md-8'>
        <h1>Photography</h1>

        <img src='/static/bamboo.jpg' />
        <img src='/static/blossoms.jpg' />
      </div>
    </div>

    <Footer />

  </div>
);
