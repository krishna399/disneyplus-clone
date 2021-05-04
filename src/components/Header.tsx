import styled from 'styled-components'
import React, { useEffect } from 'react'
import { auth, provider } from '../firebase'
import { useStateValue } from '../app/StateProvider';
import { useHistory } from 'react-router-dom';
import { UserActions } from '../reducers/index'

function Header(props: any) {
    const history = useHistory();
    const { state, dispatch } = useStateValue();
    const { name: userName, photo: userPhoto } = state.user;

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push("/home")
            }
        })
    }, [userName]);

    const handleAuthentication = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                window.alert(error.message);
            });
        } else {
            auth.signOut().then(() => {
                dispatch({
                    type: UserActions.USER_SIGNOUT,
                });
                history.push('/');
            }).catch((error) =>
                console.log(error.message));
        }

    };

    const setUser = (user: any) => {
        dispatch({
            type: UserActions.USER_LOGIN,
            payload: {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }
        });
    };


    return (
        <HeaderNav>
            <HeaderLogo>
                <img src="/images/logo.svg" alt="logo" />
            </HeaderLogo>

            { !userName ? (
                <Login onClick={handleAuthentication}>LOGIN</Login>)
                : (<>
                    <HeaderNavMenu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt="Home" />
                            <span>HOME</span>
                        </a>
                        <a href="/home">
                            <img src="/images/search-icon.svg" alt="search" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/home">
                            <img src="/images/watchlist-icon.svg" alt="watchlist" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/home">
                            <img src="/images/original-icon.svg" alt="originals" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/home">
                            <img src="/images/movie-icon.svg" alt="movies" />
                            <span>MOVIES</span>
                        </a>
                        <a href="/home">
                            <img src="/images/series-icon.svg" alt="series" />
                            <span>SERIES</span>
                        </a>
                    </HeaderNavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <Dropdown>
                            <span onClick={handleAuthentication}>
                                Sign Out
                            </span>
                        </Dropdown>
                    </SignOut>
                </>
                )}

        </HeaderNav>
    )
}

const HeaderNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
background-color: #090b13;
width: 100%;
top: 0;
left: 0;
right: 0;
height: 70px;
padding: 0 36px;
z-index: 3;
letter-spacing: 16px;
`;

const HeaderLogo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height:70px;
font-size: 0; 
display: inline-block;
img {
    display: block;
    width: 100%;
}
`;

const HeaderNavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
height: 100%;
padding: 0px;
margin: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;

a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span {
        font-size: 13px;
        color: rgb(249,249,249);
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0;
        white-space: nowrap;
        position: relative;

        &:before {
            background-color: rgb(249,249,249);
            border-radius: 0pxx 0px 4px 4px;
            bottom: -6px;
            height: 2px;
            opacity: 0;
            position: absolute;
            right: 0px;
            left: 0px;
            content: "";
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }

    }
     /* @media (max-width: 768px) {
    display: none;
    } */
}
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
border-radius: 4px;
text-decoration: none;
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.6px;
border: 1px solid #f9f9f9;
transitions: all 0.2s ease 0s;

    &: hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const Dropdown = styled.div`
position: absolute;
top: 50px;
background: rgb(19, 19 ,19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0/ 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 1.5px;
width: 100px;
align-items:center;
display: flex;
justify-content: center;
opacity: 0;
`;

const SignOut = styled.div`
position: relative;
display: flex:
height: 48px;
width: 48px;
cursor: pointer;
alig-items: center; /* to align items vertically */
justify-content: center; /* to align items horizontally */

    &:hover {
        ${Dropdown} {
            opacity: 1;
            transition-duration: 0.8s;
        }
    }
`;

const UserImg = styled.img`
overflow: hidden;
border-radius: 50%;
height: 100%;
width: 100%;
position: relative;
display: flex;
`;




export default Header
