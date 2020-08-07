import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

let ParagraphBr = styled.br`
  /* line-height: 22px; */
`

let Paragraph = styled.p`
  /* line-height: 22px; */
`

let A = styled.a`
  color: ${props => props.theme.white};
  text-decoration-color: ${props => props.theme.blue};

  &:hover {
    color: ${props => props.theme.blue};
  }
  &:focus {
    color: ${props => props.theme.blue};
  }
  &:active {
    color: ${props => props.theme.blue};
  }
`

const letterFromTheEditor = <React.Fragment>
  <Paragraph>
  Dear readers,
  </Paragraph>
  <ParagraphBr />
  <Paragraph>
  It goes without saying that this academic year has been anything but normal. This past year began like any other, but throughout our two semesters, we experienced a flurry of loss, change, and adaptation. The Eye’s has documented how as a community we navigate these changing times. I, for one, am incredibly proud of how our work has shined a light on all aspects of life on- and off-campus. 
  </Paragraph>
  <ParagraphBr />
  As a staff, we assumed many different roles. As we exist in the community, we discussed how various <A href="https://www.columbiaspectator.com/the-eye/2019/12/06/the-local-food-landscape-is-changing-what-does-columbia-bring-to-the-table/" target="_blank">local restaurants</A> deal with gentrification and how <A href="https://www.columbiaspectator.com/the-eye/2020/03/04/the-motto-specializing-in-saving-lives-means-more-to-youth-than-one-might-expect/" target="_blank">youth programs</A> provide resources for kids.
  <ParagraphBr />
  <Paragraph>
  As archivists, we looked at the history of <A href="https://www.columbiaspectator.com/the-eye/2019/11/20/women-bard-from-entry/" target="_blank">co-education</A> at Columbia and how the University has responded to <A href="https://www.columbiaspectator.com/the-eye/2020/05/12/two-murders-47-years-apart/" target="_blank">violent crime</A>.
  </Paragraph>
  <ParagraphBr />
  <Paragraph>
  As students, we reflected on those major moments that will stay in our memories: <A href="http://columbiaspectator.com/eye/issue/XXVIII/4/" target="_blank">moving out</A> in March, <A href="https://www.columbiaspectator.com/the-eye/2020/03/30/bring-your-own-diploma/" target="_blank">DIY graduation</A>, and the start of a <A href="https://www.columbiaspectator.com/the-eye/2020/02/11/happy-future-something/" target="_blank">decade</A>.
  </Paragraph>
  <ParagraphBr />
  <Paragraph>
  We also remembered mundane experiences that we take for granted: watching <A href="https://www.columbiaspectator.com/the-eye/2019/10/07/on-grief-and-lady-bird/" target="_blank">loss</A>, <A href="https://www.columbiaspectator.com/the-eye/2019/10/30/how-do-you-clap-back-at-a-middle-aged-family-member-who-posts-hate-about-you-on-instagram/" target="_blank">hate</A>, and <A href="https://www.columbiaspectator.com/the-eye/2019/10/24/how-his-diagnosis-made-me-less-codependent/" target="_blank">love</A>.
  </Paragraph>
  <ParagraphBr />
  <Paragraph>
  Together, we highlighted some brilliant and determined people from a <A href="https://www.columbiaspectator.com/the-eye/2020/03/05/the-woman-at-the-center-of-the-photograph/" target="_blank">historical figure</A> to <A href="https://www.columbiaspectator.com/the-eye/2019/11/26/think-globally-act-locally-luis-velasquez-on-winning-a-national-medal-and-youth-in-politics/" target="_blank">students</A> making waves in <A href="https://www.columbiaspectator.com/the-eye/2019/11/18/leaving-the-playground-after-running-a-presidential-campaign-henry-williams-isnt-done-with-national-politics/" target="_blank">politics</A>, an <A href="https://www.columbiaspectator.com/the-eye/2019/10/29/len-elmore-accidental-athlete-quiet-activist/" target="_blank">astronaut</A>, an <A href="https://www.columbiaspectator.com/the-eye/2019/10/24/how-his-diagnosis-made-me-less-codependent/" target="_blank">activist</A>, and <A href="https://www.columbiaspectator.com/the-eye/2019/10/31/michael-rosenthal-carrying-columbias-culture-from-one-generation-to-the-next/" target="_blank">someone</A> whose entire career has been surrounded by University milestones. We also paid attention to those who are often overlooked: <A href="https://www.columbiaspectator.com/the-eye/2019/10/02/columbia-has-more-veteran-students-than-the-rest-of-the-ivy-league-combined-but-how-are-women-vets-getting-in-the-door/" target="_blank">female veterans</A>, homeless <A href="https://www.columbiaspectator.com/the-eye/2019/10/04/brilliant-and-proud-inside-the-student-program-providing-support-to-lgbtq-homeless-youth/" target="_blank">youth</A>, students with <A href="https://www.columbiaspectator.com/the-eye/2019/10/11/accommodated-but-unsupported-without-centralized-advocacy-network-students-with-disabilities-continue-to-face-stigma/" target="_blank">disabilities</A>, and justice-involved <A href="https://www.columbiaspectator.com/eye-lead/2019/12/07/in-the-midst-of-a-national-debate-over-the-box-student-and-university-initiatives-push-for-higher-ed-accessibility-for-justice-involved-individuals/" target="_blank">individuals</A>. 
  </Paragraph>
  <ParagraphBr />
  <Paragraph>
  We conducted large investigations: Why do students and faculty turn away from the Office of Equal Opportunity and Affirmative Action’s <A href="https://www.columbiaspectator.com/eye-lead/2019/11/15/students-and-faculty-say-gender-based-harassment-and-discrimination-at-columbia-is-systemic-why-are-they-turning-away-from-the-system-built-to-address-it/" target="_blank">system</A> for dealing with gender-based harassment and discrimination? Is Columbia’s <A href="https://www.columbiaspectator.com/eye-lead/2019/10/23/is-columbias-department-system-ready-to-evolve/" target="_blank">department</A> system ready to evolve? What does Union Theological Seminary selling its <A href="https://www.columbiaspectator.com/eye-lead/2019/11/26/in-2015-union-theological-seminary-announced-it-would-sell-its-air-rights-students-feel-it-sold-its-values-too/" target="_blank">air-rights</A> mean for its values?
  </Paragraph>
  <ParagraphBr />
  <Paragraph>
  As we watch, along with the rest of the world, what the long road to recovery will look like, let's take time to reflect on what we want our campus and community to feel like when we return. Our content can be used as a starting point in imagining the future. Take care of yourself, stay safe, and wash your hands.
  </Paragraph>
  <ParagraphBr />
  Yours,
  </React.Fragment>


class EyeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <PageIntro title="THE EYE" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <EditorLetter letter={letterFromTheEditor} author="Eve Washington" role="Managing Editor of The Eye"/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default EyeContainer;
