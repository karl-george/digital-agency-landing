import headerImg from '../../assets/header-img.png';
import './header.css';

const Header = () => {
  return (
    <div className='header section__padding'>
      <div className='header__container'>
        <div className='header__container-content'>
          <p>Jump start your growth</p>
          <h1>
            We boost the growth for <span>Startup</span> to Fortune 500
            Companies
          </h1>
          <p>
            Get the most accurate leads, sales peopele training and conversions,
            tools and more — all within the same one billing.
          </p>
          <input></input>
          <button type='button'></button>
        </div>
        <div className='header__container-image'>
          <img src={headerImg} alt='header' />
        </div>
      </div>
    </div>
  );
};

export default Header;
