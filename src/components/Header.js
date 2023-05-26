import React, {useState} from 'react'

// Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"

// Styled
import { HeaderContainer, 
    NavContainer, 
    InnerContainer, 
    ExtendedContainer,
    NameAndIcons,
    Icons,
    // NavLink,
    NavLinkOpen,
    OpenLinksButton, } from "../styles/Header.style"

const Header = () => {

    const [navClick, setNavClick] = useState(false);

    return (
        <HeaderContainer $navClick={navClick}>
            <InnerContainer>
                <NavContainer>
                    <NameAndIcons className="nameandicons">
                        Daniel Victory
                        <Icons id="icons">
                            <EmailIcon />
                            <LinkedInIcon />
                            <GitHubIcon />
                        </Icons>
                    </NameAndIcons>
                    {/* <NavLink to="/">Top</NavLink>
                    <NavLink to="/#skills">Skills</NavLink>
                    <NavLink to="/#projects">Projects</NavLink>
                    <NavLink to="/#resume">Resume</NavLink> */}
                    <OpenLinksButton 
                        onClick={()=>{
                            setNavClick( (reveal) => !reveal )
                        }}
                    >
                        {navClick ? <>&#127789;</> : <>&#127828;</>}
                    </OpenLinksButton>
                </NavContainer>
            </InnerContainer>
            { navClick && (
                <ExtendedContainer>
                    <NavLinkOpen href="/#top" 
                        onClick={()=>{
                            setNavClick( (reveal) => !reveal )
                        }}
                        >Top</NavLinkOpen>
                    <NavLinkOpen href="/#skills" 
                        onClick={()=>{
                            setNavClick( (reveal) => !reveal )
                        }}
                        >Skills</NavLinkOpen>
                    <NavLinkOpen href="/#projects" 
                        onClick={()=>{
                            setNavClick( (reveal) => !reveal )
                        }}
                        >Projects</NavLinkOpen>
                    <NavLinkOpen href="/#resume" 
                        onClick={()=>{
                            setNavClick( (reveal) => !reveal )
                        }}
                        >Resume</NavLinkOpen>
                    <NavLinkOpen href="/#timeline" 
                        onClick={()=>{
                            setNavClick( (reveal) => !reveal )
                        }}
                        >Timeline</NavLinkOpen>
                </ExtendedContainer>
            )}
        </HeaderContainer>
    )
    }

export default Header