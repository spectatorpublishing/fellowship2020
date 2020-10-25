//SKELETON CODE FOR THE LETTER FROM THE EDITOR
//feel free to delete the code and write your own skeleton for practice; file is necessary placeholder!
import React from 'react';
import styled from 'styled-components';

//consider the following breakpoints:
  //mobile to desktop: 768
let Wrapper = styled.div`
  
  margin: 10%;
`
const LetterTitle = styled.h3 `
  text-align: left;
  color: #3cabdb;
  text-transform: uppercase;
  font-style: italic;
`

const LetterContent = styled.p`
  text-align: center;
  color: #3cabdb;
`
const LetterAuthor = styled.div`
  text-align: center;
  color: #3cabdb;
`
const LetterRole = styled.div`
  text-align: center;
  color: #9dd5ed;
`

//think about the props (i.e. things that vary from letter to letter) that you need
//because we are constructing this backward -- you can check the props given where the component is used...
export const EditorLetter = ({letter, author, role}) => {
    return (
        <Wrapper>
            {/* here, fill in the HTML component structure that will include the divs (styled) and props */}
            {/* check the Article.js and Footer.js for good examples */}
            {/* be sure to style your components after you make them -- styled compnoents! */}
            <div>
              <LetterTitle>Letter from the Editor</LetterTitle>
              <LetterContent>{letter}</LetterContent>
              <LetterAuthor>{author}</LetterAuthor>
              <LetterRole>{role}</LetterRole>
              </div>
        </Wrapper>
    );
};
