import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewArrivals from './NewArrivals';
import Originals from './Originals';
import Recommendations from './Recommendations';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from 'react';
import db from "../firebase";
import { useStateValue } from '../app/StateProvider';
import { MovieDetailsActions } from '../reducers';



function Home(props: any) {

    const { state, dispatch } = useStateValue();
    const userName = state.user.name;
    let recommendsList: any[] = [];
    let newDisneyList: any[] = [];
    let originalsList: any[] = [];
    let trendingList: any[] = [];


    useEffect(() => {
        if (userName) {

            db.collection("Movies").onSnapshot((snapshot) => {
                snapshot.docs.forEach(doc => {
                    switch (doc.data().type) {
                        case "recommend":
                            recommendsList = [...recommendsList, { id: doc.id, ...doc.data() }];
                            break;
                        case "trending":
                            trendingList = [...trendingList, { id: doc.id, ...doc.data() }];
                            break;
                        case "new":
                            newDisneyList = [...newDisneyList, { id: doc.id, ...doc.data() }];
                            break;
                        case "original":
                            originalsList = [...originalsList, { id: doc.id, ...doc.data() }];
                            break;
                    }
                })

                setMovies(recommendsList, trendingList, newDisneyList, originalsList);
            });
        }
    }, [userName]);

    const setMovies = (recommends: any[], trending: any[], newDisney: any[], original: any[]) => {
        dispatch({
            type: MovieDetailsActions.SET_MOVIE,
            payload: {
                recommend: recommends,
                trending: trending,
                newDisney: newDisney,
                original: original,
            }
        })
    }
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