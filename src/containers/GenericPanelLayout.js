import React, { Component } from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import ImageBoxSlider from './ImageBoxSlider';

const mobileSize = 992

const Container = styled.div`
  width: 100vw;
  position: relative;
`

const TopContainer = styled.div`
  width: 100vw;
  height: 100%;
  float: top;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ img_src }) => img_src});
  background-position: center;
  background-size: cover;

  @media (max-width: 991px){
    height: 50vh;
  }
`

const Head = styled.h3`
	padding: ${({ index }) => index % 2 ? '12vh 2vw 4vh 35vw' : '12vh 2vw 4vh 8vw'};
  text-align: ${({ index }) => index % 2 ? 'right' : 'left'};
  text-shadow: ${props => props.theme.shadow};
  color: white;
  width: 60vw;
  line-height: 100%;
`
const MobileTitle = styled.h3`
  padding: 4vh 0vw 2vh 0vw;
  text-shadow: ${props => props.theme.shadow};
  color: white;
  width: 80vw;
  text-align:center;
  font-size: 2rem;
  line-height: 100%;
  margin-left:auto;
  margin-right:auto;
`

const MobileAuthor = styled.p`
  font-size: 1.5rem;
  text-shadow: ${props => props.theme.shadow};
  padding: 2vh 0vw 4vh 0vw;
  color: white;
  width: 60vw;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-shadow: ${props => props.theme.shadow};
  padding: 0vh 0vw 12vh 8vw;
  color: white;
  width: 60vw;
`


const Author = styled.p`
  font-size: 1.2rem;
  text-shadow: ${props => props.theme.shadow};
  padding: ${({ index }) => index % 2 ? '4vh 2vw 8vh 35vw' : '4vh 2vw 8vh  8vw'};
  text-align: ${({ index }) => index % 2 ? 'right' : 'left'};
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

  // do odd even rendering based on even odd ? :
  render() {
    return (
      <React.Fragment>
        <MobileAndTablet>
          {/* <TopContainer img_src={this.props.data.img} isMobile={this.state.isMobile} /> */}
          {this.props.data.articles.map((data, i) =>
            <TopContainer img_src={data.img}>
              <MobileTitle><a target="_blank" style={{ textDecoration: 'none',color:'white' }} href={data.link}>{data.title}</a></MobileTitle>
              <MobileAuthor>{data.author}</MobileAuthor>
            </TopContainer>
          )}
        </MobileAndTablet>

        <Desktop>
          <Container>
            {/* <TopContainer img_src={this.props.data.img}> */}
              {/* <Head index={0}>{this.props.data.name}</Head>
              <Subtitle>{this.props.data.blurb}</Subtitle>
            </TopContainer> */}
            {this.props.data.articles.map((data, i) =>
              <TopContainer img_src={data.img}>
                <Head index={i + 1}><a target="_blank" style={{ textDecoration: 'none',color:'white' }} href={data.link}>{data.title}</a></Head>
                <Author index={i + 1}>{data.author}</Author>
              </TopContainer>
            )}
          </Container>
        </Desktop>
      </React.Fragment>
    );
  }
}
