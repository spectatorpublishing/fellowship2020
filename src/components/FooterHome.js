import React from 'react';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from 'react-responsive-simple';

const Background = styled.div`
  width: 100%;
  background-color: ${props => props.theme.indigo};
  color: ${props => props.theme.white};
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
 color: ${props => props.theme.transparentWhite};
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
            <RoleHeading>Designed By</RoleHeading>
            <Line>Shannon Hui, <Role>Product Manager</Role></Line> 
            <Line>David Wang, <Role>Product Designer</Role></Line> 
            <Line>Kevin Li, <Role>Former Head of Product</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Developed By</RoleHeading>
            <Line>Yulong Li, <Role>Engineering Manager</Role></Line> 
            <Line>Amina Assal, <Role>Developer</Role></Line> 
            <Line>Julie Song, <Role>Developer</Role></Line> 
            <Line>Stacy Tao, <Role>Developer</Role></Line> 
          </Column>
          <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang, <Role>Developer</Role></Line> 
            <Line>Yunsu Kim, <Role>Developer</Role></Line> 
            <Line>Daniel Kim, <Role>Developer</Role></Line> 
            <Line>Arsalaan Ansari, <Role>Former Head of Engineering</Role></Line> 
          </Column>
          <Column>
              <RoleHeading>2019-20 Edition By</RoleHeading>
              <Line>Carl Dobrović, <Role>Head of Engineering</Role></Line> 
              <Line>David Wang, <Role>Head of Product</Role></Line> 
              <Line>Raeedah Wahid, <Role>Graphics Editor</Role></Line> 
          </Column>        

        </Names>
        </Desktop>

        <Tablet>
          <Names>
          <Column>
            <RoleHeading>Designed By</RoleHeading>
            <Line>Shannon Hui, <Role>Product Manager</Role></Line> 
            <Line>David Wang, <Role>Product Designer</Role></Line> 
            <Line>Kevin Li, <Role>Former Head of Product</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Developed By</RoleHeading>
            <Line>Yulong Li, <Role>Engineering Manager</Role></Line> 
            <Line>Amina Assal, <Role>Developer</Role></Line> 
            <Line>Julie Song, <Role>Developer</Role></Line> 
            <Line>Stacy Tao, <Role>Developer</Role></Line> 
          </Column>
          <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang, <Role>Developer</Role></Line> 
            <Line>Yunsu Kim, <Role>Developer</Role></Line> 
            <Line>Daniel Kim, <Role>Developer</Role></Line> 
            <Line>Arsalaan Ansari, <Role>Former Head of Engineering</Role></Line> 
          </Column>
          <Column>
              <RoleHeading>2019-20 Edition By</RoleHeading>
              <Line>Carl Dobrović, <Role>Head of Engineering</Role></Line> 
              <Line>David Wang, <Role>Head of Product</Role></Line> 
              <Line>Raeedah Wahid, <Role>Graphics Editor</Role></Line> 
          </Column>        
        </Names>
        </Tablet>


        <Mobile>
          <Names>
            
          <RoleHeading>Designed By</RoleHeading>
          <Row>
            <Column>
            <Line>Shannon Hui,</Line> 
            <Role>Product Manager</Role>
            </Column>
            <Column>
            <Line>David Wang,</Line> 
            <Role>Product Designer</Role>
            </Column>
          </Row>
          <Row continuation={true} >
            <Column>
            <Line>Kevin Li,</Line> 
            <Role>Former Head of Product</Role>
            </Column>
            <Column>
            </Column>
          </Row>
          
          <RoleHeading>Developed By</RoleHeading>
          <Row>
            <Column>
            <Line>Yulong Li,</Line> 
            <Role>Engineering Manager</Role>
            </Column>
            <Column>
            <Line>Amina Assal,</Line> 
            <Role>Developer</Role>
            </Column>
          </Row>
          <Row continuation={true} >
            <Column>
            <Line>Julie Song,</Line> 
            <Role>Developer</Role>
            </Column>
            <Column>
            <Line>Stacy Tao,</Line> 
            <Role>Developer</Role>
            </Column>
          </Row>
          <Row continuation={true} >
            <Column>
            <Line>Wendy Wang,</Line> 
            <Role>Developer</Role>
            </Column>
            <Column>
            <Line>Yunsu Kim,</Line> 
            <Role>Developer</Role>
            </Column>
          </Row>
          <Row continuation={true} >
            <Column>
            <Line>Daniel Kim,</Line> 
            <Role>Developer</Role>
            </Column>
            <Column>
            <Line>Arsalaan Ansari,</Line> 
            <Role>Former Head of Engineering</Role>
            </Column>
          </Row>

          <RoleHeading>2019-20 Edition By</RoleHeading>
            <Row continuation={true} >
              <Column>
              <Line>Carl Dobrović,</Line> 
              <Role>Head of Engineering</Role>
              </Column>
              <Column>
              <Line>David Wang,</Line> 
              <Role>Head of Product</Role>
              <Line>Raeedah Wahid,</Line> 
              <Role>Graphics Editor</Role>
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
