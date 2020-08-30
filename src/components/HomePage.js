import React, { Component } from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from "react-responsive-simple";
import "react-responsive-carousel/lib/styles/carousel.css";

let MobileContainer = styled.div`
  width: 100vw;
  // height: 50vh;
`;
let HomePageContainer = styled(MobileContainer)`
  max-height: 65vw;
  display: flex;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
`;
let LeftDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-center;
  height: 100vh;
  line-height: 10vw;
  z-index: -1;
`;
let TitleDiv = styled.div`
  text-align: center;
`;
let Title = styled.h1`
  font-size: 10vw;
  word-spacing: 100vw;
  // line-height: normal;
  color: ${(props) => props.theme.white};
  text-shadow: ${(props) => props.theme.shadow};
`;
let MobileTitle = styled(Title)`
  margin-top: 1rem;
  // line-height: normal;
`;
let YearDiv = styled.div`
  text-align: center;
`;
let Year = styled.h3`
  font-size: 7vw;
  line-height: 3vw;
  color: ${(props) => props.theme.white};
  text-shadow: ${(props) => props.theme.shadow};
`;

let Image = styled.img`
  z-index: -2;
  // height: 100%;
  width: 100%;
  // overflow: hidden;
  // object-fit: cover;
`;

let TopBox = styled.div`
  height: 3rem;
`;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <MobileAndTablet>
          <MobileContainer>
          <TopBox></TopBox>
            <HomePageContainer>
              <Image src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/33MOGIY4ORAHPDIG2UHJSO3QY4.png"/>
              <LeftDiv>
                <YearDiv>
                  <Year>2020</Year>
                </YearDiv>
                <TitleDiv>
                  <MobileTitle>Spectator Summer Fellowship</MobileTitle>
                </TitleDiv>
              </LeftDiv>
            </HomePageContainer>
          </MobileContainer>
        </MobileAndTablet>

        <Desktop>
          <HomePageContainer>
            <Image src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/33MOGIY4ORAHPDIG2UHJSO3QY4.png"/>
            <LeftDiv>
              <YearDiv>
                <Year>2020</Year>
              </YearDiv>
              <TitleDiv>
                <Title>Spectator Summer Fellowship</Title>
              </TitleDiv>
            </LeftDiv>
          </HomePageContainer>
        </Desktop>
      </React.Fragment>
    );
  }
}
