import './mediablock.css';

const MediaBlock = ({ img, title, content, desc, link }) => {
  return (
    <div className='mediablock'>
      <img src={img} alt={`${img}`} />
      <div className='mediablock_content'>
        <h4>{desc}</h4>
        <h3>{title}</h3>
        <p>{content}</p>
        <a>
          <p>
            Learn more about {link} {`->`}
          </p>
        </a>
      </div>
    </div>
  );
};

export default MediaBlock;
