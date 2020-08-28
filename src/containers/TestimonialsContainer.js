import React, { Component } from 'react';

import GenericTestimonial from './GenericTestimonial';
import PageIntro from '../components/PageIntro'

class TestimonialsContainer extends Component {
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

  closeIllustrationsLightbox() {
    this.setState({ "illustrationsLightboxActive": false })
  }

  openIllustrationsLightbox(i) {
    this.setState({ "illustrationsLightboxActive": true, "lightboxIndex": i })
  }

  render() {
    //

    return (
      <React.Fragment>
        <div>
          <PageIntro isIllo={true} title="TESTIMONIALS" description={this.props.data.blurb} img_src={this.props.data.img} />

          {this.props.data.items.map((data, i) =>
            <GenericTestimonial key={i} data={this.props.data.items[i]} />)}
        </div>
      </React.Fragment>

    );
  }
}

export default TestimonialsContainer;

