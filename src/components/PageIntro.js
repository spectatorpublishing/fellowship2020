import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

let TempTitle = styled.h1`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
  position: relative;
  font-size: ${props => props.isIllo ? "7rem" : "auto"};
  @media (max-width: 991px){
        font-size: 6rem;
  }

`

let TempHeader = styled.div`
  height: calc(100vh - 48px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.img_src});
  background-position: center;
  background-size: cover;
  background-color: ${props => props.theme.taupe};
  justify-content: center;
  align-items: center;
`

const TitleBlurb = styled.p`
  font-size: 1.5rem;
  font-weight: 25;
  color: white;
  margin-top: 3rem;
  text-align: center;
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
  position: relative;
  margin-left: 15rem;
  margin-right: 15rem;


`;

let MobileTitle = styled.h1`
color: ${props => props.theme.white};
text-shadow: ${props => props.theme.shadow};
z-index: 2;
position: relative;
font-size: ${props => props.isIllo ? "2.5rem" : "3.5rem"};
padding: 15px;
margin-top: 0.7em;`


let MobileHeader = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

background-image: url(${props => props.img_src});
background-position: top;
background-size: cover;
-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);

&::after {
  content: "";
  background: ${props => props.theme.black};
  opacity: 0.32;
  height: 100vh;
  width: 100vw;
  position: absolute;
}
`

let EyeLogo = styled.img`
  height: 8rem;
  width: auto;
`

let MobileEyeLogo = styled.img`
  height: 3rem;
  width: auto;
`

let MobileSpan = styled.span`
  letter-spacing: 0;
`

class PageIntro extends Component {
  render() {
    let isEye = this.props.title.toUpperCase() === "THE EYE";

    return ([
      <Desktop>
        <TempHeader {...this.props}>
          <TempTitle isIllo={this.props.isIllo}>
            <span>
              {isEye && <EyeLogo
                src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J4UANNLBCVB67HGQOFHU5R6FRU.png"
                alt="The Eye logo"
              />}
              {this.props.title}
            </span>
          </TempTitle>
          <TitleBlurb>
              {this.props.description}
          </TitleBlurb>
        </TempHeader>
      </Desktop>,
      <MobileAndTablet>
          <MobileHeader {...this.props}>
            <MobileTitle isIllo={this.props.isIllo}>
              <MobileSpan>
                {isEye && <MobileEyeLogo
                  src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J4UANNLBCVB67HGQOFHU5R6FRU.png"
                  alt="The Eye logo"
                />}
                {this.props.title}
              </MobileSpan>
            </MobileTitle>
          </MobileHeader>
      </MobileAndTablet>
      ]
    );
  }
}

export default PageIntro;
