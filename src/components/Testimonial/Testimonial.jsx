import personImg from '../../assets/person1.png';
import starsImg from '../../assets/review.png';
import './testimonial.css';

const Testimonial = () => {
  return (
    <div className='container'>
      <div className='testimonial section__padding-lg'>
        <div className='testimonial-container'>
          <h2>What our happy clients say</h2>
          <p>Things that make it the best place to start trading</p>
          <div className='testimonial__card'>
            <img className='user-image' src={personImg} alt='Picture of user' />
            <img className='star-review' src={starsImg} alt='Star review' />
            <h4>John De Marli</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
