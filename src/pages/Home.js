import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  // FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // GET DATA
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <StlGameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetails pathID={pathID} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <StlGames>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StlGames>
        <h2>Popular Games</h2>
        <StlGames>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StlGames>
        <h2>New Games</h2>
        <StlGames>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StlGames>
      </AnimateSharedLayout>
    </StlGameList>
  );
};

const StlGameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const StlGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
