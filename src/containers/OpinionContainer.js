import React, { Component } from 'react';

import ExpandingColumns from '../components/ExpandingColumns';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'
import PhotoGrid from '../components/PhotoGrid';
import { opinion_sections } from '../util/OpinionData'

const letter = "Throughout this year of immense and varied loss, I have seen both ardent resilience and raw vulnerability reflected on the Opinion pages. Our community was able to keep grief and fear at bay long enough to do something about these tragedies, to thoroughly examine how they have highlighted and exacerbated inequalities, and to try to induce change. I want to express my gratitude to our student, faculty, and community-leader contributors for writing this past year, as I know it could not have been easy at times. I sincerely hope that the issues and solutions you have debated are continuously reexamined, even in more peaceful times.\
\n\nStay safe, everyone. I hope to see you all again soon,"


export default class OpinionContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="OPINION" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <EditorLetter letter={letter} author="Tamarah Wallace" role="Editorial Page Editor"/>

          <ExpandingColumns data = {opinion_sections}/>
          <ScrollingNavBar menuItems={opinion_sections}>
            <div>
              <GenericPanelLayout data={this.props.data.items[0]} />
            </div>
            {/* <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div> */}
            <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div>
            <div>
              <div style={{"height":"5vh"}}></div>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>Columns</h3>
              <PhotoGrid data={this.props.data.items[2].items} flip />
            </div>
          </ScrollingNavBar>
      </React.Fragment>
    );
  }
}
