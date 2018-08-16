export default () => (
  <div className='footer row'>
    <style jsx>{`
      div.footer {
        position: absolute;
        bottom: 0px;

        width: 100%;
        line-height: 30px;
        vertical-align: middle;
        height: 30px;
      }

      span {
        width: 100%;
        text-align: center;
      }

    `}</style>

    <span className='raleway header'>
      Made by Benjamin Murphy.
      All rights reserved.
      Source available <a href='https://github.com/benjaminmurphy/benjaminmurphy'>here</a>.
    </span>
  </div>
);
