import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import Lightbox from '../components/Lightbox/Lightbox';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import EditorLetter from '../components/EditorLetter';

const letter = "Often, I find that the most brilliant stories—those that emphasize truth and accountability—are rooted in data. As the digital medium has transformed, so too have the stories we choose to tell. By acknowledging the role of data in our understanding of society, we can analyze and question the validity of what we consider to be true.\
\n\nThere are people who fall prey to ongoing systems due to distorted and unexplored data.\
\n\nThis is the type of data our graphics fellows worked with this summer.\
\n\nBy pulling apart police-reported civilian complaints, you will spot inconsistencies in the same way that you can spot racial biases in policing or contextualize the preconception of an “unsafe neighborhood.” There’s a story there.\
\n\nBy looking at current West Harlem’s demographics and income data, health clinic data, and the city-wide response to the 2009 H1N1 pandemic, you can piece together that the same inequities continue to target the most vulnerable West Harlem residents—the same inequities that will likely prevent access to a future COVID-19 vaccine. There’s a story there.\
\n\nBy comparing rezoning data and city funding, you can better understand the implications of gentrification in displacing residents and its contribution to the upper Manhattan affordable housing crisis. There’s a story there.\
\n\nThese are a few of the stories our graphics fellows learned to tell—and not only by ideating stories and exploring datasets, but also conveying them in visually compelling and intuitive ways.\
\n\nIn four weeks, these fellows have reported on stories, collected and analyzed datasets, and visualized them through code and design. They pushed past their comfort zones to tell intriguing and impactful stories. And though I am not the most eloquent with words (which is why I create graphics instead), I can say wholeheartedly that I am proud of their efforts to learn, grow, and inspire. It has been an absolute privilege to guide these budding creators who will continue to transform journalism beyond our current understanding of it.\
\n\nThere are many more stories to come from our graphics team, and we are so thrilled to tell them.";

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
                <EditorLetter letter={letter} author="Raeedah Wahid" role="Graphics Editor"/>
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