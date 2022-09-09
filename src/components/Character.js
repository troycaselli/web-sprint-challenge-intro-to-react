// Write your Character component here
import styled from 'styled-components';
import {useState} from 'react';

// JSX styling
const Card = styled.div`
    border-bottom: 3px solid ${props => props.theme.primaryColor};
    padding: 1% 0;
    width: 80%;
`;

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;

    h3 {
        margin-right: 10px;
    }
`;

// buttons unicode
const closed = '\u21a1'
const open = '\u219f'

const ButtonClosed = styled.button`
    display: inline;
`;

const Button = styled.button`
    display: inline;
    font-size: 20px;
    background: ${props => props.theme.primaryColor};
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 0 7px 3px black;
`;

const Container = styled.div`
    display: flex;
    // justify-content: center;
`;

const Description = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 650px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export default function Character(props) {
const {person, index} = props;
const [arrow, setArrow] = useState(closed);

// handler that toggles button
const buttonToggle = () => {
    if(arrow === closed) {
        return setArrow(open);
    }
    return setArrow(closed);
}

// handler that toggles display
const displayToggle = () => {
    console.log('working');
}

    return (
        <Card>
            <HeadingContainer>
                <Heading>
                    <h3>{person.name} </h3>
                    <p>(B: {person.birth_year})</p>
                </Heading>
                <div>
                    <Button onClick={() => {buttonToggle(); displayToggle()}}>{arrow}</Button>
                </div>
            </HeadingContainer>
            {arrow === open ?  
                <Container>
                    <Description>
                        <Column>
                            <p>Gender: {person.gender}</p>
                            <p>Height: {person.height}</p>
                            <p>Mass: {person.mass}</p>
                        </Column>
                        <Column>
                            <p>Eye Color: {person.eye_color}</p>
                            <p>Hair Color: {person.hair_color}</p>
                            <p>Skin Color: {person.skin_color}</p>
                        </Column>
                    </Description>
                </Container>
                : null
            }
        </Card>
    );
}