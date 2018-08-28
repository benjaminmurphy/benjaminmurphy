import { SocialIcon } from 'react-social-icons';

export default () => (
  <div>
    <style jsx global>{`
      a.social-icon {
        max-height: 35px !important;
        max-width: 35px !important;
        margin: 5px;
        opacity: 1;
      }

      a.social-icon:hover {
        opacity: 0.7;
      }

      a svg {
        filter: brightness(70%);
      }
    `}</style>

    <div className='social'>
      <SocialIcon url='https://twitter.com/benjaminmmurphy' />
      <SocialIcon url='https://github.com/benjaminmurphy' />
      <SocialIcon url='https://linkedin.com/in/benjamin-murphy-16249497' />
      <SocialIcon url='mailto:ben@benjaminmurphy.me' />
    </div>
  </div>
);
