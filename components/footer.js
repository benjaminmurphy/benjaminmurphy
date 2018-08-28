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
        background-color: rgba(100, 100, 100, 0.9);
        border-radius: 5px 5px 0 0;
      }

      span {
        width: 100%;
        text-align: center;
        color: #aaa;
      }

    `}</style>

    <span className='raleway header'>
      Made by Benjamin Murphy.
      All rights reserved.
      Source available <a href='https://github.com/benjaminmurphy/benjaminmurphy'>here</a>.
    </span>
  </div>
);
