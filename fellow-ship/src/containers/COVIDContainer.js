import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import EditorLetter from '../components/EditorLetter';

const letter = "Dear readers,\
\n\nIt’s been quite an eventful year—one that feels like a decade, given the severity of recent events. This year has been one of many firsts, and Copy has been working tirelessly to make sure our content has been accessible, eloquent, and truthful.\
\n\nThis semester, the coronavirus pandemic has presented extraordinary challenges to the Columbia community and the rest of the world. Copy has been following the guidance of the Centers for Disease Control and Prevention to ensure that the Spectator refrains from publishing factual inaccuracies. Even something as seemingly simple as using the right terminology—classifying the outbreak as a pandemic, referring to COVID-19 as a disease, and knowing social distancing from self-isolation—is important to stop the spread of misinformation.\
\n\nThis diligence to the truth extends beyond just our coronavirus coverage. After the Spectator office closed for finals last semester, Copy scoured the Internet, police reports, and source emails to make sure that our coverage of the loss of Barnard first-year Tessa Majors was accurate and empathetic. While other news outlets were publishing factual inaccuracies and inconsistencies about the time of death and series of events, uncorroborated speculations about what happened in Morningside Park, and smear pieces on the perpetrators and the victim in their attempts to break news, Spectator refused to trade facts for sensationalism.\
\n\nIn our continuing obligation to respect the communities we serve and represent their voices, we recently updated our style guide. Going against the AP Stylebook but following the lead of our Black Students’ Organization in an op-ed it published this January, the Spectator now capitalizes Black in all references to a culture, ethnicity, or group of people.\
\n\nAt Copy, it is our greatest wish to continue to grow, to learn, to empathize, to listen, and thereafter, to act. We understand that the language we use has the power to influence popular thought on particular issues and groups of people, and we will continue to update our terminology and style guide to be respectful of all and to evolve in these ever-evolving times.\
\n\nPlease stay safe. I would say “see you in the fall,” but I aim for accuracy; you’ll be seeing us.\
\n\nBest wishes,";

class CovidContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <PageIntro title="COVID-19" description={this.props.data.blurb} img_src={this.props.data.img}/>
                <EditorLetter letter={letter} author="Sarah Braka" role="Head Copy Editor"/>
                <ScrollingNavBar menuItems={this.props.data.sections}>
                    {this.props.data.items.map((data, i) => 
                        <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
                </ScrollingNavBar>
            </React.Fragment>
        );
    }
}

export default CovidContainer;