import React from 'react';
import { Nav, NavLink, NavMenu, LogoLink, Headername, MyLine, MyLineLeft, MyLineRight } from './NavbarElements';
import logo from './myLogo.png';
import ParticleBackground from './ParticleFiles/particleBackground';
 
const Navbar = () => {
   return (
        <Nav>
            {/*<LogoLink to="/"> <img className = "myLogo" src={logo} alt = "Logo" height = "100%"/> </LogoLink>*/}
            < ParticleBackground />
            < MyLine />
            <MyLineLeft />
            <MyLineRight />
            <Headername to = "/"> Climate Pulse </Headername>
            <NavMenu>
                <NavLink to = "/floodalert" activeStyle> Flood Alert </NavLink>
                <NavLink to = "/heatrisk" activeStyle> Heat Risks </NavLink>
                <NavLink to = "/pollutionlevel" activeStyle> Pollution Levels </NavLink>
            </NavMenu>
        </Nav>
   )
}
 
export default Navbar