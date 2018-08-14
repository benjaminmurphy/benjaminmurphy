export default () => (
  <div className='footer row'>
    <style jsx>{`
      div.footer {
        position: absolute;
        bottom: 0px;

        width: 100%;
        min-height: 30px;
        border-top: 1px solid black;
      }

      span {
        width: 100%;
        text-align: center;
      }

    `}</style>

    <span className='header'>
      Made by Benjamin Murphy.
      All rights reserved.
      Source available <a href='https://github.com/benjaminmurphy/benjaminmurphy'>here</a>.
    </span>
  </div>
);
