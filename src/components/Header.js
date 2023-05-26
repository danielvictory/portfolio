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
                    <NavLinkOpen href="/">Top</NavLinkOpen>
                    <NavLinkOpen href="/#skills">Skills</NavLinkOpen>
                    <NavLinkOpen href="/#projects">Projects</NavLinkOpen>
                    <NavLinkOpen href="/#resume">Resume</NavLinkOpen>
                </ExtendedContainer>
            )}
        </HeaderContainer>
    )
    }

export default Header