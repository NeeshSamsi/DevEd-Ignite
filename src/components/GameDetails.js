import React from "react";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Images
// Platforms
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// Stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = () => {
  const history = useHistory();
  // Exit Details
  const exitDetailsHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Text to Platform Icon
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One" || "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Rating to Stars
  const getRatingStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="empty star" key={i} />);
      }
    }

    return stars;
  };

  // Data
  const { game, screen, isLoading } = useSelector((state) => state.details);

  return (
    <>
      {!isLoading && (
        <StlCardShadow className="shadow" onClick={exitDetailsHandler}>
          <StlDetails layoutId>
            <StlStats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getRatingStars()}
              </div>
              <StlInfo>
                <h3>Platforms</h3>
                <StlPlatforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        src={getPlatformIcon(data.platform.name)}
                        alt={data.platform.name + " Icon"}
                        key={data.platform.id}
                      />
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

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
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
