import React, { Component } from 'react';

import ExpandingColumns from '../components/ExpandingColumns';
import PageIntro from '../components/PageIntro';
import GenericPanelLayout from './GenericPanelLayout';
import EditorLetter from '../components/EditorLetter';
import { illustration_sections } from '../util/OpinionData'


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
    
// let IntroText = styled.div`
//     width: 100%;
//     margin-left: 10vw;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     position: relative;
//     padding-top: 1rem;
//     padding-bottom: 3rem;
// `;

// let TextContain = styled.h3`
//      width: 60vw;
//      margin: 5vh 20vw;
//      color: white;
// `;

    render() {
        return(
            <React.Fragment>
                <div>
                    <PageIntro isIllo={true} title="ILLUSTRATIONS" description={this.props.data.blurb} img_src={this.props.data.img}/>
                    <EditorLetter letter={letter} author="Helen Yang" role="Illustrations Editor"/>

                        {this.props.data.items.map((data, i) => 
                            <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
                    {/* <IntroText>
                            <TextContain>The below gifs were created by illustrations fellow Olivia Vella to accompany the op-eds found on the opinion page.</TextContain>
                    </IntroText> */}
                    <ExpandingColumns data = {illustration_sections}/>
                </div>
            </React.Fragment>
        );
    }
}

export default IllustrationsContainer;

