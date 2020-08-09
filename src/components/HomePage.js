import React, { Component } from "react";
import styled from "styled-components";
import whitemasthead from "../assets/whitemasthead.png";
import { MobileAndTablet, Desktop } from "react-responsive-simple";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import HomepagePhotos from "../util/HomepagePhotos";
import { NavHashLink } from "react-router-hash-link";

let MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
let HomePageContainer = styled(MobileContainer)`
  max-height: 65vw;
  display: flex;
  background-size: cover;
`;
let LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-center;
  @media (max-width: 991px) {
    margin-top: 40vh;
    margin-left: -20vw;
  }
`;
let TitleDiv = styled.div`
  text-align: center;
`;
let Title = styled.h1`
  word-spacing: 100vw;
  line-height: 7rem;
  color: ${(props) => props.theme.white};
  text-shadow: ${(props) => props.theme.shadow};
`;
let MobileTitle = styled(Title)`
  margin-top: 1rem;
  line-height: 4rem;
`;
let YearDiv = styled.div`
  text-align: center;
`;
let Year = styled.h3`
  color: ${(props) => props.theme.white};
  text-shadow: ${(props) => props.theme.shadow};
`;

const Wrapper = styled.div`
  @media (max-width: 991px) {
    width: 100vw;
    overflow: hidden;
  }
`;

let CarouselWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  @media (max-width: 991px) {
    height: 100vh;
    width: auto;
    overflow: hidden;
    & * {
      height: 100%;
      object-fit: cover;
    }
  }
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
            <HomePageContainer>
              <Wrapper>
                <CarouselWrapper>
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={4000}
                    showIndicators={false}
                    width={"100%"}
                  >
                    {HomepagePhotos.map((el, i) => (
                      <div key={i}>
                        <img src={el} alt="carousel-i" />
                      </div>
                    ))}
                  </Carousel>
                </CarouselWrapper>
              </Wrapper>
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
          <CarouselWrapper>
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={4000}
              showIndicators={false}
              width={"100%"}
            >
              {HomepagePhotos.map((el, i) => (
                <div key={i}>
                  <img src={el} alt="carousel-i" />
                </div>
              ))}
            </Carousel>
          </CarouselWrapper>
          <HomePageContainer>
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
