import hubspotImg from '../../assets/hotspot.png';
import slackImg from '../../assets/slack.png';
import amazonImg from '../../assets/amazon.png';
import wooImg from '../../assets/woo.png';
import meundiesImg from '../../assets/meundies.png';
import sitepointImg from '../../assets/sitepoint.png';
import './brands.css';

const Brands = () => {
  return (
    <div className='brands section__padding'>
      <div className='brands__container'>
        <div className='hubspot'>
          <img src={hubspotImg} />
        </div>
        <div className='slack'>
          <img src={slackImg} />
        </div>
        <div className='amazon'>
          <img src={amazonImg} />
        </div>
        <div className='woo'>
          <img src={wooImg} />
        </div>
        <div className='meundies'>
          <img src={meundiesImg} />
        </div>
        <div className='sitepoint'>
          <img src={sitepointImg} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
