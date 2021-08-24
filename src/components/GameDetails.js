import React from "react";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

const GameDetails = () => {
  // Data
  const { game, screen, isLoading } = useSelector((state) => state.details);

  return (
    <>
      {!isLoading && (
        <StlCardShadow>
          <StlDetails>
            <StlStats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <StlInfo>
                <h3>Platforms</h3>
                <StlPlatforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                </StlPlatforms>
              </StlInfo>
            </StlStats>
            <StlMedia>
              <img
                src={game.background_image}
                alt={game.name + "'s background image"}
              />
            </StlMedia>
            <StlDescription>
              <p>{game.description_raw}</p>
            </StlDescription>
            <div className="gallery">
              {screen.results &&
                screen.results.map((screen) => (
                  <img
                    src={screen.image}
                    alt={game.name + " screenshot"}
                    key={screen.id}
                  />
                ))}
            </div>
          </StlDetails>
        </StlCardShadow>
      )}
    </>
  );
};

const StlCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StlDetails = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }
`;

const StlStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StlInfo = styled(motion.div)`
  text-align: center;
`;

const StlPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const StlMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const StlDescription = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetails;
