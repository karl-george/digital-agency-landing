import HelpCard from '../HelpCard/HelpCard';
import rocketImg from '../../assets/rocket.png';
import cogImg from '../../assets/cog.png';
import glassImg from '../../assets/glass.png';
import './help.css';

const Help = () => {
  return (
    <div className='container'>
      <div className='help section_padding-lg'>
        <div className='help-title'>
          <h2>How can we help your business?</h2>
          <p>When you resell besnik, you build trust and increase</p>
        </div>
        <div className='help-cards'>
          <HelpCard
            img={glassImg}
            title={'Find out what you need'}
            content={'We present you a proposal and discuss nitty- gritty like'}
          />
          <HelpCard
            img={cogImg}
            title={'Work out the details'}
            content={'Communication protocols apart from engagement models'}
          />
          <HelpCard
            img={rocketImg}
            title={'We get to work fast'}
            content={'Protocols apart from engage models, pricing billing'}
          />
        </div>
        <div className='help-button'>
          <button>Become a Partner</button>
        </div>
      </div>
    </div>
  );
};

export default Help;
