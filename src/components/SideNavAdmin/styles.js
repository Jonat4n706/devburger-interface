import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: black;

    img {
        width: 60%;
        margin: 40px 0;
        align-self: center;
    }
  `;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;   

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    background-color: ${props => props.$isActive ? 'purple' : 'black'};

    &:hover {
        background-color: purple;
        
    }

        
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
`;