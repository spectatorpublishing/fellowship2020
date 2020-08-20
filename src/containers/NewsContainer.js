import React, { Component } from 'react';

import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import MultipleEditorsLetter from '../components/MultipleEditorsLetter';

const letter = "Reporting for college newspapers places journalists in a position unlike any other professional setting. These fellows have had to ask themselves the same questions that reporters ask each other.\
\n\nWhile Columbia draws students from a diverse range of backgrounds and perspectives, we are all members of an institution whose historical and economic prominence in its surrounding community has lent itself to consequential decision-making. Alongside Spectator reporters, the fellows have had to think deeply about their role as Columbia students before even stepping foot on campus. Despite our expectations of what constitutes the “normal” American college experience—shaped by pictures in vintage yearbooks and Instagram posts—our experiences as students at Columbia are by no means customary. While our society and culture have led us to believe that the experiences we have are universal, the majority of the country’s high school graduates never attend a four-year institution, and even those who do are not ensured a residential experience.\
\n\nJust when we thought that the college memories we were planning to make were guaranteed, the pandemic forced us to reevaluate our expectations and examine our privilege. Moreover, Morningside Heights’ urban landscape forces the realization that our experiences as students do not exist in isolation. The surrounding communities of color, especially the Black and Latinx communities, continue to suffer from the legacy of Columbia’s property rights and history of gentrification, which have led to segregational practices that limit economic mobility, housing security, and healthcare access.\
\n\nThe news fellows have spoken to leading experts, biked across New York City, and used their analytical skills to point them to issues that would otherwise not be addressed. We have seen these reporters seek collaborations with our graphics and illustrations teams—a testament to the fact that a news journalist cannot exist in a vacuum of the newsroom. Our fellows have shown that they know how to produce content that reaches and engages our audience.\
\n\nWe are incredibly grateful for the opportunity to use Spectator’s outreach to showcase their work. Everything they have done has clearly manifested out of care for communities inside and outside Columbia.";

class NewsContainer extends Component {
  constructor() {
      super()
      this.state = {
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
        
    return (
      <React.Fragment>
        <div>
          <PageIntro title="NEWS" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <MultipleEditorsLetter letter={letter} author="Valeria Escobar and Stephanie Lai" role="News Editors"/>

            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
        </div>
      </React.Fragment>
      
    );
  }
}

export default NewsContainer;

