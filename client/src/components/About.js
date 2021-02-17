import React from "react";
import styled from 'styled-components';

const About = () => {
    return (
    <Wrapper>
        <h1>About Us</h1>
        <p>Just a couple of coder gals with a tech store.</p>
    </Wrapper>
    )
}

export default About;

const Wrapper = styled.div`
padding: 20px;
`;