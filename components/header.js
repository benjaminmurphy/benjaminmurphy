import Link from 'next/link';

export default () => (
  <div className='row'>
    <ul className='niveau'>
      <li className='red'>benjamin murphy</li>
      <li><Link href='/'><a>home</a></Link></li>
      <li><Link href='/about'><a>about</a></Link></li>
      <li><Link href='/photography'><a>photography</a></Link></li>
      <li><a href='https://blog.benjaminmurphy.me'>blog</a></li>
    </ul>

    <style jsx>{`
      ul {
        width: 100%;

        margin: 0 0 30px 0;
        padding: 0;
      }

      ul li {
        list-style: none;

        display: inline-block;
        margin: 5px 20px;
        font-size: 16px;
      }
    `}</style>
  </div>
);
