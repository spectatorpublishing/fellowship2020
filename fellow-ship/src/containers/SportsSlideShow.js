import React, {Component} from 'react';
import styled from 'styled-components'

import SportSlide from '../components/SportSlide'

import white_arrow from '../assets/right_arrow.svg'
import filledCircle from '../assets/filledCircleWhite.svg'
import emptyCircle from '../assets/emptyCircleWhite.svg'

const n = 1

const ImageContainer = styled.div`
	background: #555;
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow: hidden;
`
const BoxPanel = styled.div`
	display: flex;
	width: 100vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`
const Arrow = styled.img`
	width: 3vw;
  	z-index: 1;
  	transform: ${props => props.left ? "rotate(180deg)" : ""};
  	position: absolute;
  	top: 50vh;
  	${props => props.left ? "left" : "right"}: 3vw;
`

const CircleContainer = styled.div`
	width: 100vw;	
	height: 5vh;
    position: absolute;
    transform: translateY(-7vh);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	@media only screen and (max-width: 991px){
	transform: translateY(-12vh);
	}
`

const Circle = styled.img`
	margin: 10px;
`

class SportsSlideShow extends Component {

	constructor() {
	    super()
	    this.onLeft = this.onLeft.bind(this)
	    this.onRight = this.onRight.bind(this)
	    this.onCircle = this.onCircle.bind(this)
	}

	state = {
		box_index: 0,
		circle_index: 0,
		leftDisabled: true,
		rightDisabled: false
	}

	onLeft(){
		if (this.state.leftDisabled)
			return 
		let current_index = this.state.box_index - 1
		let current_circle = this.state.circle_index -1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index === 0){
			this.setState({
				leftDisabled: true
			})
		}
		if (current_index === this.props.data.length-n-1){
			this.setState({
				rightDisabled: false
			})
		}
		
	}

	onRight(){
		if (this.state.rightDisabled)
			return 
		let current_index = this.state.box_index + 1
		let current_circle = this.state.circle_index + 1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index === this.props.data.length-n){
			this.setState({
				rightDisabled: true
			})
		}
		if (current_index === 1){
			this.setState({
				leftDisabled: false
			})
		}
	}

	onCircle = (i) => {
		let leftDisabled = false
		let rightDisabled = false
		if (i===this.props.data.length-3){
		 	rightDisabled = true
		}
		else if (i===0)
			leftDisabled = true

		this.setState({
			box_index: i,
			circle_index: i,
			leftDisabled: leftDisabled,
			rightDisabled: rightDisabled
		})
	}

	render(){
		let boxes = this.props.data.map ( (data,i) => 
			<SportSlide text = {data.blurb} title= {data.name} author={data.author} 
			img_src={data.img} key = {i}/>
		)
		let circles = this.props.data.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src = {filledCircle} onClick={ () => this.onCircle(i)} key={i}/>
				else 
					return <Circle src = {emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
			}
		)

		let leftArrow =   <Arrow src={white_arrow} onClick={this.onLeft} left/> 
		let rightArrow =  <Arrow src={white_arrow} onClick={this.onRight}/> 

		return (
			<div style={{position: "relative"}}>
				{leftArrow}
				{rightArrow}
				<ImageContainer>
					<BoxPanel translateValue = {this.state.box_index*(-100)}>
						{boxes}		
					</BoxPanel>
				</ImageContainer>
				<CircleContainer> {circles} </CircleContainer> 
			</div>
		)
	}
}

export default SportsSlideShow
