import "./menucard.css";

const Menucard = ({ title, price, image }) => {
  return (
    <article className="menu-card">
      {image && (
        <div className="menu-card__img-container">
          <img className="menu-card__img" src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="menu-card__content">
        <h3 className="menu-card__title">{title}</h3>
        <span className="menu-card__price">{price}</span>
      </div>
    </article>
  );
};

export default Menucard;