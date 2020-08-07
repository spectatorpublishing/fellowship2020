import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import ArticleCarousel from './ArticleCarousel';
// import GenericPanelLayout from './GenericPanelLayout';
import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro';
import EditorLetter from '../components/EditorLetter';

const letter = "Dear readers,\
\n\nWhy should people care about sports at Columbia?\
\n\nThis is a question that I ask myself on an almost daily basis. Very few students come to Morningside Heights because of the athletic culture at Columbia—most athletes do not even come to Columbia for athletics. Most people choose to don the light blue because of the amazing resources, opportunities, and city that (once) sprawled around us.\
\n\nYet as I write this letter from my bedroom downtown, on a campus of a different New York City university, I can’t help but miss the sound of the buzzers at Levien Gymnasium or the feeling of walking down the hill of Baker. Athletics at Columbia has shaped not only the college experiences of the almost 800 athletes but also those of my staff, me, and if you are choosing to read this, you.\
\n\nSports are a unifier: They allow people to come together in teams and communities, entities that are far bigger than the individual. Who are the fans that make up the men’s basketball team’s faithful? Why does the club men’s ice hockey team become a home to many students? We are learning in the midst of a pandemic that has completely halted the world of sports. Despite being challenged more than they ever have before, these groups still prevail.\
\n\nThis year, Sports made it our mission to tell the stories of Columbia’s athletic community and to show why sports at Columbia matter, not only to our Division I athletes but to the greater community as well. Our recaps strived to be more than just the box score; our profiles looked to humanize athletes, coaches, and fans; and our stories reflected the interaction between sports and society. Our pieces looked past just wins and losses to really focus on the impact of both individuals and institutions on the athletic culture as a whole. We asked ourselves many questions: What are the implications of men’s basketball being an uneven team, how does scheduling impact the finances of the league, and what do Columbia Athletics events look like without a marching band? These three distinct parts that make up the fabric of our athletic culture have different effects on different groups but all come back to the same conclusion: Sports are more than just wins and losses.\
\n\nThis past semester has posed a real challenge for us as sports journalists. We may have been unable to create humanizing coverage from the sidelines, but throughout the COVID-19 pandemic, we have found dozens of stories of lost seasons, recoveries, and communities coming together in the midst of crisis. In looking at everything from Leo Pollack’s struggle to once again play baseball to how the esports team raised over $6,000 for coronavirus research to the Ivy League’s decision to not allow senior spring athletes another year of Ivy eligibility, we have shown what it means to have a community on campus, what happens when a pandemic threatens to break that up, and how groups have combated that force.\
\n\nWe hope our coverage convinces you to care about sports at Columbia and gives you a glimpse of the people who make up the greater sports community as they triumph, fail, become greater athletes in the act of trying to achieve what is deemed impossible.\
\n\nWith great pride and love,";

class SportsContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="SPORTS" description={this.props.data.blurb} img_src={this.props.data.img}/>
              
          <EditorLetter letter={letter} author="Lizzie Karpen" role="Sports Editor"/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
           {this.props.data.seasons.map((data, i) =>
              <React.Fragment>
                <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {data.name}</h3>
                <SportsSlideShow key={i} data = {data.items} />
                <ArticleCarousel key={i} data = {data} />
              </React.Fragment>
              )}
          </ScrollingNavBar>
      </React.Fragment>
      
    );
  }
}

export default SportsContainer;
