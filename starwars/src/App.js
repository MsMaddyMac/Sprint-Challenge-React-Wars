import React from 'react';
import './App.css';
import PeepsGrid from "./components/PeepsGrid";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%
  max-width: 850px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const H1 = styled.h1`
  color: #b05b33;
  font-size: 45px;
`;

const H2 = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 35px; 
  margin-top: 1px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <MainContainer className="container">
        <H1 className="Header">React Wars</H1>
        <H2> Meet the Star Wars Peeps</H2>
        <PeepsGrid />
      </MainContainer>
    </div>
  );
}

export default App;
