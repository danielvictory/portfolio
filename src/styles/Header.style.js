import styled from "styled-components"
// import { Link } from "react-router-dom"

export const HeaderContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.$navClick ? "250px" : "50px" )};
    background-color: #02C39A;
    display: flex;
    flex-direction: column;

    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    background-color: #00A896;

    /* @media (max-width: 700px) {
        justify-content: flex-end;
        padding: 0 10px 0 0;
    } */
`

export const InnerContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`

// export const NavLink = styled(Link)`
//     color: white;
//     text-decoration: none;
//     font-family: "Source Code Pro", monospace;

//     margin: 10px;

//     @media (max-width: 700px ) {
//         display: none;
//     }
// `

export const ExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* @media (min-width: 700px ) {
        display: none;
    } */
`

export const NameAndIcons = styled.div`
    /* width: 50%; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #F0F3BD;
    font-family: "Source Code Pro", monospace;
`

export const Icons = styled.div`
    padding: 0 0 0 10px;
`

export const NavLinkOpen = styled.a`
    margin: 10px;
    
    text-decoration: none;
    
    color: #F0F3BD;
    font-family: "Source Code Pro", monospace;
    
    cursor: pointer;
`

export const OpenLinksButton = styled.button`
    width: 30;
    height: 50px;
    background: none;
    border: none;
    /* color: white; */
    font-size: 25px;
    cursor: pointer;

    /* @media (min-width: 700px ) {
        display: none;
    } */
`

