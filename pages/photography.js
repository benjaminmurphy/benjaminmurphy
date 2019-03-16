import React from 'react';

import Head from '../components/head';
import Header from '../components/header';

const galleries = new Map([
  ['Nature', [
    'bamboo.jpg',
    'blossoms.jpg',
    'cherries.jpg',
    'light.jpg',
    'providence.jpg',
    'sky.jpg',
  ]],
  ['Hamburg', [
    'hamburg1.jpg',
    'hamburg2.jpg',
    'hamburg3.jpg',
  ]],
  ['Oaxaca', [
    'oaxaca1.jpg',
    'oaxaca2.jpg',
    'oaxaca3.jpg',
    'oaxaca4.jpg',
    'oaxaca5.jpg',
    'oaxaca6.jpg',
    'oaxaca7.jpg',
    'oaxaca8.jpg',
    'oaxaca9.jpg',
    'oaxaca10.jpg',
    'oaxaca11.jpg',
    'oaxaca12.jpg',
    'oaxaca13.jpg',
  ]],
]);

export default class Photography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGallery: null,
    };
  }

  activateGallery(key, event) {
    if (this.state.activeGallery === key) {
      this.setState({
        activeGallery: null,
      });
    } else {
      this.setState({
        activeGallery: key,
      });
    }
  }

  render() {
    const { activeGallery } = this.state;

    const overlay = activeGallery === null ? '' : (
      <div>
        <style jsx>{`
          div.overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10;
          }

          img.icon {
            width: 100%;
            padding-bottom: 30px;
          }

          div.scroll {
            overflow-y: auto;
          }

          div.photo-wrapper {
            display: flex;
          }

          div.title {
            padding: 30px 0 30px 0;
            font-size: 24px;
          }
        `}</style>

        <div className='overlay' onClick={this.activateGallery.bind(this, activeGallery)}>
          <div className='h-100 container scroll align-items-center'>
            <div className='row'>
              <div className='col col-12 title text-center cormorant isabelline'>
                {activeGallery}
              </div>
            </div>
            <div className='row'>
              {  galleries.get(activeGallery).map(photo => (
                  <div className='col col-sm-12 col-lg-6'>
                    <img className='icon' key={photo} src={`/static/${photo}`} />
                  </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className='container root'>
        <style jsx>{`
          div.root {
            padding-top: 5%;
            position: relative;
          }

          body {
            background-color: #efefef;
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

          img.icon {
            width: 100%;
            padding: 15px 0 15px 0;
          }

          div.gallery {
           font-size: 16px;
           width: 100%;
          }

          img.gallery-icon {
            width: 100%;
          }
        `}</style>

        <Head />
        <Header />

        { overlay }

        <div className='row'>
          { Array.from(galleries, ([key, value]) => (
            <div className='col col-4' onClick={this.activateGallery.bind(this, key)} key={key}>
              <img className='gallery-icon' src={`/static/${value[0]}`} />
              <div className='gallery text-center cormorant jet'>{key}</div>
            </div>
          )) }
        </div>
      </div>
    );
  }
};
