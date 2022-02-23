import React, {Component, Fragment} from 'react';

import Header from "../../../Component/Header/Header";
import Profile from "../../../Component/Profile/Profile";
import Background from "../../../Component/Background/Background";

// Child Component of Background
import Experience from "../../../Component/Experience/Experience";
import Photography from '../../../Component/Photography/Photography';

// Coming Soon Section
import ComingSoon from '../../../Component/ComingSoon/ComingSoon';

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundContent: [
                {
                    id: "background",
                    titleContent: {
                        title: "Educational & Organizational Experience"
                    },
                    infoContent: {
                        exp: [
                            {
                                title: "Educational Background",
                                list: [
                                    {
                                        title: "Universitas Bunda Mulia",
                                        time: "2017 - 2021",
                                        list: [
                                            "Graduated with GPA 3.14/4",
                                            "Bachelor Thesis: Strategi Komunikasi Pemasaran Penjualan Serum Tanaman ARA Indonesia Melalui Media Sosial Instagram; Doing a analytical research about 'how' to communicate brands with customer."
                                        ] 
                                    }
                                ]
                            },
                            {
                                title: "Organizational Experience",
                                list: [
                                    {
                                        title: "Click Photography",
                                        time: "September 2017 - May 2018",
                                        list: [
                                            "Basic Photography",
                                            "Exposure Triangle",
                                            "Photography Hunting"
                                        ] 
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    id: "background",
                    titleContent: {
                        title: "Working Experience"
                    },
                    infoContent: {
                        exp: [
                            {
                                title: "",
                                list: [
                                    {
                                        title: "Marketing & Social Media Intern at PT INOVASI NATURAL BIO ORGANIK",
                                        time: "August 2020- November 2020",
                                        list: [
                                            "Did series of research towards market trends and demands in agriculture, to be processed of becoming social media content and product.",
                                            "Managing KOL to always in peak of performance."
                                        ] 
                                    },
                                    {
                                        title: "Frontliner Team at DEBINDO Expo (Indobuildtech)",
                                        time: "May 2018",
                                        list: [
                                            "Act as first point of contact during the biggest exhibition show of building and construction materials.",
                                            "Assisting visitor with registration and exhibition areas"
                                        ] 
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    id: "cptredbyjosh",
                    titleContent: {
                        title: "@cptredbyjosh"
                    },
                    infoContent: {
                        imagePath: [
                            {
                                fileName: "ig-feeds1-mini.jpeg",
                                width: 320
                            },
                            {
                                fileName: "ig-feeds2.jpeg",
                                width: 280
                            },
                        ],
                        description: "CPTREDBYJOSH is a platform that creates memories inspired by emotion and circumstances expressed through photography. CPTREDBYJOSH is built around three fundamental elements: human, panoramas, and time."
                    }
                }
            ]
        };
    }

    render() {
        let backgroundContent = this.state.backgroundContent;

        return (
            <Fragment>
                <Header />
                <Profile />
                <Background childComponent={Experience} backgroundContent={backgroundContent[0]} isReversed={true} />
                <Background childComponent={Experience} backgroundContent={backgroundContent[1]} isReversed={false} />
                <Background childComponent={Photography} backgroundContent={backgroundContent[2]} isReversed={true} />
                {/* <ComingSoon title="@cptredbyjosh"></ComingSoon> */}
                <ComingSoon title="Projects"></ComingSoon>
            </Fragment>
        );
    }
}

export default Body;