import React from "react";
import { CardProps } from "./Card.types";
import { StyledCard } from "./Card.styles";

const Card: React.FC<CardProps> = ({ title, content, image, footer, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-content">{content}</p>}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </StyledCard>
  );
};

export default Card;
