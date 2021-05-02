import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewArrivals from './NewArrivals';
import Originals from './Originals';
import Recommendations from './Recommendations';
import Trending from './Trending';
import Viewers from './Viewers';

function Home(props: any) {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommendations />
            <NewArrivals />
            <Originals />
            <Trending />
        </Container>
    );
}

const Container = styled.main`
position: relative;
background: url('/images/home-background.png') fixed;
background-repeat: no-repeat;
background-size: cover; 
overflow-x: hidden;
min-height: calc(100vh - 250px);
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

    &:after {
        position: absolute;
        content: '';
        z-index: -1;
        /* opacity: 1;
        inset: 0px; */
    }
`;

export default Home;