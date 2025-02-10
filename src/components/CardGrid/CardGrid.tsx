import { FC } from "react";
import Card from "../Card/Card";
import { CardData } from "../Card/types";
import "./CardGrid.scss";

interface CardGridProps {
  cards: CardData[];
  maxHeight?: string; // Optional prop to control container height
}

const CardGrid: FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="card-grid-container">
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
