import React from "react";
import { Link } from "react-router-dom";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Game = ({ name, released, image, id }) => {
  // Load Details
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <StlGame onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StlGame>
  );
};

const StlGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
