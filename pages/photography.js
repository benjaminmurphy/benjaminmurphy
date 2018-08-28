import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

const images = [
  'bamboo.jpg',
  'blossoms.jpg',
  'cherries.jpg',
  'light.jpg',
  'providence.jpg',
  'sky.jpg',
];

const firstHalf = images.length / 2;

export default () => (
  <div id='base'>
    <style jsx>{`
      div.root {
        padding-top: 5%;
        position: relative;
        min-height: 100%;
      }

      div.about, div.photography, div.contact, div.projects {
        padding-top: 0;
        padding-bottom: 10px;
      }

      div.photography {
        margin-bottom: 30px;
      }

      div.photography h1 {
        display: block;
      }

      img {
        width: 100%;
        padding: 15px 0 15px 0;
      }
    `}</style>

    <div className='container root'>
      <Head renderBackground={false} />
      <Header />

      <div className='row'>
        <div className='photography col-md-6'>
          { images.slice(0, firstHalf).map(fn => <img key={ fn } src={ `/static/${fn}` } />) }
        </div>
        <div className='photography col-md-6'>
          { images.slice(firstHalf).map(fn => <img key={ fn } src={ `/static/${fn}` } />) }
        </div>
      </div>

      <Footer />
    </div>
  </div>
);
