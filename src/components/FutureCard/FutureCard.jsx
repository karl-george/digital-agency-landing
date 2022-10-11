import './futurecard.css';

const FutureCard = ({ img, title, content }) => {
  return (
    <div className='future-card'>
      <div className='future-card__div'>
        <img src={img} alt={`${img} icon`} />
        <h4>{title}</h4>
        <p>{content}</p>
        <a href='#'>LEARN MORE</a>
      </div>
    </div>
  );
};

export default FutureCard;
