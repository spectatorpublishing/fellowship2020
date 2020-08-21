import React from 'react';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from 'react-responsive-simple';

const Background = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blue};
  padding-top: 5vh;
`;

const Names = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media only screen and (max-width: 767px){
    margin: 0 5vw;
    flex-direction: column;
`
const Heading = styled.h3`
  text-align: center;
  margin: 1rem;
  @media only screen and (max-width: 767px){
    font-size: 1.8em;
 }
`
const Column = styled.div`
  margin-top: 1rem;
  margin-left: 1em;
  @media only screen and (max-width: 767px){
    margin-top: 0;
    width: 50%;
 }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const RoleHeading = styled.h4`
  margin: 1rem 0;
  @media only screen and (max-width: 767px){
    margin: 1rem 5vw 0 5vw;
    text-align: center;
 }
`
const Role = styled.div`
 color: ${props => props.theme.transparentBlue};
 margin-left: 0.5rem;
 @media only screen and (max-width: 767px){
    margin-left: 0;
 }
`;
const Line = styled.h5`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  @media only screen and (max-width: 767px){
    font-size: 1em;
 }
`;

const footerHome = (props) =>{
  return (
    <div className="FooterHome">
        <Background>

        <Heading>Design and Development Credits</Heading>

        <React.Fragment>

        <Desktop>
          <Names>
          <Column>
            <RoleHeading>Fellowship Edition By</RoleHeading>
            <Line>Sarah Braka, <Role>Program Director, Copy Queen</Role></Line> 
            <Line>Raeedah Wahid, <Role>Graphics Editor</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Development Assistance</RoleHeading>
            <Line>Hong Sen Du, <Role>Head of Newsroom Development</Role></Line> 
            <Line>Jennifer Wang, <Role>Engineering Fellow</Role></Line> 
            <Line>Michael Li, <Role>Developer</Role></Line> 
            <Line>Emme Pogue, <Role>Best Friend</Role></Line> 
          </Column>
          {/* <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang, <Role>Developer</Role></Line> 
            <Line>Yunsu Kim, <Role>Developer</Role></Line> 
            <Line>Daniel Kim, <Role>Developer</Role></Line> 
            <Line>Arsalaan Ansari, <Role>Former Head of Engineering</Role></Line> 
          </Column> */}
          {/* <Column>
              <RoleHeading>Template By</RoleHeading>
              <Line>Shannon Hui, <Role></Role></Line> 
              <Line>David Wang, <Role></Role></Line> 
              <Line>Kevin Li, <Role></Role></Line>
              <Line>Yulong Li, <Role></Role></Line> 
              <Line>Amina Assal, <Role></Role></Line> 
              <Line>Julie Song, and <Role></Role></Line> 
              <Line>Stacy Tao <Role></Role></Line> 
          </Column>         */}

        </Names>
        </Desktop>

        <Tablet>
          <Names>
          <Column>
            <RoleHeading>Fellowship Edition By</RoleHeading>
            <Line>Sarah Braka, <Role>Program Director</Role></Line> 
            <Line>Raeedah Wahid, <Role>Graphics Editor</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Development Assistance</RoleHeading>
            <Line>Hong Sen Du, <Role>Head of Newsroom Development</Role></Line> 
            <Line>Jennifer Wang, <Role>Engineering Fellow</Role></Line> 
            <Line>Michael Li, <Role>Developer</Role></Line> 
            <Line>Emme Pogue <Role></Role></Line> 
          </Column>       
        </Names>
        </Tablet>


        <Mobile>
          <Names>
            
          <RoleHeading>Designed By</RoleHeading>
          <Row>
            <Column>
            <Line>Sarah Braka,</Line> 
            <Role>Program Director</Role>
            </Column>
            <Column>
            <Line>Raeedah Wahid,</Line> 
            <Role>Graphics Editor</Role>
            </Column>
          </Row>
          
          <RoleHeading>Development Assistance</RoleHeading>
          <Row>
            <Column>
            <Line>Hong Sen Du,</Line> 
            <Role>Head of Newsroom Development</Role>
            </Column>
            <Column>
            <Line>Jennifer Wang,</Line> 
            <Role>Engineering Fellow</Role>
            </Column>
          </Row>
          <Row continuation={true} >
            <Column>
            <Line>Michael Li,</Line> 
            <Role>Developer</Role>
            </Column>
            <Column>
            <Line>Emme Pogue</Line> 
            <Role></Role>
            </Column>
          </Row>
        </Names>
        </Mobile>

      </React.Fragment>

        

        </Background>
         
    </div>
  );
}

export default footerHome;
