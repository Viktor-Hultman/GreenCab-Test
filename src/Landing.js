import styled from 'styled-components';
import { Link } from 'react-router-dom';

import GreenCabLogo from './imgs/GreenCabLogo.png'

export const Background = styled.div`
width: 100vw;
height: 100vh;
background : #D3E9C1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const LandingInfo = styled.div`
width: 90%;
height: 90%;
display flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border: 1px solid rgba(71, 142, 35, 0.41);
box-shadow: 2px 4px 4px rgba(11, 63, 10, 0.22);
border-radius: 30px;
`

export const ContinueButton = styled.div`
width: 200px;
height: 50px;
display flex;
align-items: center;
justify-content: center;
background: linear-gradient(180deg, #8CC96D 0%, #478E23 100%);
border: 1px solid #C4C4C4;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 35px;
color: black;

position: absolute;
bottom: 60px;
left: 50%;
transform: translate(-50%, 0);

&:hover {
    cursor: pointer;
    border: 1px solid white;
}

&:active {
    box-shadow: inset 0px 7px 7px rgba(0, 0, 0, 0.5);
}
`

export const SectionDiv = styled.div`
width: 90%;
height: 30%;
display flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
`

export const SubHeading = styled.h3`
margin-bottom: 10px;
`

export const StyledLink = styled(Link)`
text-decoration: none;

// transition: color 0.4s;
`


function Landing() {
    return (
        <Background>
            <LandingInfo>
                <SectionDiv>
                    <img src={GreenCabLogo} alt="GreenCab logo"></img>
                </SectionDiv>
                <SectionDiv>
                    <SubHeading>Hej Viktor, välkommen tillbaka!</SubHeading>
                    <p>Just nu kan du boka en av våra taxibilar och få 10% rabatt på din resa.</p>
                </SectionDiv>
                <SectionDiv>
                    <StyledLink to="/search"><ContinueButton>Sök resa</ContinueButton></StyledLink>
                </SectionDiv>
            </LandingInfo>
        </Background>
    );
};

export default Landing;