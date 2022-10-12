import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='section__padding-lg'>
          <div className='footer__container'>
            <div className='footer__container-design'>
              <img />
              <h4>The Next Design</h4>
              <p>
                The copy warned the Little Blind Text, that where it came from
                it would have been rewritten a thousand times.
              </p>
              <img />
              <img />
              <img />
            </div>
            <div className='footer__container-links'>
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it Works</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='footer__container-links'>
              <h4>Get Help</h4>
              <ul>
                <li>Support Career</li>
                <li>24h Service</li>
                <li>Quick Chat</li>
              </ul>
            </div>
            <div className='footer__container-links'>
              <h4>Support</h4>
              <ul>
                <li>FAQ</li>
                <li>Policy</li>
                <li>Business</li>
              </ul>
            </div>
            <div className='footer__container-links'>
              <h4>Contact</h4>
              <ul>
                <li>WhatsApp</li>
                <li>Support 24</li>
              </ul>
            </div>
          </div>
          <div className='footer__copyright'></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
