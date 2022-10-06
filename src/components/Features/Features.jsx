import graphIcon from '../../assets/graph.png';
import syncIcon from '../../assets/sync.png';
import './features.css';

const Features = () => {
  return (
    <div className='features'>
      <div className='container'>
        <div className='section__padding-lg'>
          <div className='features__container'>
            <div className='features__achieve'>
              <p>ACHIEVE MORE</p>
              <h3>Purpose of a convoy is to keep your team</h3>
            </div>
            <div className='img-block'>
              <img src={graphIcon} alt='graph' />
              <div className='img-block-text'>
                <h3>Built for impact</h3>
                <p>
                  We identify and nurture a truly diverse team of designers,
                  developers and marketers
                </p>
              </div>
            </div>
            <div className='img-block'>
              <img src={syncIcon} alt='sync icon' />
              <div className='img-block-text'>
                <h3>In sync with you</h3>
                <p>
                  We work the way you do by adapting to your workflows and
                  rhythm we aim to blend in for a seamless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
