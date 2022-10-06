import headerImg from '../../assets/header-img.png';
import clockImg from '../../assets/clock.png';
import { BsArrowUpRight } from 'react-icons/bs';
import './header.css';

const Header = () => {
  return (
    <div className='header section__padding'>
      <div className='header__container'>
        <div className='header__container-content'>
          <p className='content__highlight'>Jump start your growth</p>
          <h1>
            We boost the growth for <span>Startup</span> to Fortune 500
            Companies{' '}
            <span className='content__icon'>
              <img src={clockImg} />
            </span>
          </h1>
          <p className='content_blurb'>
            Get the most accurate leads, sales people training and conversions,
            tools and more — all within the same one billing.
          </p>
          <div className='header__container-content-input'>
            <input type='email' placeholder='Email address'></input>
            <button type='button'>
              <BsArrowUpRight color='#111124' size={25} />
            </button>
          </div>
        </div>
        <div className='header__container-image'>
          <img src={headerImg} alt='header' />
        </div>
      </div>
    </div>
  );
};

export default Header;
