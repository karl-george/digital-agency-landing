import './mediablock.css';

const MediaBlock = ({ img, title, content, desc, link }) => {
  return (
    <div className='mediablock'>
      <img src={img} alt={`${img}`} />
      <div className='mediablock-content'>
        <h4>{desc}</h4>
        <h3>{title}</h3>
        <p>{content}</p>
        <a href='#'>
          <p>Learn more about {link} &rarr;</p>
        </a>
      </div>
    </div>
  );
};

export default MediaBlock;
