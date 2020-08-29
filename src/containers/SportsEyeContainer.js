import React, { Component } from 'react';

import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import MultipleEditorsLetter from '../components/MultipleEditorsLetter';

const letter = "Throughout the course of this fellowship, we challenged our 12 bright-eyed fellows for The Eye and Sports to answer this question: What does it mean to write a feature?\
\n\nTo challenge an institution? To tell a story? To profile an event? To share a resource? To rethink how we look at things?\
\n\nHopefully, they did not find an answer. Because there isn’t one.\
\n\nFeature stories do all of those things and more. They cannot be limited by topic or section, and they force readers to confront issues and ideas as unique as the writers are themselves. We tried to teach our fellows how to write and report for a feature, but the reality is that feature journalism is ever-changing.\
\n\nWhat people can do with video, audio, data, graphics, and photography continues to develop each and every day. Throughout this fellowship, our writers learned how to use different mediums to tell stories and how each tool is able to shift the way a reader encounters their work. They learned how to humanize issues and how to ethically tell the stories of their own experiences and those of others.\
\n\nJournalism and the topics it covers are constantly shifting, and no one knows this better than our fellows, whose first year at Columbia will be different than they could have imagined. The fellows were thrust into what remains relatively unknown, and in the process of figuring it out, have written stories that reflect the realities of living in this distinct period.\
\n\nTheir work speaks for itself.\
\n\nThe Eye and Sports fellows wrote about everything from how COVID-19 has changed the experience and significance of hugging to how incoming first-years from Hong Kong are grappling with not only political unrest at home but also a raging global pandemic. They examined how unrecognized sports teams will most likely be unable to sustain themselves in the aftermath of the COVID-19 pandemic. They looked at Columbia itself—how its architecture alienates Harlem residents and how test-optional policies will impact the diversity in next year’s incoming students.\
\n\nThey also took a step back and reflected on their own experiences as especially unique newcomers—writing personally about what can be seen from Columbia urban legends and how technology and social media help connect a physically distanced class of students.\
\n\nThese fellows set off to answer a question with no answers, and for that, we applaud them. While you will not be able to properly answer the question of what it means to write a feature, after reading these articles, you will be left with a better understanding of the Columbia community through the eyes of these fellows’ hard work.";

const letter2 = ""

class SportsEyeContainer extends Component {
  constructor() {
      super()
      this.state = {
        // graphicsLightboxActive: false,
        illustrationsLightboxActive: false,
        lightboxIndex: 0
      }
      this.closeIllustrationsLightbox = this.closeIllustrationsLightbox.bind(this)
      this.openIllustrationsLightbox = this.openIllustrationsLightbox.bind(this)
  }

  closeIllustrationsLightbox(){
		this.setState({"illustrationsLightboxActive": false})
	}

	openIllustrationsLightbox(i){
		this.setState({"illustrationsLightboxActive": true, "lightboxIndex": i})
	}

  render() {
    //
        
    return (
      <React.Fragment>
        <div>
          <PageIntro title="SPORTS+EYE" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <MultipleEditorsLetter letter={letter} author="Eve Washington" role="Managing Editor of The Eye" author2="Lizzie Karpen" role2="Sports Editor"/>

            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
        </div>
      </React.Fragment>
      
    );
  }
}

export default SportsEyeContainer;

