import styled from "styled-components";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';


function Details(props: any) {

    const { id } = useParams<{ id: string }>(); // to get query params from url

    const [movieDetails, setMovieDetails] = useState({} as any);

    useEffect(() => {
        db.collection('Movies')
            .doc(id)
            .get()
            .then((doc: any) => {
                if (doc.exists) {
                    setMovieDetails(doc.data());
                } else {
                    console.log(' No such record found in firebase.');
                }
            }).catch((error: any) => {
                console.log("Some error occured. Look below for more details: ");
                console.log(error.message);
            });
    }, [id])


    return (
        <Container>
            <Background>
                <img
                    src={movieDetails.backgroundImg}
                    alt={movieDetails.title} />
            </Background>
            <MovieTitle>
                <img
                    src={movieDetails.titleImg}
                    alt={movieDetails.title} />
            </MovieTitle>
            <ContentMeta>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png"
                            alt="play button" />
                            Play
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png"
                            alt="play trailer button" />
                            Trailer
                    </TrailerButton>
                    <AddToList>
                        <span></span>
                        <span></span>
                    </AddToList>
                    <GroupWatch>
                        <img
                            src="/images/group-icon.png"
                            alt="group watch icon" />
                    </GroupWatch>
                </Controls>
                <MovieSubTitle>
                    {movieDetails.subTitle}
                </MovieSubTitle>
                <MovieDescription>
                    {movieDetails.description}
                </MovieDescription>
            </ContentMeta>
        </Container>
    );
}

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const MovieTitle = styled.div`
align-items: flex-end;
display: flex;
justify-content: flex-start;
height: 30vw;
min-height: 170px;
width: 100%;
padding-bottom: 24px;
margin: 0px auto;

    img {
        max-width: 35vw;
    }
`;

const ContentMeta = styled.div`
max-width: 874px;
`;

const Controls = styled.div`
display: flex;
flex-direction: row nowrap;
margin: 24px 0px;
min-height: 56px;
`;

const PlayButton = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
cursor: pointer;
height: 56px;
background: rgb(249, 249, 249);
border: none;
color: (0, 0, 0);

    img  {
        width: 32px;
    }

    &:hover {
        background: rgb( 198, 198, 198);
    }

    @media (max-width:768px){
        height: 45px;
        padding: 0px 22px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`;

const TrailerButton = styled(PlayButton)`

background: rgb(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;

const AddToList = styled.div`
margin-right: 16px;
height: 56px;
width: 56px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: rgb(0, 0, 0, 0.6);
border: 2px solid white;
cursor: pointer;

    span {
        display:inline-block;
        background-color: rgb(249, 249, 249);

        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
margin-right: 16px;
height: 56px;
width: 56px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: rgb(0, 0, 0, 0.6);
border: 2px solid white;
cursor: pointer;
background: rgb(0, 0, 0);
border-radius: 50%;

img {
    width: 100%;
}
`;

const MovieSubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const MovieDescription = styled.div`
color: rgb(249, 249, 249);
font-size: 20px;
line-height: 1.4;
padding: 16px 0px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

`;

export default Details;