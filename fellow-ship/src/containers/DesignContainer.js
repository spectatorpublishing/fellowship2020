import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import Lightbox from '../components/Lightbox/Lightbox'

class DesignContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			graphicsLightboxActive: false,
			illustrationsLightboxActive: false,
			lightboxIndex: 0
		}
		this.closeGraphicsLightbox = this.closeGraphicsLightbox.bind(this)
		this.openGraphicsLightbox = this.openGraphicsLightbox.bind(this)
		this.closeIllustrationsLightbox = this.closeIllustrationsLightbox.bind(this)
		this.openIllustrationsLightbox = this.openIllustrationsLightbox.bind(this)
	}
	closeIllustrationsLightbox(){
		this.setState({"illustrationsLightboxActive": false})
	}
	closeGraphicsLightbox(){
		this.setState({"graphicsLightboxActive": false})
	}
	openIllustrationsLightbox(i){
		this.setState({"illustrationsLightboxActive": true, "lightboxIndex": i})
	}
	openGraphicsLightbox(i){
		this.setState({"graphicsLightboxActive": true, "lightboxIndex": i})
	}

  render() {
    return (
      <React.Fragment>
        <PageIntro title="DESIGN" description={this.props.data.blurb} img_src={this.props.data.img}/>
        <ScrollingNavBar menuItems={this.props.data.sections}>
        <div>
	        <GenericPanelLayout data = {this.props.data.items[0]} />)}
    	</div>
    	<div>
    		<div style={{"height":"5vh"}}></div>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>GRAPHICS</h3>
	        <PhotoGrid data={this.props.data.items[1]} openLightbox={this.openGraphicsLightbox}/>
	    </div>
    	<div>
    		<div style={{"height":"5vh"}}></div>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>ILLUSTRATIONS</h3>
	        <PhotoGrid data={this.props.data.items[2]} openLightbox={this.openIllustrationsLightbox}/>
	     </div>
        </ScrollingNavBar>
				{this.state.illustrationsLightboxActive && <Lightbox
					index={this.state.lightboxIndex} 
					media={this.props.data.items[2]} 
					onClose={this.closeIllustrationsLightbox}>
				</Lightbox>}
				{this.state.graphicsLightboxActive && <Lightbox
					index={this.state.lightboxIndex} 
					media={this.props.data.items[1]} 
					onClose={this.closeGraphicsLightbox}>
				</Lightbox>}
      </React.Fragment>
    );
  }
}

export default DesignContainer;
