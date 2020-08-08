import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import Lightbox from '../components/Lightbox/Lightbox'
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';

class PhotoContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			newsLightboxActive: false,
			spectrumLightboxActive: false,
			sportsLightboxActive: false,
			eyeLightboxActive: false,
			aneLightboxActive: false,
			lightboxIndex: 0,
		}
		this.closeNewsLightbox = this.closeNewsLightbox.bind(this)
		this.openNewsLightbox = this.openNewsLightbox.bind(this)
		this.closeSpectrumLightbox = this.closeSpectrumLightbox.bind(this)
		this.openSpectrumLightbox = this.openSpectrumLightbox.bind(this)
		this.closeSportsLightbox = this.closeSportsLightbox.bind(this)
		this.openSportsLightbox = this.openSportsLightbox.bind(this)
		this.closeEyeLightbox = this.closeEyeLightbox.bind(this)
		this.openEyeLightbox = this.openEyeLightbox.bind(this)
		this.closeAnELightbox = this.closeAnELightbox.bind(this)
		this.openAnELightbox = this.openAnELightbox.bind(this)
	}

	closeNewsLightbox(){
		this.setState({"newsLightboxActive": false})
	}
	openNewsLightbox(i){
		console.log('light index', i);
		this.setState({"newsLightboxActive": true, "lightboxIndex": i})
	}
	closeSpectrumLightbox(){
		this.setState({"spectrumLightboxActive": false})
	}
	openSpectrumLightbox(i){
		console.log('light index', i);
		this.setState({"spectrumLightboxActive": true, "lightboxIndex": i})
	}
	closeSportsLightbox(){
		this.setState({"sportsLightboxActive": false})
	}
	openSportsLightbox(i){
		console.log('light index', i);
		this.setState({"sportsLightboxActive": true, "lightboxIndex": i})
	}
	closeEyeLightbox(){
		this.setState({"eyeLightboxActive": false})
	}
	openEyeLightbox(i){
		console.log('light index', i);
		this.setState({"eyeLightboxActive": true, "lightboxIndex": i})
	}
	closeAnELightbox(){
		this.setState({"aneLightboxActive": false})
	}
	openAnELightbox(i){
		console.log('light index', i);
		this.setState({"aneLightboxActive": true, "lightboxIndex": i})
	}

	render() {
    return (
      <React.Fragment>
        <PageIntro title="PHOTO" description={this.props.data.blurb} img_src={this.props.data.img}/>
		<GenericPanelLayout data = {this.props.data.Photo_Essays} />)}
		
		<ScrollingNavBar menuItems={this.props.data.sections}>
			<div>
				<h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {this.props.data.items[0].name}</h3>
				<PhotoGrid data={this.props.data.items[0].articles} openLightbox={this.openNewsLightbox}/>
			</div>
			<div>
				<h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {this.props.data.items[1].name}</h3>
				<PhotoGrid data={this.props.data.items[1].articles} openLightbox={this.openSpectrumLightbox}/>
			</div>
			<div>
				<h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {this.props.data.items[2].name}</h3>
				<PhotoGrid data={this.props.data.items[2].articles} openLightbox={this.openSportsLightbox}/>
			</div>
			<div>
				<h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {this.props.data.items[3].name}</h3>
				<PhotoGrid data={this.props.data.items[3].articles} openLightbox={this.openEyeLightbox}/>
			</div>
			<div>
				<h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {this.props.data.items[4].name}</h3>
				<PhotoGrid data={this.props.data.items[4].articles} openLightbox={this.openAnELightbox}/>
			</div>

		</ScrollingNavBar>
			{this.state.newsLightboxActive && <Lightbox
				index={this.state.lightboxIndex} 
				media={this.props.data.items[0].articles} 
				authorLabel="photographer"
				onClose={this.closeNewsLightbox}>
			</Lightbox>}
			{this.state.spectrumLightboxActive && <Lightbox
				index={this.state.lightboxIndex} 
				media={this.props.data.items[1].articles} 
				authorLabel="photographer"
				onClose={this.closeSpectrumLightbox}>
			</Lightbox>}
			{this.state.sportsLightboxActive && <Lightbox
				index={this.state.lightboxIndex} 
				media={this.props.data.items[2].articles} 
				authorLabel="photographer"
				onClose={this.closeSportsLightbox}>
			</Lightbox>}
			{this.state.eyeLightboxActive && <Lightbox
				index={this.state.lightboxIndex} 
				media={this.props.data.items[3].articles} 
				authorLabel="photographer"
				onClose={this.closeEyeLightbox}>
			</Lightbox>}
			{this.state.aneLightboxActive && <Lightbox
				index={this.state.lightboxIndex} 
				media={this.props.data.items[4].articles} 
				authorLabel="photographer"
				onClose={this.closeAnELightbox}>
			</Lightbox>}
      </React.Fragment>
    );
  }
}

export default PhotoContainer;
