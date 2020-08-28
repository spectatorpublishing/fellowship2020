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
  padding: 20px 0;
`

const Testimonial = styled.div`
  align-items: center;
  // padding: 120px 0;
`

const AuthorPicture = styled.div`
  width: 400px;
  height: 400px;

  margin-left: ${({ index }) => index % 2 ? '-2%' : '2%'};
  margin-right: ${({ index }) => index % 2 ? '2%' : '-2%'};
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
  justify-content: center;
`

const MobileQuote = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.blue};
  text-align: center;
  padding: 15px;
  padding-top: 1.5rem;
`

const MobileAuthor = styled.h5`
  font-size: 1.2rem;
  // text-shadow: ${props => props.theme.shadow};
  // padding: 2vh 0vw 4vh 0vw;
  color: ${props => props.theme.blue};
  // width: 60vw;
  text-align:center;
  // margin-left:auto;
  // margin-right:auto;
`

const MobileYear = styled.h5`
  color: ${props => props.theme.transparentBlue};
  padding-left: 0.5rem;
`

const MobileHome = styled.h5`
  color: ${props => props.theme.transparentBlue};
`


const MobileAuthorPicture = styled.div`
  background-image: url(${({ img_src }) => img_src});
  background-position: center;
  background-size: cover;
  @media (max-width: 991px){
    height: 50vh;
    width: 50vh;
    margin-left:auto;
    margin-right:auto;
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
  font-style: italic;
  padding-bottom: 0.5rem;
  `

const Author = styled.h5`
  font-size: 1.5rem;
  // text-shadow: ${props => props.theme.shadow};
  // padding: ${({ index }) => index % 2 ? '4vh 2vw 0vh 8vw' : '4vh 8vw 0vh 2vw'};
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.blue};
  // width: 60vw;
  // margin: 0.5rem 0;

   @media only screen and (max-width: 991px){
    // padding: 15px 15px;
    font-size: 1em;
    margin: 0;
`

const Year = styled.h5`
  font-size: 1.5rem;
  padding-left: 0.5rem;
  color: ${props => props.theme.transparentBlue};
`

const Home = styled.h5`
  font-size: 1.5rem;
  color: ${props => props.theme.moretransparentBlue};
  padding-left: 0.5rem;
`

const LinkBox = styled.a`
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  text-decoration: none;
`
const MobileLinkBox = styled.a`
  background-color: white;
  text-decoration: none;
`

const SectionDivider = styled.hr`
  height: 3px;
  width: 100vw;
  color: ${props => props.theme.blue};
  background-color: ${props => props.theme.blue};
  border: none;
  @media only screen and (max-width:991px){
    margin-bottom: 1rem;}
`

const Emme = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  // padding-top: 10px;
  // padding-bottom: 15px;
  padding: ${({ index }) => index % 2 ? '3vh 2vw 0vh 8vw' : '3vh 8vw 0vh 2vw'};

  @media only screen and (max-width:991px){
    padding: 3vh 0vw 3vh 0vw;
    justify-content: center;}
`

const Michael = styled.div`
@media only screen and (max-width: 1040px){
    flex-basis: 100%;
    height: 0px;}
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

    render() {
        return (
            <React.Fragment>
                <MobileAndTablet>
                    {/* <TopContainer img_src={this.props.data.img} isMobile={this.state.isMobile} /> */}
                    {this.props.data.articles.map((data, i) =>
                        <>
                        <MobileTopContainer>
                            <MobileAuthorPicture index={i} img_src={data.img} />
                            <MobileTestimonial>
                                <MobileQuote index={i + 1}>“{data.quote}”</MobileQuote>
                                <Emme>
                                  <MobileAuthor index={i + 1}>{data.author},</MobileAuthor>
                                  <MobileYear index={i + 1}>{data.year},</MobileYear><Michael></Michael>
                                  <MobileHome index={i + 1}>{data.home}</MobileHome>
                                </Emme>
                                {data.link ?
                                <MobileLinkBox href={data.link}>
                                  <MobileReadHere index={i + 1}>{data.description}</MobileReadHere>
                                </MobileLinkBox> 
                                : <></> }
                            </MobileTestimonial>
                        </MobileTopContainer>
                        <SectionDivider></SectionDivider>
                        </>
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
                                <>
                                <TopContainer>
                                    <AuthorPicture index={i} img_src={data.img} />
                                    <Testimonial>
                                        <Quote index={i + 1}>“{data.quote}”</Quote>
                                        <Emme index={i + 1}>
                                          <Author index={i + 1}>{data.author},</Author>
                                          <Year index={i + 1}>{data.year},</Year><Michael></Michael>
                                          <Home index={i + 1}>{data.home}</Home>
                                        </Emme>
                                        {data.link ?
                                        <LinkBox href={data.link}>
                                          <ReadHere index={i + 1}>{data.description}</ReadHere>
                                        </LinkBox> 
                                        : <></> }
                                    </Testimonial>
                                </TopContainer>
                                <SectionDivider></SectionDivider>
                                </>
                                :
                                <>
                                <TopContainer>
                                    <Testimonial>
                                        <Quote index={i + 1}>“{data.quote}”</Quote>
                                        <Emme index={i + 1}>
                                          <Author index={i + 1}>{data.author},</Author>
                                          <Year index={i + 1}>{data.year},</Year><Michael></Michael>
                                          <Home index={i + 1}>{data.home}</Home>
                                        </Emme>
                                        {data.link ?
                                        <LinkBox href={data.link}>
                                          <ReadHere index={i + 1}>{data.description}</ReadHere>
                                        </LinkBox> 
                                        : <></> }
                                    </Testimonial>
                                    <AuthorPicture index={i} img_src={data.img} />
                                </TopContainer>
                                <SectionDivider></SectionDivider>
                                </>

                        )}
                    </Container>
                </Desktop>
            </React.Fragment >
        );
    }
}
