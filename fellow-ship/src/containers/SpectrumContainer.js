import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import SpectrumLayout from './SpectrumLayout';
import SpectrumTitle from '../components/SpectrumTitle'
import EditorLetter from '../components/EditorLetter';

const letter = "On Sundays at 6:45 p.m., the Spectrum team starts our week in a small room of Riverside Church by pitching ideas for what we predict the Columbia community needs to know about what’s happening on and around campus. Our articles capture snapshots of our shared narratives, with the goal of informing your experience at Columbia and in New York City. From mapping out the party scene on campus to interviewing the Center for Career Education and Beyond Barnard about finding the perfect internship to our guide on the different political clubs and quiz about whom your CU Valentine should be, we want our content to be reflective of the Columbia community and its needs.\
\n\nWhile navigating this University gets easier as the years go on, we know there is neither a perfect way to do college nor a way to predict what the experience will truly entail, which is what this semester has definitely shown us. However, what we can do is find solace in the stories we share: the hours we spend (or don’t) in Butler Library, the performances we cheer on in Lerner Hall, the tears we shed over friendship in our first-year dorms, and the rays of sunlight we scramble to absorb on Low Steps when the temperature rises above 70 degrees. This is the spectrum of experiences that we accumulate at our University.\
\n\nEven as COVID-19 has disrupted our spectrum, we hope to have played a role in providing comfort and resources to help you cope with the new uncertainties in your lives. Though we finish up the school year without the familiar scenes of cherry blossoms, we hope that you have been able to open our articles and find a semblance of normality, community, and support.\
\n\nHere’s to our time at 116th and Broadway,"
class SpectrumContainer extends Component {
 
  render() { 
    return (
      <div>
          <SpectrumTitle title="SPECTRUM" description={this.props.data.blurb}/>
          <EditorLetter letter={letter} author="Jazilah Salam" role="Deputy Spectrum Editor"/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <SpectrumLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </div>
    );
  }
}

export default SpectrumContainer;
