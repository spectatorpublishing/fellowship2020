import React, { Component } from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import ImageBoxSlider from './ImageBoxSlider';

const mobileSize = 992

const Container = styled.div`
  width: 100vw;
  position: relative;
`

const TopContainer = styled.div`
  width: 100vw;
  height: 100%;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Testimonial = styled.div`
  align-items: center;
  padding: 120px 0;
`

const AuthorPicture = styled.div`
  width: 400px;
  height: 400px;

  margin-left: ${({ index }) => index % 2 ? '-0.25%' : '2%'};
  background-image: url(${({ img_src }) => img_src});
  background-position: center;
  background-size: cover;
  align-items: center;
  @media (max-width: 991px){
    height: 50vh;
  }
`

const Quote = styled.p`
  padding: ${({ index }) => index % 2 ? '0vh 2vw 0vh 8vw' : '0vh 8vw 0vh 2vw'};
  text-align: ${({ index }) => index % 2 ? 'right' : 'left'};
  // text-shadow: ${props => props.theme.shadow};
  color: ${props => props.theme.blue};
  width: 60vw;
  font-size:1.6em;
  line-height: 120%;
`

const MobileTestimonial = styled.p`

`

const MobileTopContainer = styled.div`
  width: 100vw;
  height: 100%;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-size: cover;
  align-items: center;
`

const MobileQuote = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.blue};
  text-align: center;
  padding:15px;
`

const MobileAuthor = styled.h5`
  font-size: 1.2rem;
  // text-shadow: ${props => props.theme.shadow};
  padding: 2vh 0vw 4vh 0vw;
  color: ${props => props.theme.blue};
  width: 60vw;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
`

const MobileAuthorPicture = styled.div`
  background-image: url(${({ img_src }) => img_src});
  background-position: center;
  background-size: cover;
  @media (max-width: 991px){
    height: 50vh;
  }
`;

const ReadHere = styled.p`
  padding: ${({ index }) => index % 2 ? '4vh 2vw 0vh 8vw' : '4vh 8vw 0vh 2vw'};
  text-align: right;
  color: ${props => props.theme.blue};
  width: 60vw;
  font-size: 1.4rem;
  font-style: italic;
  line-height: 120%;
`

const MobileReadHere = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.blue};
  text-align: center;
  font-style: italic;`

const Author = styled.h5`
  font-size: 1.5rem;
  // text-shadow: ${props => props.theme.shadow};
  padding: ${({ index }) => index % 2 ? '4vh 2vw 0vh 8vw' : '4vh 8vw 0vh 2vw'};
  text-align: right;
  color: ${props => props.theme.blue};
  width: 60vw;
`

const Year = styled.h5`
  font-size: 1.5rem;
  text-align: right;
  padding-left: 0.5rem
  color: ${props => props.theme.transparentBlue};
  width: 60vw;
`

const Home = styled.h5`
  font-size: 1.5rem;
  text-align: right;
  padding-left: 0.5rem
  color: "rgba(60, 171, 219, 0.25)";
  width: 60vw;
`

export default class GenericTestimonial extends Component {
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

    // do odd even rendering based on even odd ? :
    render() {
        return (
            <React.Fragment>
                <MobileAndTablet>
                    {/* <TopContainer img_src={this.props.data.img} isMobile={this.state.isMobile} /> */}
                    {this.props.data.articles.map((data, i) =>
                        <MobileTopContainer>
                            <MobileAuthorPicture index={i} img_src={data.img} />
                            <MobileTestimonial>
                                <MobileQuote index={i + 1}>“{data.quote}”</MobileQuote>
                                <MobileAuthor index={i + 1}>{data.author}</MobileAuthor>
                                <MobileReadHere index={i + 1}>{data.description}</MobileReadHere>
                            </MobileTestimonial>
                        </MobileTopContainer>
                    )}
                </MobileAndTablet>

                <Desktop>
                    <Container>
                        {/* <TopContainer img_src={this.props.data.img}> */}
                        {/* <Head index={0}>{this.props.data.name}</Head>
              <Subtitle>{this.props.data.blurb}</Subtitle>
            </TopContainer> */}
                        {this.props.data.articles.map((data, i) =>
                            (i % 2 == 0) ?
                                <TopContainer>
                                    <AuthorPicture index={i} img_src={data.img} />
                                    <Testimonial>
                                        <Quote index={i + 1}>“{data.quote}”</Quote>
                                        <div><Author index={i + 1}>{data.author},</Author><Year index={i + 1}>{data.year},</Year> <Home index={i + 1}>{data.home}</Home></div>
                                        <ReadHere index={i + 1}>{data.description}</ReadHere>
                                    </Testimonial>
                                </TopContainer>
                                :
                                <TopContainer>
                                    <Testimonial>
                                        <Quote index={i + 1}>“{data.quote}”</Quote>
                                        <div><Author index={i + 1}>{data.author},</Author><Year index={i + 1}>{data.year},</Year> <Home index={i + 1}>{data.home}</Home></div>
                                        <ReadHere index={i + 1}>{data.description}</ReadHere>
                                    </Testimonial>
                                    <AuthorPicture index={i} img_src={data.img} />
                                </TopContainer>
                        )}
                    </Container>
                </Desktop>
            </React.Fragment >
        );
    }
}
