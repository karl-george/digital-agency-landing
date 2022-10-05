import { useState } from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
    <p>
      <a href='#about'>About Us</a>
    </p>
    <p>
      <a href='#service'>Our Service</a>
    </p>
    <p>
      <a href='#team'>The Team</a>
    </p>
    <p>
      <a href='#portfolio'>Portfolio</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar section__padding'>
      <div className='navbar__container'>
        <div className='navbar__container-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar__container-links'>
          <Menu />
        </div>
      </div>
      <div className='navbar__btn'>
        <button type='button'>Get in touch</button>
      </div>
    </div>
  );
};

export default Navbar;
