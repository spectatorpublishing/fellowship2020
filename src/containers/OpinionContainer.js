import React, { Component } from 'react';

import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

const letter = "When creating the curriculum for the opinion workshops, I wanted to instill in the fellows a deep regard for the intricacies and history of our campus and surrounding communities. While it is undoubtedly important for students to understand this, it is even more so for editors often entrusted with the responsibility of highlighting vulnerable stories written by those most affected.\
\n\nAlthough one of the responsibilities of an editor is making difficult decisions about what to publish, empathy is also a necessary skill. While writing op-eds can sometimes be another matter, opinion editing and sourcing should be,, at its core, is altruistic. I strongly believe that journalism nurtures one’s humanity and that humanity is a prerequisite for journalism.\
\n\nIn this class of fellows, I did not have to try very hard to induce this kind of thinking. Although they did not source their articles, they chose to write about topics that demonstrated their interest in understanding our community at a fundamental level. Our fellows researched their topics—promoting technological innovation in our surrounding community, rethinking fraternities in the wake of the recent Black Lives Matter protests, and pondering the ethics of online platforms such as Columbia Confessions—with extraordinary depth. They were able to deliver pieces that contextualize our community and inspire further thought and action. I am incredibly proud of our first class of fellows, and I cannot wait to see them grow as journalists in the future.";


export default class OpinionContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="OPINION" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <EditorLetter letter={letter} author="Tamarah Wallace" role="Editorial Page Editor"/>

          {/* <ExpandingColumns data = {opinion_sections}/>
          <ScrollingNavBar menuItems={opinion_sections}> */}
            <div>
              <GenericPanelLayout data={this.props.data.items[0]} />
            </div>
            {/* <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div> */}
            {/* <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div> */}
            {/* <div>
              <div style={{"height":"5vh"}}></div>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>Columns</h3>
              <PhotoGrid data={this.props.data.items[2].items} flip />
            </div> */}
          {/* </ScrollingNavBar> */}
      </React.Fragment>
    );
  }
}
