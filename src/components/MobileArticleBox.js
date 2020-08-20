import React from 'react'
import styled from 'styled-components'
import read_more from '../assets/hamburger.svg'

const Article = styled.div`
  position: absolute; 
  height: calc(100vh - 48px);
  text-align: left;
  align-items: center;
  top: 30%;
  left: ${props => props.left}vw;
`
const Title = styled.p`
  font-size: 1rem;
  width: 60vw;
  margin: 5vh 20vw;
  color: white;
`
const Author = styled.p` 
  width: 60vw;
  margin: 5vh 20vw;
  color: white;
`
const Description = styled.p`
  width: 60vw;
  margin: 5vh 20vw;
  color: white;
`

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 25px;
  margin-top: 10px;
`;

const Link = styled.a`
	text-decoration: none;
  float: right;
  margin: 5vh 20vw;
`

const article = (props) =>{
  return (
    <Article left={props.left}>
      <Title>{props.title}</Title>
      <Author>BY {props.author.toUpperCase()}</Author>
      <Description>{props.description}</Description>
      <Link href={props.url}><Logo src={read_more} alt="readmore"/> </Link>     
    </Article>
  );
}

export default article;