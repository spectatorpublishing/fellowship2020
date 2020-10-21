//again, a skeleton container for naming purposes!!! feel free to delete and write your own from
//scratch if you would like! or reference this for making your own page

import React from 'react';
import styled from 'styled-components';
//what do you want to import to display?

const letter = "Theaters are dark. Art galleries are closed. Concert halls are silent.\
\n\nThough there are substitutes like online concerts, live-streamed plays, and virtual museums, you cannot feel the chill that settles over an audience during a gripping scene in a drama. You cannot feel the musical vibrations or chant lyrics at a concert among thousands of strangers. You cannot study the contours of a painter’s brush strokes or notice how the colors change as the light shifts.\
\n\nThe arts are at a crossroads. At the same time, we need them more than ever. Where, then, does that leave arts journalism?\
\n\nThat was the question I posed to the 72 brilliant and thoughtful students who participated in the Spectator Summer Fellowship Program this year. I personally do not know the answer, but I wanted to give these students the tools to discover it for themselves.\
\n\nIn our first workshop, I taught them the nuts and bolts of writing a review, a mode of critical thinking and writing that will become increasingly more important as we reckon with what the arts are and what they can become. Then, they learned rigorous pitching and reporting strategies because arts stories deserve to be investigated diligently from the idea’s initial seed to the final product that rolls off the (digital) printing press.\
\n\nData literacy is an invaluable skill for all journalists, so we explored the intersection of data and the arts—how data can uncover fascinating insights into familiar pieces of art as well as shed light on the financial, social, and political systems in which art is created. Lastly, we grappled with art’s existential crisis—how technology was challenging the definition of art even before the pandemic and how the crisis is leading to its transformation.\
\n\nArt’s crisis and transformation are not unlike those we are currently experiencing on a global scale, and this parallel is not a coincidence. If there’s one thing that I hope the fellows took away from our workshops, it is that art—or at least art worth writing about—reflects and shapes the times. It cannot be divorced from the moment we are living in.\
\n\nAfter I had the privilege of learning alongside this exemplary class of fellows in the workshop setting, I had the joy of guiding six extraordinary young women as they used their new skills to write meticulously-reported arts stories that meet the moment. I am so proud of what each and every fellow in the program has accomplished this summer. I am grateful to them for reminding me that even in its darkest hour, art is resilient and triumphant. And we are too.";
//author is Abby Rooney;
//role is Arts & Entertainment Editor;

const PageWrapper = styled.main`
  display: flex;
`;


export const AEContainer = () => {
    return(
        <PageWrapper>
            {/* display some components or other containers -- think about how you could recreate on */}
            {/* {data.items.map((data, i) => 
              <Component key={i} data={data} />)} */}
        </PageWrapper>
    )
}