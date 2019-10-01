import React from 'react';
import styled from 'styled-components';
import MovieCard from './components/MovieCard.js';
import MovieData from './movie_data.js';
import { Header, Footer } from './pageElements';

const MovieImg = styled.img`
  width: 250px;
  margin-left: 500px;
  margin-top: 100px;
`;

const Button = styled.button`
  margin-left: 10px;
  height: 40px;
  justify-self: flex-end;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 97vh;
  width: 100%
  
`;

//I COULD NOT get this to display at 100% height for some reason...what worked was using the vh (view height) unit.



//MovieData[randomNum()] picks a random title from the data set.

function App() {
  
  return (
    <MainDiv className='app container'>

      <Header>
        Lookit
      </Header>

      <MovieCard />

      <Footer>
        Aleesha Wood 2019
      </Footer>
    </MainDiv>
  );
};
//this is a way to incorporate a button link that doesn't fire immediately as the DOM renders.
//TODO find a way to get it to open in a new tab?

export default App;
