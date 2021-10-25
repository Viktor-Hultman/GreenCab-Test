import { Background, SectionDiv, ContinueButton, StyledLink } from './Landing';
import styled from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import ReactMapGL, { GeolocateControl } from "react-map-gl";
// import Geocoder from 'react-mapbox-gl-geocoder';

export const SearchDiv = styled.div`
width: 90%;
height: 90%;
display flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const SectionDivSearch = styled(SectionDiv)`
`

const TravelInput = styled.input`
width: 300px;
height: 50px;
background: #F7F7F7;
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 20px;
font-size: 16px;
padding: 10px;
`

const Map = styled.div`
width: 100vw;
height: 20%;
position: absolute;
bottom: 130px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


const ContinueButtonSearch = styled(ContinueButton)`
`

const DepatureSection = styled.div`
width: 90%;
min-height: 90%;
margin-bottom: 90px;
`

const TimeSection = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: space-around;
`

const TimeButton = styled.button`
width: 80px;
height: 40px;
background: #4D8C2D;
border: 1px solid #C4C4C4;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// box-shadow: inset 0px 7px 7px rgba(0, 0, 0, 0.5);
border-radius: 35px;
color: lightgray;

&:hover {
    cursor: pointer;
    border: 1px solid white;
}

&:active {
    box-shadow: inset 0px 7px 7px rgba(0, 0, 0, 0.5);
}
`

const TimeSelect = styled.div`
width: 90%;
height: 90%;
background: #4D8C2D;
`

// //Token for accessing the api
mapboxgl.accessToken = 'pk.eyJ1IjoidmlrdG9yaHVsdG1hbiIsImEiOiJja3RzZmIxcnkxZm84MnVtcHNlZm5oMnJvIn0.YoorBwfMIiBKtJ7kNaXn3Q';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidmlrdG9yaHVsdG1hbiIsImEiOiJja3RzZmIxcnkxZm84MnVtcHNlZm5oMnJvIn0.YoorBwfMIiBKtJ7kNaXn3Q';

function Search() {

    const geocoder1 = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: true,
        placeholder: "Start position",
        flyTo: true,
        mapboxgl: mapboxgl
    });

    const BaseMap = () => {

        useEffect(() => {
            var map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/streets-v11",
                center: [-74.5, 40],
                zoom: 9,
            });
            map.addControl(geocoder1);
        }, []);

        

        return (
            <>
                <Map id="map"></Map>
            </>
        )
    };

    return (
        <Background>
            <SearchDiv>
                <SectionDivSearch>
                    {/* <Geocoder /> */}
                    <TravelInput type="text" placeholder="From"></TravelInput>
                    <TravelInput type="text" placeholder="To"></TravelInput>
                </SectionDivSearch>
                <SectionDivSearch>
                    <DepatureSection>
                        <TimeSection>
                            <TimeButton>Åka Nu</TimeButton>
                            <TimeButton>Avgång</TimeButton>
                            <TimeButton>Ankomst</TimeButton>
                        </TimeSection>
                        <TimeSection>
                            <TimeSelect></TimeSelect>
                        </TimeSection>
                    </DepatureSection>
                </SectionDivSearch>
                <SectionDivSearch>
                    <BaseMap />
                    <StyledLink to="/search"><ContinueButtonSearch>Välj Bil</ContinueButtonSearch></StyledLink>
                </SectionDivSearch>
            </SearchDiv>
        </Background>
    );
};

export default Search;