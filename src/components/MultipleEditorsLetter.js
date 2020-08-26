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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

let TempLetter = styled.h2`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: ${props => props.theme.blue};
  display: flex;
  align-text: justify;
  line-height: 90%;
  margin-bottom: 3rem;
  background-color: ${props => props.theme.white};
  align-items: left;
  margin-right: 10vw;
  font-size: 4.5em;
  /* font-size: 8em; -- specified by global styles */
  position: relative;
`

let MobileLetter = styled.h3`
    display: flex;
    padding: 15px;
    margin-top: 0.8rem;
    text-align: center;
    font-size: 1.5em
    color: ${props => props.theme.blue};
    background-color: ${props => props.theme.white};


`

const TitleBlurb = styled.p`
  font-weight: 600;
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
  padding: 15px;

`
const Role = styled.div`
 color: ${props => props.theme.transparentBlue};
 padding-left: 0.5rem;
 font-family: 'Suez One', sans-serif;
 font-style: normal;

 @media only screen and (max-width: 991px){
   padding-bottom: 20px;
  //  margin-top: -25px; 
   padding-left: 0.3rem;

}



`;
const Line = styled.h5`
   color: ${props => props.theme.blue};
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;

   @media only screen and (max-width: 991px){
    padding: 15px 15px;
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
    @media only screen and (max-width: 991px){
      padding: 15px 10vw 5px 10vw;
      margin: 0;
   }
`
const SectionDivider = styled.hr`
  height: 1px;
  color: ${props => props.theme.blue};
  background-color: ${props => props.theme.blue};
  border: none;
`


class MultipleEditorsLetter extends Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <LetterContain>
            <TempLetter> LETTER FROM THE EDITORS </TempLetter>
            <TitleBlurb>{this.props.letter}</TitleBlurb>
            <Border><SectionDivider/></Border>
            <Line>{this.props.author}, <Role>{this.props.role}</Role></Line>
            {this.props.author2 ? <Line>{this.props.author2}, <Role>{this.props.role2}</Role></Line> : <></> }
          </LetterContain>
        </Desktop>

        <MobileAndTablet><MobileContain>
        </MobileContain>
          <MobileLetter>LETTER FROM THE EDITORS</MobileLetter>
          <MobileBlurb>{this.props.letter}</MobileBlurb>
          <Line>{this.props.author}, <Role>{this.props.role}</Role></Line>
          {this.props.author2 ? <Line>{this.props.author2}, <Role>{this.props.role2}</Role></Line> : <></> }

        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default MultipleEditorsLetter;
