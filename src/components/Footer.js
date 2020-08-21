import React from 'react';
import styled from 'styled-components';
import CDS from '../assets/whitemasthead.png';

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 25px;
  margin-top: 10px;
  filter: invert(25%) sepia(40%) saturate(1100%) hue-rotate(167deg) brightness(85%) contrast(97%);
  `;

const Center = styled.div`
  text-align: center;
  background-color: ${props => props.theme.white};
  padding: 5%;
  color: ${props => props.theme.blue}};

`;

const footer = (props) =>{
  return (
    <div className="Footer">
<Center>
<h4>Produced By</h4>
<a href="https://www.columbiaspectator.com/">
<Logo src={CDS} />
</a>
</Center>
    </div>
  );
}

export default footer;
