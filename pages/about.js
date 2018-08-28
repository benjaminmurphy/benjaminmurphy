import Link from 'next/link';

import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
  <div className='container root'>
    <Head renderBackground={false} />
    <Header />

    <style jsx>{`
      div.root {
        padding-top: 5%;
        position: relative;
        min-height: 100%;
      }

      img#headshot {
        width: 100%;
        height: auto;
        padding: 0 5px 5px 0;
        border-radius: 8px;
      }

      p {
        font-size: 1.2em;
      }

      p:first-of-type {
        font-size: 1.8em;
      }
    `}</style>

    <div className='row'>
      <div className='col-4'>
        <img id='headshot' src='/static/headshot.jpg' />
      </div>
      <div className='about-text col-8'>
        <p className='cormorant'>
          I'm currently a student at Brown University, where I'm working on a concurrent master's and bachelor's degree
          in computer science, advised by <a href='http://cs.brown.edu/~pvaliant/'>Paul Valiant</a>.
        </p>

        <p className='raleway'>
          I've worked at companies including MongoDB, Facebook, and Two Sigma, and have also co-founded
          and worked at several startup companies. I've done everything from systems administration and production
          engineering to iOS development and full-stack web development, though my heart lies in distributed systems,
          machine learning, and privacy.
        </p>

        <p className='raleway'>
          I'm also an aspiring lawyer, and was admitted to Harvard Law School's <a href='https://hls.harvard.edu/dept/jdadmissions/apply-to-harvard-law-school/the-application-process/junior-deferral-program/'>
          Junior Deferral Program</a>, where I intend
          on focusing on privacy law upon matriculation.
        </p>

        <p className='raleway'>
          My greatest vice is coffee and good food, followed closely thereafter by gaming. I love to travel, shoot photos,
          and run. I moonlight as a debater for the Brown Debating Union.
        </p>

        <p className='raleway'>
          You can a copy of my resume and transcript <Link href='/static/resume_transcript.pdf'><a>here</a></Link>.
          References are available upon request, as is an official transcript.
          If you're working on something interesting, reach out to me at <a href='mailto:ben@benjaminmurphy.me'>ben@benjaminmurphy.me</a>.
        </p>
      </div>
    </div>

    <Footer />

  </div>
);
