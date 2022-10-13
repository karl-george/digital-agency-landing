import colorLogo from '../../assets/logo_color.png';
import twitterLogo from '../../assets/twitter.png';
import facebookLogo from '../../assets/facebook.png';
import linkedinLogo from '../../assets/linkedin.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='section__padding-lg'>
          <div className='footer__container'>
            <div className='footer__container-design'>
              <div className='footer_container-design-title'>
                <img src={colorLogo} alt='logo' />
                <h4>The Next Design</h4>
              </div>
              <p>
                The copy warned the Little Blind Text, that where it came from
                it would have been rewritten a thousand times.
              </p>
              <a href=''>
                <img src={facebookLogo} alt='facebook logo' />
              </a>
              <a href=''>
                <img src={twitterLogo} alt='twitter logo' />
              </a>
              <a href=''>
                <img src={linkedinLogo} alt='linkedin logo' />
              </a>
            </div>
            <div className='footer__container-links'>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href=''>About</a>
                </li>
                <li>
                  <a href=''>Terms of Use</a>
                </li>
                <li>
                  <a href=''>Privacy Policy</a>
                </li>
                <li>
                  <a href=''>How it Works</a>
                </li>
                <li>
                  <a href=''>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className='footer__container-links'>
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href=''>Support Career</a>
                </li>
                <li>
                  <a href=''>24h Service</a>
                </li>
                <li>
                  <a href=''>Quick Chat</a>
                </li>
              </ul>
            </div>
            <div className='footer__container-links'>
              <h4>Support</h4>
              <ul>
                <li>
                  <a href=''>FAQ</a>
                </li>
                <li>
                  <a href=''>Policy</a>
                </li>
                <li>
                  <a href=''>Business</a>
                </li>
              </ul>
            </div>
            <div className='footer__container-links'>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href=''>WhatsApp</a>
                </li>
                <li>
                  <a href=''>Support 24</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__copyright'>
            <p>Copyright © 2022 Karl George</p>
            <p>Original Design by AR Shakir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
