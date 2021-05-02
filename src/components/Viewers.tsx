import styled from 'styled-components';
import ImgSlider from "./ImgSlider";

const Viewers = (props: any) => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    );
}

const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));

    @media ( max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
border-radius: 10px;
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
width: 250px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
}

&:hover {
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    trasition-duration: 300ms;
    border-radius: 4px;
    z-index: 1;

    video {
        opacity: 1;
    }
}

video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
}
`;

export default Viewers;