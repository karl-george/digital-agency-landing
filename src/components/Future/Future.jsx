import FutureCard from '../FutureCard/FutureCard';
import tickImg from '../../assets/tick.png';
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
            <FutureCard img={} title={} content={}/>
            <FutureCard img={} title={} content={}/>
            <FutureCard img={} title={} content={}/>
            <FutureCard img={} title={} content={}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
