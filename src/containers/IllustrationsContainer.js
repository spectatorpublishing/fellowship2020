import React, { Component } from 'react';

import ExpandingColumns from '../components/ExpandingColumns';
import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import Lightbox from '../components/Lightbox/Lightbox';
import EditorLetter from '../components/EditorLetter';
import { illustration_sections } from '../util/OpinionData'


const letter = "If nothing else, the past several months have been an exercise in dealing with uncertainty. For all of us, the new stories, facts, and figures that each day brings threaten to upend our plans for the next.\
\n\nIllustration is a medium comfortable with uncertainty. Inch by inch and layer by layer, an idea is translated into a source of information and inspiration that can be shared with the world. When the unknowns of this pandemic are overwhelming and isolating, illustration can be a powerful tool for both the artist and the viewer, a tool that embodies the spirit of innovation and community the world desperately needs.\
\n\nAs incoming students, Spectator’s 2020 illustrations fellows have embraced the uncertainties that lie before them and all of us in the Columbia community. For two weeks, they analyzed drafts line by line, experimented with new artistic techniques and styles, and filled their writers’ inboxes and mine with sketches. The pieces they have created are a testament not only to the power of visuals to bring a story to life but also to what we can achieve when we leverage our unique perspectives and unite to see, among the uncertainties of our future, the possibilities.";

class IllustrationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // graphicsLightboxActive: false,
			illustrationsLightboxActive: false,
			lightboxIndex: 0
        }
        // this.closeGraphicsLightbox = this.closeGraphicsLightbox.bind(this)
		// this.openGraphicsLightbox = this.openGraphicsLightbox.bind(this)
		this.closeIllustrationsLightbox = this.closeIllustrationsLightbox.bind(this)
		this.openIllustrationsLightbox = this.openIllustrationsLightbox.bind(this)
    }
    closeIllustrationsLightbox(){
		this.setState({"illustrationsLightboxActive": false})
	}
	// closeGraphicsLightbox(){
	// 	this.setState({"graphicsLightboxActive": false})
	// }
	openIllustrationsLightbox(i){
		this.setState({"illustrationsLightboxActive": true, "lightboxIndex": i})
	}
	// openGraphicsLightbox(i){
	// 	this.setState({"graphicsLightboxActive": true, "lightboxIndex": i})
	// }

    render() {
        return(
            <React.Fragment>
                <div>
                    <PageIntro isIllo={true} title="ILLUSTRATIONS" description={this.props.data.blurb} img_src={this.props.data.img}/>
                    <EditorLetter letter={letter} author="Helen Yang" role="Illustrations Editor"/>

                        {this.props.data.items.map((data, i) => 
                            <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
                    <ExpandingColumns data = {illustration_sections}/>
                </div>
                    {/* <PhotoGrid data={this.props.data.items[0].articles} openLightbox={this.openIllustrationsLightbox}/>                
                    {
                        this.state.illustrationsLightboxActive && <Lightbox
                            index={this.state.lightboxIndex} 
                            media={this.props.data.items[0].articles} 
                            onClose={this.closeIllustrationsLightbox}
                        >
                        </Lightbox>
                    }                     */}
            </React.Fragment>
        );
    }
}

export default IllustrationsContainer;

