import Head from '../components/head';
import Header from '../components/header';

export default () => (
  <div className='container root'>
    <Head />
    <Header />

    <style jsx>{`
      div.root {
        margin-top: 5%;
      }
    `}</style>

  </div>
);
