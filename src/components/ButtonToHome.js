import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Logo = styled.h6`
  background-color: ${props => props.theme.black}AA;
  padding: 10px 20px;
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.white}22;
  border-radius: 1rem;
  cursor: pointer;
  transition: all ease .3s;

  &:hover {
    background-color: ${props => props.theme.black};
    border: 2px solid ${props => props.theme.white}88;
    transition: all ease .3s;
  }
`

class ButtonToHome extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.history.push("/")
  }

  render() {
    return <Logo onClick = {this.handleClick}>Year in Review</Logo>;
  }
}

export default withRouter(ButtonToHome);