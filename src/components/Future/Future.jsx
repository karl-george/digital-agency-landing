import FutureCard from '../FutureCard/FutureCard';
import tickImg from '../../assets/tick.png';
import stackImg from '../../assets/stack.png';
import bulbImg from '../../assets/bulb.png';
import cog2Img from '../../assets/cog2.png';
import chartImg from '../../assets/chart.png';
import './future.css';

const Future = () => {
  return (
    <div className='container'>
      <div className='future section__padding-lg'>
        <div className='future__container'>
          <div className='future__content'>
            <h2>Future of support with new shape</h2>
            <p>
              Discuss your goals, determine success metrics, identify problems
            </p>
            <div className='future__content-list'>
              <p>
                <span>
                  <img src={tickImg} alt='tick icon' />
                </span>
                UX design content strategy
              </p>
              <p>
                <span>
                  <img src={tickImg} alt='tick icon' />
                </span>
                Development bring
              </p>
            </div>
            <button>Get started</button>
          </div>
          <div className='future-card__container'>
            <FutureCard
              img={stackImg}
              title={`Web Design`}
              content={`One for all and all for one, Muskehounds are always ready.`}
            />
            <FutureCard
              img={bulbImg}
              title={`Ad-Creatives`}
              content={`Alphabet Village and the subline of her own road.`}
            />
            <FutureCard
              img={cog2Img}
              title={`Automation`}
              content={`Little Blind Text should turn around and return.`}
            />
            <FutureCard
              img={chartImg}
              title={`Infographics`}
              content={`Nothing the copy said could convince her.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
