//SKELETON CODE FOR THE LETTER FROM THE EDITOR
//feel free to delete the code and write your own skeleton for practice; file is necessary placeholder!
import React from 'react';
import styled from 'styled-components';

//consider the following breakpoints:
  //mobile to desktop: 768
let Wrapper = styled.div`
  width: 100%;
`

//think about the props (i.e. things that vary from letter to letter) that you need
//because we are constructing this backward -- you can check the props given where the component is used...
export const EditorLetter = ({ prop1 }) => {
    return (
        <Wrapper>
            {/* here, fill in the HTML component structure that will include the divs (styled) and props */}
            {/* check the Article.js and Footer.js for good examples */}
            {/* be sure to style your components after you make them -- styled compnoents! */}
            <div>
                {prop1}
                Text here.
            </div>
        </Wrapper>
    );
};
