import React from 'react';
import styled, { keyframes } from 'styled-components';

import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import ButtonToHome from "./ButtonToHome.js";

let YIRButton = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(5vh + 48px);
  left: 5vw;
`

let TempTitle = styled.h1`
  color: ${props => props.theme.black};
  z-index: 2;
  position: relative;
  font-size: 12em;
  @media (max-width: 991px){
        font-size: 6rem;
  }
`

let TempHeader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleBlurb = styled.p`
  font-size: 1.5rem;
  font-weight: 25;
  color: ${props => props.theme.black};
  margin-top: 3rem;
  text-align: center;
  z-index: 2;
  position: relative;
  margin-left: 15rem;
  margin-right: 15rem;

  
`;

let MobileTitle = styled.h1`
color: ${props => props.theme.black};
z-index: 2;
position: relative;
font-size: 4rem;
padding: 15px;
margin-top: 0.7em;`


let MobileHeader = styled.div`
height: 75vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
}
`

const floatToTop = (radius) => keyframes`
    from {top: calc(${radius}vw + 100vh);}
    to {top: -${radius}vw;}
`

const SpectrumBubbleWrapper = styled.div`
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: calc(100vh - 48px);
    background-color: white;
    overflow: hidden;
`

const SpectrumTitleWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const StyledSpectrumBubble = styled.div`
    position: absolute;
    height: ${props=>2*props.radius}vw;
    width: ${props=>2*props.radius}vw;
    border-radius: ${props=>props.radius}vw;
    background-color: ${props=>props.color};
    margin-top: -${props=>props.radius}vw;
    margin-left:-${props=>props.radius}vw;
    left: ${props=>props.left}vw;
    animation-name: ${props=>floatToTop(props.radius)};
    animation-duration: ${props=>props.radius}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`

const spectrum_colors = [
    {color: "#E14C3B",
    radius: 20,
    left: 2,},
    {color: "#5E5E81",
    radius: 15,
    left: 53,},
    {color: "#F6A419",
    radius: 20,
    left: 85,},
    {color: "#EBA9BC",
    radius: 13,
    left: 80,}, 
    {color: "#F8C806",
    radius: 12,
    left: 28,},
    {color: "#3ED6AD",
    radius: 7.5,
    left: 60,},
    {color: "#43D36D",
    radius: 8.5,
    left: 15,},
]

class SpectrumBubble extends React.Component {
    render() {
        return <StyledSpectrumBubble radius={this.props.radius} color={this.props.color} left={this.props.left} duration={this.props.duration}/>
    }
}

export default class SpectrumTitle extends React.Component {
    render(){
        let bubbles = []
        spectrum_colors.map((el, i) => {
            bubbles.push(<SpectrumBubble key={i} color={el.color} radius={el.radius} left={el.left} duration={el.duration}/>)
            return null
        })
        return(
            <React.Fragment>
            <Desktop>
                <YIRButton>
                    <ButtonToHome />
                </YIRButton>
                <SpectrumTitleWrapper>
                    <SpectrumBubbleWrapper>
                        {bubbles}
                    </SpectrumBubbleWrapper>
                    <TempHeader>
                        <TempTitle>{this.props.title}</TempTitle>
                        <TitleBlurb>
                            {this.props.description}
                        </TitleBlurb>
                    </TempHeader>
                </SpectrumTitleWrapper>
            </Desktop>
            <MobileAndTablet>
                <SpectrumTitleWrapper>
                    <SpectrumBubbleWrapper>
                        {bubbles}
                    </SpectrumBubbleWrapper>
                    <MobileHeader>
                        <MobileTitle>
                        {this.props.title}
                        </MobileTitle>
                    </MobileHeader>
                </SpectrumTitleWrapper>
            </MobileAndTablet>
            </React.Fragment>
        )
    }
}