import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router'
import { ThemeProvider } from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import { GlobalStyles, Theme } from "./util/GlobalStyles";

import HomeContainer from './containers/HomeContainer'
import NewsContainer from './containers/NewsContainer'
import OpinionContainer from './containers/OpinionContainer'
import GraphicsContainer from './containers/GraphicsContainer'
import SportsEyeContainer from './containers/SportsEyeContainer'
import IllustrationsContainer from './containers/IllustrationsContainer'
import TestimonialsContainer from './containers/TestimonialsContainer'
//import your container page here!

import NavBar from './components/Navigation/NavBar' 
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'

import data from './util/GlobalArticleData'
import { NavItems, NavItemsWithHome } from "./util/NavItems";

import PreloadProvider, { PreloadContext } from "./util/Preload"

class App extends Component {

  render() {
    const home = () => <HomeContainer /> 
    const news = () => <NewsContainer data = {data.News} />
    const opinion = () => <OpinionContainer data={data.Opinion}/>
    const graphics = () => <GraphicsContainer data = {data.Graphics} />
    const illo = () => <IllustrationsContainer data = {data.Illustrations} />
    const sportseye = () => <SportsEyeContainer data = {data.SportsEye} />
    const testimonials = () => <TestimonialsContainer data = {data.Testimonials} />
    //give your container data here! where is this data contained?


    return (
      <PreloadProvider>
        <PreloadContext.Consumer>
          {
            context => {
              context(...["https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JW6DJYNU7ZDBRFWIZTN63PEOFQ.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/P7DW6KY22FFTXMCVW775DECW4I.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VJUOERXVV5ECNHIPYC2PA7MP6U.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2BJ7JBTK6VCE7OX26ZXSWP7CYI.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OVEYVGU2JBCLNJQ3SOR2W7PATA.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RFQU6XEJLRDKXA5ZHNWG276K7A.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/Y626ZB4HTVBAZFURTW5VW5KB3Q.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/B6RNHORFG5GPTOPN36RGGQU3SU.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LXE2HLEOIFBNVOEB7SKMXOLGEY.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/E266HXM2OVEOFGPPS3JDGUY6JU.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SOYHFVU2TBENXCNOASVNCAOJMU.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DBL3MWCR5VFAVJH25TO2VN3JQM.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PJOCD2HXBRAEJI6QIUG7SHOQFU.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WOKJFWLTZNE3DAF426QEQN2BZU.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KXOOUJZAVVHHZDDKUP22NVN4UY.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AO7BPB5J75AM3GVWOJRUJ26DT4.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VXZYC2UM7NBCFH354JCJQGW3KA.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/Q6WUSCDQSNEU5BJFUSQRTDAYLQ.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/NFETIQTJ2ZBZDCTWUAMKOCWK7Q.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/REJGFYENKNESTKPXP4WE7XMK2I.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/5KWTRHEBMRGW7GA4QACPCKV7ZU.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BDAGE66MXJBJXIDBL74BD735EI.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6JAB6MB7PRFR3NMX3UMLPY3DNE.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EUGNH3QL6RBN7OGD73TLWLUXRY.jpg", "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7EG54IJEM5BQLLBEMC5F3JEWUE.jpg"])
              return <ThemeProvider theme={Theme}>
                <main>
                  <GlobalStyles />
                    <React.Fragment>
                      <Desktop>
                        {this.props.location.pathname === "/2020-year-review" ?
                          <NavBar menuItems={NavItems} transparent hideCrown/>
                        :
                          <NavBar menuItems={NavItems} />
                        }
                      </Desktop>
                      <MobileAndTablet>
                         {this.props.location.pathname === "/spectrum"
                          ? <NavBar menuItems={NavItemsWithHome}/> 
                          : <NavBar menuItems={NavItemsWithHome} transparent/>
                        } 
                      </MobileAndTablet>
                      <Switch onUpdate={() => console.log("update")} >
                        <Route exact path="/" component={home} />
                        <Route exact path="/news" component={news} />
                        <Route exact path="/opinion" component={opinion} />
                        <Route exact path="/graphics" component={graphics} />
                        <Route exact path="/illustrations" component={illo} />
                        <Route exact path="/sports-eye" component={sportseye} />
                        <Route exact path="/testimonials" component={testimonials} />
                        {/* give your page a route and something to render (from above!) */}


                        {/* <Route exact path="/design" component={design} /> */}
                        
                      </Switch>
                      <Footer />
                      <ScrollArrow />
                    </React.Fragment>
                </main>
              </ThemeProvider>
            }
          }
        </PreloadContext.Consumer>
      </PreloadProvider>
    );
  }
}

export default withRouter(App);


