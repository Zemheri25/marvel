import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ character }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/details", { state: { character } });
  };

  return (
    <div className="Cardmain" onClick={handleDetails}>
      <img
        src={character.thumbnail.path + "/portrait_xlarge.jpg"}
        alt="image"
        className="cardimg"
      />
      <div className="titlediv">
        <h3 className="title">{character.name}</h3>
      </div>
    </div>
  );
};

export default Card;
