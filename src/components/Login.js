import React from 'react'
import styled from 'styled-components'

function Login(props) {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>
                        GET ALL THERE
                    </SignUp>
                    <Disclaimer>
                        Get Premier Access to many  more titles for
                        an additional fee with a Disney+ subscription.
                        As of 07/1/22, the price of Disney+ and The
                        Disney Bundle will increase by $1.
                    </Disclaimer>
                    <LogoTwo src="/images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
`;

const BgImage = styled.div`
height: 100%;
background-image: url("/images/login-background.jpg");
z-index: -1;
position: absolute;
background-position: top;
right: 0;
left: 0;
`;
const CTA = styled.div`
max-width: 650px;
width: 100%;
margin-bottom: 2vw;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function:ease-out;
transition: opacity 0.2s;
`;


const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%
`;

const SignUp = styled.div`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

const Disclaimer = styled.p`
margin: 0 0 24px;
text-align: center;
padding: 10px;
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const LogoTwo = styled.img`
margin-bottom: 20px;
max-width: 600px;
min-height: 1px;
display: inline-block;
vertical-align: bottom;
width: 100%
`;

export default Login
