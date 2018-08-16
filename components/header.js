import Link from 'next/link';

export default () => (
  <div className='row'>
    <ul className='niveau'>
      <li>Benjamin Murphy</li>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/about'><a>About</a></Link></li>
      <li><Link href='/projects'><a>Projects</a></Link></li>
      <li><a href='blog.benjaminmurphy.me'>Blog</a></li>
    </ul>

    <style jsx>{`
      ul {
        width: 100%;

        margin: 5px 0 30px 0;
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
