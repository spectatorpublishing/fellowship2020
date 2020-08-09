import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import Crown from '../../assets/Crown.js';

let NavContainer = styled.div `
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  height: 48px;
  width: 100vw;

  ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 2;
  `}
`

let TransparentContainer = styled(NavContainer)`
  background-color: transparent;
  position: absolute;
  z-index: 19;
`

let LogoContainer = styled.div`
  width: 20%;
`

let MenuContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 70%;
`

let MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`

let MenuBtn = styled.input`
  display: none;
`

let MenuColumn = styled.div`
  align-items: center;
  background-color: ${props => props.transparent ? (props.theme.indigo) : props.theme.black};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 0;
  overflow: hidden;
  position: absolute;
  transform: ${props => !props.transparent && `translateY(calc(48px - 1px))`};
  right: 0;
  transition: width 0.2s ease-out;
  z-index: 20;

  ${MenuBtn}:checked ~ & {
    width: 60vw;
    height: ${props => props.transparent ? `calc(100vh + 1px - 3rem)` : `calc(100vh - 47px - 3rem)`};
    padding: 0 2rem 3rem 2rem;
    display: flex;
    justify-content: space-evenly;
  }
`

let MenuLink = styled(NavLink)`
  color: #B9D9EB;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  ${({ mobile }) => mobile && `
    border: none;
    opacity: 0;
    transition: opacity 0s;
  `}

  ${MenuBtn}:checked ~ ${MenuColumn} & {
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }

  :hover {
    color: #1b2945;
  }

  :focus {
    color: ${props => props.theme.blue};
  }

  &.navLinkActive {
    color: ${props => props.theme.blue};
  }
`

let MenuScrollLink = styled(NavHashLink)`
  cursor: pointer;
  color: ${props => props.theme.white};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  ${({ mobile }) => mobile && `
    border: none;
    opacity: 0;
    transition: opacity 0s;
  `}

  ${MenuBtn}:checked ~ ${MenuColumn} & {
    opacity: 1;
    transition: width 0.2s ease-out;
  }

  :hover {
    color: ${props => props.theme.blue};
  }

  &.navLinkActive {
    color: ${props => props.theme.blue};
  }
`

let NavBuffer = styled.div`
  height: 48px;
  width: 100%;
`

let MenuIcon = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 10%;
  margin-left: auto;
  user-select: none;
  z-index: 21;
`

let NavIcon = styled.span`
  background: ${props => props.theme.white};
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 24px;

  :before,
  :after {
    background: ${props => props.theme.white};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  :before {
    top: 8px;
  }

  :after {
    top: -7px;
  }

  ${MenuBtn}:checked ~ ${MenuIcon} & {
    background: transparent;

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  ${MenuBtn}:checked ~ ${MenuIcon}:not(.steps) & {
    :before,
    :after {
      top: 0;
    }
  }
`

let DesktopItem = styled.h5`
  color: inherit;
`

let MobileItem = styled.h4`
  color: inherit;
  text-shadow: ${props => props.theme.shadow};
`

let CrownWrapper = styled.a`
  width: 20%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${props => !props.scrolling &&
    `top: 0;
    left: 0;`
  }
  z-index: 22;
`

let MobileText = styled.h5`
  margin-top: 10px;
  color: ${props => props.theme.white};
`

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedForMobile: false,
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.forceClose = this.forceClose.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
    this.getActiveSection = this.getActiveSection.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleCheckboxChange(e) {
    console.log("handleCheckboxChange()");
    this.setState({ checkedForMobile: e.target.checked });
    console.log(this.state.checkedForMobile);
  }

  forceClose() {
    this.setState({ checkedForMobile: false });
  }

  negateClick(e) {
    e.preventDefault();
  }

  getActiveSection(section) {
    return this.props.location.hash.slice(1) === section;
  }
  
  updateTitle(match, name) {
    if (match) {
      document.title = name + " | 2019-20 Year In Review";
    }
  }

  getMenuItems(isMobile, isScrolling) {
    return this.props.menuItems.map((item, i) => {
      // Scrolling navbar uses React Refs to change scroll position
      if (isScrolling) {
        return <MenuScrollLink
          key={i}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          to={"#" + item.link.slice(1)}
          activeClassName={"navLinkActive"}
          isActive={() => this.getActiveSection(item.link.slice(1))}
          onClick={this.forceClose}
        >
          {isMobile ? <MobileItem>{item.name}</MobileItem> : <DesktopItem>{item.name}</DesktopItem>}
        </MenuScrollLink>
      }
      // Normal navbar uses React Router to change browser locations
      return <MenuLink
        key={i}
        styled={{isMobile}}
        mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
        to={item.link}
        activeClassName={"navLinkActive"}
        isActive={(match, location) => this.updateTitle(match, item.name)}
        onClick={this.forceClose}
      >
        {isMobile ? <MobileItem>{item.name}</MobileItem> : <DesktopItem>{item.name}</DesktopItem>}
      </MenuLink>
    });
  }

  render() {
    const isMobile = this.state.width < 992;
    const desktopMenu = (
      <React.Fragment>
        <MenuContainer>
          <MenuRow>
            {this.getMenuItems(isMobile, this.props.isScrolling)}
          </MenuRow>
        </MenuContainer>
      </React.Fragment>
    );

    const mobileMenu = (
      <React.Fragment>
        {this.props.fixed && <MobileText>{this.props.location.hash.slice(1).replace(/-+/g, " ").toUpperCase()}</MobileText>}
        <MenuBtn 
          type="checkbox" 
          id={this.props.isScrolling ? "scrolling-menu-btn" : "menu-btn"}
          data-checked={this.state.checkedForMobile}
          checked={this.state.checkedForMobile}
          onChange={this.handleCheckboxChange}
          transparent={this.props.transparent}
        />
        <MenuIcon htmlFor={this.props.isScrolling ? "scrolling-menu-btn" : "menu-btn"}>
          <NavIcon></NavIcon>
        </MenuIcon>
        <MenuColumn transparent={this.props.transparent}>
          {this.getMenuItems(isMobile, this.props.isScrolling)}
        </MenuColumn>
      </React.Fragment>
    );

    const navbar = (
      <React.Fragment>
        {!this.props.hideCrown && (
        <LogoContainer>
          <CrownWrapper 
            href="/" 
            target="_blank"
            scrolling={""+(this.props.isScrolling || !this.props.hideCrown)}
          >
            <Crown />
          </CrownWrapper>
        </LogoContainer>

        )}
        {isMobile ? mobileMenu : (!this.props.transparent && desktopMenu) }
      </React.Fragment>
    );

    return (
      <div>
        {this.props.transparent ?
        <TransparentContainer fixed={this.props.fixed}>
          {navbar}
        </TransparentContainer>
        :
        <NavContainer fixed={this.props.fixed}>
          {navbar}
        </NavContainer>
        }
        {this.props.fixed && <NavBuffer></NavBuffer>}
      </div>
    );
  }
}

export default withRouter(NavBar);