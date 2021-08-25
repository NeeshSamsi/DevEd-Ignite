import React, { useState } from "react";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

// Redux and Routes
import { fetchSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StlNav>
      <StlLogo onClick={clearSearched}>
        <img src={logo} alt="Ignite Logo" />
        <h1>Ignite</h1>
      </StlLogo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StlNav>
  );
};

const StlNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const StlLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
