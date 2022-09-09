import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';

// JSX styling
const Container = styled.div`
  background: ${props => props.theme.tertiaryColor};
  width: 80%;
  margin: auto;
  opacity: 0.8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  const [info, setInfo] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setInfo(res.data)
    }).catch(err => console.error(err));
  }, [])

  console.log(info);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container>
        {info.map((person, idx) => {
          return <Character person={person} key={idx}/>
        })}
      </Container>
    </div>
  );
}

export default App;
