import React, {useState} from 'react'

// Styled
import { HeaderContainer, 
    NavContainer, 
    InnerContainer, 
    ExtendedContainer,
    NavLink,
    NavLinkOpen,
    OpenLinksButton } from "../styles/Header.style"

const Header = () => {

    const [navClick, setNavClick] = useState(false);

    return (
        <HeaderContainer $navClick={navClick}>
            <InnerContainer>
                <NavContainer>
                    <NavLink to="/">Top</NavLink>
                    <NavLink to="/#skills">Skills</NavLink>
                    <NavLink to="/#projects">Projects</NavLink>
                    <NavLink to="/#resume">Resume</NavLink>
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
                    <NavLinkOpen to="/">Top</NavLinkOpen>
                    <NavLinkOpen to="/#skills">Skills</NavLinkOpen>
                    <NavLinkOpen to="/#projects">Projects</NavLinkOpen>
                    <NavLinkOpen to="/#resume">Resume</NavLinkOpen>
                </ExtendedContainer>
            )}
        </HeaderContainer>
    )
    }

export default Header