import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import styled from 'styled-components';
import { ReactComponent as Arrow } from "../../assets/right_arrow.svg";
import { ReactComponent as Cross } from "../../assets/x.svg";

let RightArrow = styled(Arrow)`
  cursor: pointer;
  & path {
    stroke: ${props => props.theme.transparentWhite};
  }

  &:hover path {
    stroke: ${props => props.theme.white};
  }
`
let LeftArrow = styled(RightArrow)`
  cursor: pointer;
  transform: rotate(180deg);
`
let FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${props => props.theme.indigo};
`
let LightboxContainer = styled(FullScreenContainer)`
  background-image: url(${props => props.imageUrl});
  background-position: right;
  background-size: cover;
  flex-direction: row;
`
let LightboxMobileContainer = styled(FullScreenContainer)`
  flex-direction: column;
  padding: 5vh 10vw;
  width: 80vw;
  height: 90vh;
`
let PreviewContainer = styled.div`
  background: ${props => props.theme.indigo};
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
`
let PreviewContainerMobile = styled(PreviewContainer)`
  width: 100vw;
`
let ImageContainer = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  justify-content: center;
`
let Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`
let CaptionContainer = styled.div`
  width: 25%;
  padding: 0 5%;
  background: rgba(34,36,48,0.8);
`
let CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 10%;
`
let CloseContainerMobile = styled(CloseContainer)`
  height: initial;
`
let CloseButton = styled(Cross)`
  cursor: pointer;
  & path {
    stroke: ${props => props.theme.transparentWhite};
  }

  &:hover path {
    stroke: ${props => props.theme.white};
  }
`
let TitleContainer = styled.div`
  height: 50%;
  margin-top: 40%;
  overflow-y: scroll;
`
let ArticleLink = styled.a`
  color: ${props => props.theme.blue};
  text-decoration: none;
`
let Title = styled.h4`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;

  &:hover {
    color: ${props => props.theme.blue};
  }
`
let TitleMobile = styled(Title)`
  height: 10vh;
`
let Description = styled.p`
  color: ${props => props.theme.white};
`
let CreditContainer = styled.div`
  height: 15%;
`
let Credit = styled.h5`
  color: ${props => props.theme.white};
  text-transform: capitalize;
`

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index || 0,
      width: window.innerWidth
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        this.handleLeftArrowClick();
        break;
      case "ArrowRight":
        this.handleRightArrowClick();
        break;
      case "Escape":
        this.props.onClose();
        break;
      default:
        break;
    }
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleLeftArrowClick() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1});
    } else {
      this.setState({ index: this.props.media.length - 1});
    }
  }

  handleRightArrowClick() {
    if (this.state.index + 1 < this.props.media.length) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }

  getShortenedCaption(description, articleUrl, maxLength) {
    // Trim the string to the maximum length
    description = description.substr(0, maxLength);
    // Re-trim if we are in the middle of a word
    let punctuation = `.!?`;
    if (!punctuation.includes(description.substr(description.length - 1))) {
      description = description.substr(0, Math.min(description.length, description.lastIndexOf(" ")));
      // Add ellipsis since we're mid-sentence
      description += "..."
    }
    description += " "
    
    return (<React.Fragment>
      {description}<ArticleLink href={articleUrl} target="_blank">Read More</ArticleLink>
    </React.Fragment>);
  }

  render() {
    let title = this.props.media[this.state.index].title;
    let description = this.props.media[this.state.index].description;
    let articleUrl = this.props.media[this.state.index].link;
    let fullSizeImg = this.props.media[this.state.index].img ? this.props.media[this.state.index].img : this.props.media[this.state.index].front_image
    return (
      <FullScreenContainer>
        <MobileAndTablet>
          <LightboxMobileContainer>
            <CloseContainerMobile>
              <CloseButton onClick={this.props.onClose} />
            </CloseContainerMobile>
            
            <PreviewContainerMobile>
              <LeftArrow onClick={this.handleLeftArrowClick} />
              <ImageContainer>
                <Image 
                  src={fullSizeImg}
                  altText={this.props.media[this.state.index].altText}
                >
                </Image>
              </ImageContainer>
              <RightArrow onClick={this.handleRightArrowClick} />
            </PreviewContainerMobile>

            { title &&
            <ArticleLink href={articleUrl} target="_blank">
              <TitleMobile>{title}</TitleMobile>
            </ArticleLink>
            }
            { description &&
            <Description>{this.getShortenedCaption(description, articleUrl, 100)}</Description>
            }

            <CreditContainer>
              <Credit>{this.props.media[this.state.index].author}</Credit>
            </CreditContainer>
          </LightboxMobileContainer>
        </MobileAndTablet>

        <Desktop>
          <LightboxContainer imageUrl={this.props.media[this.state.index].front_image}>
            <PreviewContainer>
              <LeftArrow onClick={this.handleLeftArrowClick} />
              <ImageContainer>
                <Image 
                  src={fullSizeImg}
                  altText={this.props.media[this.state.index].altText}
                >
                </Image>
              </ImageContainer>
              <RightArrow onClick={this.handleRightArrowClick} />
            </PreviewContainer>

            <CaptionContainer>
              <CloseContainer>
                <CloseButton onClick={this.props.onClose} />
              </CloseContainer>

              <TitleContainer>
                { title &&
                <ArticleLink href={articleUrl} target="_blank">
                  <Title>{this.props.media[this.state.index].title}</Title>
                </ArticleLink>
                }
                { description &&
                <Description>{this.getShortenedCaption(description, articleUrl, 400)}</Description>
                }
              </TitleContainer>

              <CreditContainer>
                <Credit>{this.props.media[this.state.index].author}</Credit>
              </CreditContainer>
            </CaptionContainer>
          </LightboxContainer>
        </Desktop>
      </FullScreenContainer>
    );
  }
}

export default withRouter(Lightbox);