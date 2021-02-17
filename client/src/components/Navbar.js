import React from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

const Navbar = () => {
    const myCart = useSelector((state) => state.myCartReducer);

    return (
    <NavArea>
        <Menu>
            <StyledLink exact to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <Logo src=".././LSM-logo.png"/>
            <StyledLink to="/products">Products</StyledLink>
            <StyledLink to="/cart">Your Cart ({myCart.length})</StyledLink>
        </Menu>
    </NavArea>
    )
}

export default Navbar;

const NavArea = styled.div`
top: 0;
left: 0;
width: 100%;
position: fixed;
background-color: #fff;
z-index: 10;
height: 105px;
padding: 5px;
`;

const Logo = styled.img`
width: 100px;
height: 100px;
`;

const Menu = styled.div`
display: flex;
justify-content: center;
`;

const StyledLink = styled(NavLink).attrs({ activeClassName })`
color: #000;
margin-top: 11px;
padding: 25px 20px 0 20px;
text-decoration: none;
font-weight: bold;

&:hover
{
    color: #6565EE;
}

&:visited
{
    text-decoration: none;
}

&.${activeClassName} 
{
    color: #6565EE;
}
`;