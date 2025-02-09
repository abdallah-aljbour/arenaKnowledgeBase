import { FC } from "react";
import { CardData } from "./types";
import "./Card.scss";

const Card: FC<CardData> = ({ image, title, description, icons }) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        <div className="titleDescription">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>
        <div className="card__icons">
          {icons.map((icon, index) => (
            <div key={index} className="card__icon-container">
              <img src={icon.image} alt={icon.text} className="card__icon" />
              <span className="card__icon-text">{icon.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
