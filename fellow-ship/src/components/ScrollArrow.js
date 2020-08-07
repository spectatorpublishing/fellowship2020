import React from 'react';
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple'
import arrow from '../assets/white-down-arrow-icon.png'

let Arrow = styled.img`
  cursor: pointer;
  z-index: 25;
  position: fixed;
  width: 60px;
  right: 10vh;
  bottom: 10vh;
  transform: rotate(180deg);
`

let MobileArrow = styled(Arrow)`
  width: 48px;
  right: 5vw;
  bottom: 5vw;
`

export default class ScrollArrow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 48 && !this.state.visible) {
      this.setState({visible: true});
    }
    if (window.scrollY <= 48 && this.state.visible) {
      this.setState({visible: false});
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.state.visible && (
      <React.Fragment>  
        <MobileAndTablet>
          <MobileArrow src={arrow} onClick={this.scrollToTop}/>
        </MobileAndTablet>
        <Desktop>
          <Arrow src={arrow} onClick={this.scrollToTop}/>
        </Desktop>
      </React.Fragment>
    );
  }
}