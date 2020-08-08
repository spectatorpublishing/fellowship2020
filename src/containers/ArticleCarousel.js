import React, { Component } from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import ImageBoxSlider from './ImageBoxSlider';

const mobileSize = 992

export default class ArticleCarousel extends Component {
  state = { 
      isMobile: window.innerWidth <= mobileSize,
  }

  componentWillMount() {
      window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
      this.setState({ isMobile: window.innerWidth <= mobileSize });
  };

  render() {
    return (
      <React.Fragment>
      <MobileAndTablet>
          <ImageBoxSlider data = {this.props.data.articles}/>
      </MobileAndTablet>
      
      <Desktop>
              <ImageBoxSlider data = {this.props.data.articles}/>
      </Desktop>
      </React.Fragment>
    );
  }
}