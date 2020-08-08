import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Contain = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 93%;
    padding-top: 5vw;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`

const Box = styled.section`
    overflow: hidden;
    text-align: left;
    border-radius: 25px;
    width: 22%;
    height: 0;
    margin: 1%;
    background: #3EAADB;
    padding-bottom: 22%;
    position: relative;
    cursor: pointer;

    @media only screen and (max-width: 992px){
        width: 40%;
        padding-bottom: 40%;
    }
`

const Text = styled.h4`
    font-size: 2vw;
    color: white;
    position: absolute;
    margin-left: 10%;
    margin-bottom: 10%;
    margin-right: 25%;
    bottom: 0;
    left: 0;
    font-weight: bold;

    @media only screen and (max-width: 992px){
        font-size: 4vw;
    }
`

class PhotoEssayBox extends Component{
    handleClick(link) {
        this.props.history.push(link)
	}
    
    render(){
        const grid = this.props.data.map((data, i) => {
			return (
                <Box to={data.link} onClick = {() => window.open(data.link, "_self")}>
                    <Text>{data.title}</Text>
	    		</Box>
    		)
		});

		return (
		    <Contain>{grid}</Contain>
		);        
    }
}

export default withRouter(PhotoEssayBox);