import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const letter = 
"When University President Lee Bollinger sent us his first email about COVID-19 on campus, I was in the Spectator office. My colleagues and I read the following words aloud, almost in unison:\
\n\n\"I am writing this evening to notify everyone that, because a member of our community has been quarantined as a result of exposure to the Coronavirus (COVID-19), we have decided to suspend classes on Monday and Tuesday.\"\
\n\nMy mind was flooded with countless thoughts, including that I was probably taking my last looks at the Spectator office for a long time. I imagined that my work within the walls of the office would transition to more solitary work within the walls of my bedroom. What I could not have imagined was that a few weeks later, I would be submitting the proposal to create the Spectator Summer Fellowship Program.\
\n\nWhen the program’s application page went live, we received fantastic responses from over 70 incoming Columbia students. Again, I did not imagine that directing a program of workshops for incoming students would be such a wonderful learning experience for me.\
\n\nThis group continually surprised me with their grit, passion, and dedication. For two weeks, they attended back-to-back workshops on subjects ranging from the art of pitching articles and writing profiles to research techniques and competitive analysis. The fellows have continued to develop and build upon these skills and find examples of how these concepts are applied in the real world.\
\n\nOver the course of the following two weeks, we applied what we had learned in our workshops to program-specific projects. Our fellows interviewed students, professors, and experts for a collection of articles that got the entire University buzzing. They biked across the streets of New York to document the success of the city’s Open Streets program. They wrote articles to make us question our beliefs about sustainability. They examined the long-standing “myths” of the University, the origins of which escape even the most seasoned undergraduate.\
\n\nWhile I have some trepidation thinking about their arrival in a city and University much altered from the city and University we knew, loved, and left before the COVID-19 pandemic, they do not share that trepidation. They do not wallow in fear or self-pity. Rather, our fellows have worked to build something bigger than themselves—a community that strives to facilitate and shape productive and positive campus discourse. I am so proud of them.\
\n\nAs Spectator’s head copy editor, I have had the privilege of reading and shaping these articles in their final stages. It is with great pleasure that I now present them to you. Enjoy our 2020 Spectator Summer Fellowship edition.\
"


let LetterContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: ${props => props.theme.taupe};
`

let MobileContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.taupe};

`

let TempLetter = styled.h2`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: ${props => props.theme.white};
  display: flex;
  align-text: justify;
  align-items: left;
  margin-bottom: 20px;
  font-size: 4.5em;
  position: relative;
  padding-left: 10vw; 
  padding-bottom: 20px; 
`
const TitleBlurb = styled.p`
  font-weight: 25;
  width: 80%; 
  // margin-left: 5vw;
  // margin-right: 5vw;
  color: white;
  // margin-top: 5vh;
  text-align: left;
  z-index: 2;
  position: relative;
  white-space: pre-line;
  padding-left: 10vw; 
  padding-right: 10vw; 
`;

let MobileLetter = styled.h3`
    display: flex;
    padding: 15px 10vw;
    margin-top: 0.8rem;
    text-align: center;
    color: ${props => props.theme.white};
`

const MobileBlurb = styled.p`
  color: white;
  white-space: pre-line;
  padding: 15px 10vw;

`

const Role = styled.div`
 color: ${props => props.theme.transparentWhite};
 padding-left: 0.5rem;

`;
const Line = styled.h5`
   color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  padding-left: 10vw; 
  margin: 0.5rem 0;
   @media only screen and (max-width: 991px){
    padding: 0px 10vw 15px 10vw;
    font-size: 1em;
    margin: 0;
 }
`;
const MobileRole = styled(Role)`
 padding-left: 0;
`;
const MobileLine = styled(Line)`
 flex-direction: column;
`
const Border = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    color: black;
    width: 69.211px;
    border-width: 2pt;
    float: left;
    padding-left: 10vw; 
    @media only screen and (max-width: 991px){
      padding: 15px 10vw 5px 10vw;
      margin: 0;
   }
`
const SectionDivider = styled.hr`
  height: 1px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.white};
  border: none;

`

class EditorLetter extends Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <LetterContain>
            <TempLetter>LETTER FROM THE DIRECTOR</TempLetter>
            <TitleBlurb>{letter}</TitleBlurb>
            <Border><SectionDivider/></Border>
            <Line>Sarah Braka,<Role>Director of Summer Fellowship Program, Head Copy Editor</Role></Line> 
          </LetterContain>
        </Desktop>
        <MobileAndTablet>
          <MobileContain>
            <MobileLetter>LETTER FROM THE DIRECTOR</MobileLetter>
            <MobileBlurb>{letter}</MobileBlurb>
            <Border><SectionDivider/></Border>
            <MobileLine>Sarah Braka, <MobileRole>Director of Summer Fellowship Program, Head Copy Editor</MobileRole></MobileLine> 
          </MobileContain>
        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default EditorLetter;