import './testimonial.css';

const Testimonial = () => {
  return (
    <div className='container'>
      <div className='testimonial section__padding-lg'>
        <div className='testimonial-container'>
          <h2>What our happy client say</h2>
          <p>Things that make it the best place to start trading</p>
          <div className='testimonial__card'>
            <img />
            <img />
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
