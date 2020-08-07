import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import Lightbox from '../components/Lightbox/Lightbox'

class GraphicsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphicsLightboxActive: false,
			// illustrationsLightboxActive: false,
			lightboxIndex: 0
        }
        this.closeGraphicsLightbox = this.closeGraphicsLightbox.bind(this)
		this.openGraphicsLightbox = this.openGraphicsLightbox.bind(this)
		// this.closeIllustrationsLightbox = this.closeIllustrationsLightbox.bind(this)
		// this.openIllustrationsLightbox = this.openIllustrationsLightbox.bind(this)
    }
    // closeIllustrationsLightbox(){
	// 	this.setState({"illustrationsLightboxActive": false})
	// }
	closeGraphicsLightbox(){
		this.setState({"graphicsLightboxActive": false})
	}
	// openIllustrationsLightbox(i){
	// 	this.setState({"illustrationsLightboxActive": true, "lightboxIndex": i})
	// }
	openGraphicsLightbox(i){
		this.setState({"graphicsLightboxActive": true, "lightboxIndex": i})
	}

    render() {
        return(
            <React.Fragment>
                <PageIntro title="GRAPHICS" description={this.props.data.blurb} img_src={this.props.data.img}/>
                    <PhotoGrid data={this.props.data.items[0].articles} openLightbox={this.openGraphicsLightbox}/>                
                    {
                        this.state.graphicsLightboxActive && <Lightbox
                            index={this.state.lightboxIndex} 
                            media={this.props.data.items[0].articles} 
                            onClose={this.closeGraphicsLightbox}
                        >
                        </Lightbox>
                    }                    
            </React.Fragment>
        );
    }
}

export default GraphicsContainer;