import './subscribe.css';

const Subscribe = () => {
  return (
    <div className='container'>
      <div className='subscribe section__padding-lg'>
        <div className='subscribe__container'>
          <div className='subscribe__content'>
            <h4>Subscribe newsletter</h4>
            <p>
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten.
            </p>
          </div>
          <div className='subscribe__input'>
            <input
              type='email'
              placeholder='Enter your email address...'
            ></input>
            <button type='button'>Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
