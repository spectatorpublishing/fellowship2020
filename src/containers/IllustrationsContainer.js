import React, { Component } from 'react';

import ExpandingColumns from '../components/ExpandingColumns';
import PageIntro from '../components/PageIntro';
import GenericPanelLayout from './GenericPanelLayout';
import EditorLetter from '../components/EditorLetter';
import { illustration_sections } from '../util/OpinionData'
import styled from 'styled-components';

let NavContainer = styled.p`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100vw;
  font-weight: 600;
  padding-top:20px;
  justify-content: center;
  color: ${props => props.theme.blue};
  align:center;
  font-style:normal;


   @media only screen and (max-width: 991px){
     padding-bottom: 25px;
     height: 60px;
     width: 100vw;
     padding-top:15px
     font-size: 1.05rem;
     text-align: -webkit-center;

  }

  ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 2;
  `}
`
const letter = "If nothing else, the past several months have been an exercise in dealing with uncertainty. For all of us, the new stories, facts, and figures that each day brings threaten to upend our plans for the next.\
\n\nIllustration is a medium comfortable with uncertainty. Inch by inch and layer by layer, an idea is translated into a source of information and inspiration that can be shared with the world. When the unknowns of this pandemic are overwhelming and isolating, illustration can be a powerful tool for both the artist and the viewer, a tool that embodies the spirit of innovation and community the world desperately needs.\
\n\nAs incoming students, Spectator’s 2020 illustrations fellows have embraced the uncertainties that lie before them and all of us in the Columbia community. For two weeks, they analyzed drafts line by line, experimented with new artistic techniques and styles, and filled their writers’ inboxes and mine with sketches. The pieces they have created are a testament not only to the power of visuals to bring a story to life but also to what we can achieve when we leverage our unique perspectives and unite to see, among the uncertainties of our future, the possibilities.";

class IllustrationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
			illustrationsLightboxActive: false,
			lightboxIndex: 0
        }
		this.closeIllustrationsLightbox = this.closeIllustrationsLightbox.bind(this)
		this.openIllustrationsLightbox = this.openIllustrationsLightbox.bind(this)
    }
    closeIllustrationsLightbox(){
		this.setState({"illustrationsLightboxActive": false})
	}
	openIllustrationsLightbox(i){
		this.setState({"illustrationsLightboxActive": true, "lightboxIndex": i})
    };


    render() {
        return(
            <React.Fragment>
                <div>
                    <PageIntro isIllo={true} title="ILLUSTRATIONS" description={this.props.data.blurb} img_src={this.props.data.img}/>
                    <EditorLetter letter={letter} author="Helen Yang" role="Illustrations Editor"/>

                        {this.props.data.items.map((data, i) =>
                            <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}

                    <NavContainer fixed={this.props.fixed}>The below gifs were created by illustrations fellow Olivia Vella to accompany the op-eds found on the opinion page.</NavContainer>
                    <ExpandingColumns data = {illustration_sections}/>
                </div>
            </React.Fragment>
        );
    }
}

export default IllustrationsContainer;
