import React, { Component } from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import ImageBoxSlider from './ImageBoxSlider';

const mobileSize = 992

const Container = styled.div`
  width: 100vw;
  postion: relative;
`

const TopContainer = styled.div`
  width: 100vw;
  height: 100%;
  float: top;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({img_src}) => img_src});
  background-position: center;
  background-size: cover;

  @media (max-width: 991px){
    height: 40vh;
  }
`

const BottomContainer = styled.div`
	width: 100vw;
	float: bottom;
  background-color: ${props => props.theme.indigo};
  
`

const Head = styled.h3`
	padding: 12vh 2vw 4vh 8vw;
  text-shadow: ${props => props.theme.shadow};
  color: white;
  width: 60vw;
  line-height: 100%;
`
const MobileHead = styled.h3`
  padding: 4vh 0vw 2vh 8vw;
  text-shadow: ${props => props.theme.shadow};
  color: white;
  width: 80vw;
  text-size: 10px;
  font-size: 1.5rem;
  line-height: 100%;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-shadow: ${props => props.theme.shadow};
  padding: 0vh 0vw 12vh 8vw;
  color: white;
  width: 60vw;
` 

export default class GenericPanelLayout extends Component {
  state = { 
      isMobile: window.innerWidth <= mobileSize,
  }

  componentWillMount() {
      window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
      this.setState({ isMobile: window.innerWidth <= mobileSize });
  };

  render() {
    return (
      <React.Fragment>
      <MobileAndTablet>
        <TopContainer img_src = {this.props.data.img} isMobile = {this.state.isMobile} />

        <BottomContainer isMobile = {this.state.isMobile}>
          <MobileHead>{this.props.data.name}</MobileHead>
          <ImageBoxSlider data = {this.props.data.articles}/>
        </BottomContainer>
      </MobileAndTablet>
      
      <Desktop>
        <Container>
          <TopContainer img_src = {this.props.data.img}>
              <Head>{this.props.data.name}</Head>
              <Subtitle>{this.props.data.blurb}</Subtitle>
          </TopContainer>
          <BottomContainer>
              <ImageBoxSlider data = {this.props.data.articles}/>
          </BottomContainer>
        </Container>
      </Desktop>
      </React.Fragment>
    );
  }
}
