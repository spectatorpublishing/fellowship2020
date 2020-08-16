import React from 'react';
import styled from 'styled-components';
import CDS from '../assets/whitemasthead.png';

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 25px;
  margin-top: 10px;
  `;

const Center = styled.div`
  text-align: center;  
  background-color: ${props => props.theme.indigo};
  padding: 5%;
  color: ${props => props.theme.white};

`;

const footer = (props) =>{
  return (
    <div className="Footer">
<Center>
<p>PRODUCED BY</p>
<a href="https://www.columbiaspectator.com/">
<Logo src={CDS} />
</a>
</Center>
    </div>
  );
}

export default footer;

