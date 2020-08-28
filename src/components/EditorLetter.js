import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';


let LetterContain = styled.div`
  width: 100%;
  // margin-top: 5vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 3rem;
`

let MobileContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

let TempLetter = styled.h2`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: #3CABDB;
  display: flex;
  align-text: justify;
  line-height: 90%;
  margin-bottom: 3rem;
  background-color: ${props => props.theme.white};
  align-items: center;
  margin-right: 10vw;
  font-size: 4.5em;
  /* font-size: 8em; -- specified by global styles */
  position: relative;
`

let MobileLetter = styled.h2`
background-color: ${props => props.theme.white};
    height: 15%;
    width: 80%;
    max-width: 999px;
    color: #3CABDB;
    display: flex;
    align-text: justify;
    line-height: 90%;
    margin-bottom: 3rem;
    background-color: ${props => props.theme.white};
    align-items: center;
    margin-right: 10vw;
    font-size: 2.5em;
    /* font-size: 8em; -- specified by global styles */
    position: relative;
    @media only screen and (max-width: 991px){
     padding: 0px 10vw 15px 10vw;
     margin: 0;
  }
  `



const TitleBlurb = styled.p`
  font-weight: 600px;
  width: 80%;
  // margin-left: 5vw;
  // margin-right: 5vw;
  color: #3CABDB;
  // margin-top: 5vh;
  text-align: left;
  z-index: 2;
  position: relative;
  white-space: pre-line;
`;

const MobileBlurb = styled.p`
  color: #3CABDB;
  white-space: pre-line;
  padding: 15px 10vw;

`
const Role = styled.div`
 color: ${props => props.theme.transparentBlue};
 padding-left: 0.5rem;

`;
const Line = styled.h5`
  color: ${props => props.theme.blue};
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;

   @media only screen and (max-width: 991px){
    padding: 0px 10vw 15px 10vw;
    font-size: 1em;
    margin: 0;
 }
`;
const Border = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    color: black;
    width: 69.211px;
    border-width: 2pt;
    float: left;
    padding-left: 10 vw;
    @media only screen and (max-width: 991px){
      padding: 10px 10vw 10px 10vw;
      margin: 0;
   }
`

const SectionDivider = styled.hr`
  height: 1px;
  color: ${props => props.theme.blue};
  background-color: ${props => props.theme.blue};
  border: none;
`

const MobileRole = styled(Role)`
 padding-left: 0;
`;
const MobileLine = styled(Line)`
 flex-direction: column;
`


class EditorLetter extends Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <LetterContain>
            <TempLetter> LETTER FROM THE EDITOR </TempLetter>
            <TitleBlurb>{this.props.letter}</TitleBlurb>
            <Border><SectionDivider/></Border>
            <Line>{this.props.author}, <Role>{this.props.role}</Role></Line>
          </LetterContain>
        </Desktop>

        <MobileAndTablet>
          <MobileContain>
            <MobileLetter>LETTER FROM THE EDITOR</MobileLetter>
            <MobileBlurb>{this.props.letter}</MobileBlurb>
            <Border><SectionDivider/></Border>
            <MobileLine>{this.props.author}, <MobileRole>{this.props.role}</MobileRole></MobileLine>
          </MobileContain>
        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
