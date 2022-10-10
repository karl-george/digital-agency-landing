import MediaBlock from '../MediaBlock/MediaBlock';
import customerCardImg from '../../assets/customer-card.png';
import discoverCardImg from '../../assets/discover-card.png';
import './mediasection.css';

const MediaSection = () => {
  return (
    <div className='container'>
      <div className='mediasection section__padding-lg'>
        <MediaBlock
          img={customerCardImg}
          title={`Great customer relationship starts here`}
          content={`80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind.`}
          desc={`SCHEDULE`}
          link={`publishing`}
        />
        <MediaBlock
          img={discoverCardImg}
          title={`Introducing best mobile carousels`}
          content={`Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.`}
          desc={`MONITOR`}
          link={`monitoring`}
        />
      </div>
    </div>
  );
};

export default MediaSection;
