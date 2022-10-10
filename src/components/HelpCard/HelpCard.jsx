import './helpcard.css';

const HelpCard = ({ img, title, content }) => {
  return (
    <div className='helpcard'>
      <div className='helpcard-container'>
        <img src={img} alt={`${img} icon`} />
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HelpCard;
