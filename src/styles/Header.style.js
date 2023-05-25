import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.$navClick ? "220px" : "50px" )};
    background-color: darkgreen;
    display: flex;
    flex-direction: column;
`

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;

    @media (max-width: 700px) {
        justify-content: flex-end;
        padding: 0 10px 0 0;
    }
`

export const InnerContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`

export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: "Source Code Pro", monospace;

    margin: 10px;

    @media (max-width: 700px ) {
        display: none;
    }
`

export const ExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px ) {
        display: none;
    }
`

export const NavLinkOpen = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: "Source Code Pro", monospace;

    margin: 10px;
`

export const OpenLinksButton = styled.button`
    width: 30;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 25px;
    cursor: pointer;

    @media (min-width: 700px ) {
        display: none;
    }
`