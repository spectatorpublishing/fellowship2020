//SKELETON CODE FOR THE LETTER FROM THE EDITOR
//feel free to delete the code and write your own skeleton for practice; file is necessary placeholder!
import React from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

//consider the following breakpoints:
  //mobile to desktop: 768
let Wrapper = styled.div`
  margin: 10%;
  white-space: pre-wrap;
  text-align: left;
  color: #3cabdb;
`
const LetterTitle = styled.h2 `
  color: #3cabdb;
  text-transform: uppercase;
  font-style: italic;
`

const LetterContent = styled.p`
  padding-top: 25px;
  color: #3cabdb;
  font-size: 95%;
`
const LetterAuthor = styled.h5`
  padding-top: 25px;
  color: #3cabdb;
  font-weight: bold;
  font-style: normal;
  font-size: 90%;
`

const LetterRole = styled.h5`
  color: #9dd5ed;
  font-weight: bold;
  font-style: normal;
  font-size: 90%;
`

//think about the props (i.e. things that vary from letter to letter) that you need
//because we are constructing this backward -- you can check the props given where the component is used...

//whats that line thingy?

export const EditorLetter = ({letter, author, role}) => {
    return (
        <Wrapper>
            {/* here, fill in the HTML component structure that will include the divs (styled) and props */}
            {/* check the Article.js and Footer.js for good examples */}
            {/* be sure to style your components after you make them -- styled compnoents! */}
            <div>
              <LetterTitle>Letter from the Editor</LetterTitle>
              <LetterContent>{letter}</LetterContent>
              <p>_______</p>
              <LetterAuthor>{author} ,</LetterAuthor>
              <LetterRole>{role}</LetterRole>
            </div>
        </Wrapper>
    );
};
