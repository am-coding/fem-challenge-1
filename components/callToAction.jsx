import React from 'react';
import styled from "styled-components";

const StyledAction = styled.div`
    max-width: 76%;
    margin: 0 auto;
    padding-block: 2rem;
    h1 {
        font-size: 2.5rem;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        padding-bottom: 1rem;
        letter-spacing: 0.4rem;
    }
    span {
        color: hsl(0, 36%, 70%);
        font-weight: 300;
    }
    p {
        color: hsl(0, 36%, 70%);
        text-align: center;
        font-size: 0.8rem;
        padding-bottom: 1rem;
        line-height: 1.3;
    }
    .input-div {
        border-radius: 200px;
        color: hsl(0, 36%, 70%);
        display: flex;
        justify-content: space-between;
        border-right: none;
    }
    input {
        border: 2px solid  #d1d1d1;
        border-right: none;
        border-radius: 200px;
        width: 100%;
        padding-left: 1.2rem;
        margin-right: -4.2rem;
    }
    button {
        background-image: linear-gradient(to right top, #f8bfbf, #f6b2b2, #f4a6a5, #f19999, #ee8c8c);    
        border: none;
        padding-block: 0.7rem;
        padding-inline: 1.8rem;
        border-radius: 200px;
    }
    @media only screen and (min-width: 1024px) {
        max-width: 100%;
        margin: 0;
        padding-block: 0rem;
        h1 {
            max-width: 2rem;
            font-size: 2.5rem;
        }
        p {
            text-align: left;
        }
`;

const Action = () => {
    return (
        <StyledAction>
            <h1><span>We're</span> coming soon</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <div className="input-div">
            <input placeholder="Email Address" />
            <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 1l8.836 8.836L1 18.671"/></svg></button>
            </div>
        </StyledAction>
    )
}

export default Action;
