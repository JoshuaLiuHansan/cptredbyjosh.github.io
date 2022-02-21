import React, {Component} from 'react';
import Init from "../../Init/Init";
import {Image} from 'react-bootstrap';
import './Background.scss';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionContent: [
                {
                    title: "Proficiency",
                    list: [
                        "Photography",
                        "Videography",
                        "Digital Marketing",
                        "Copywriter",
                        "Content Creator",
                        "Kol & SEO Management"
                    ]
                },
                {
                    title: "Speaking Languages",
                    list: [
                        "Indonesia",
                        "English"
                    ]
                }
            ],
            backgroundImgPath: [
                "photo12.jpeg",
                "photo14.jpeg"
            ]
        };

        this.config = Init.config;
    }

    render() {
        let config = this.config;
        let state = this.state;

        return (
            <div id="background" className="background">
                <div className="background-cover">
                </div>
                <div className="background-images">
                    <Image className="background-image" src={config.imageFolder + state.backgroundImgPath[0]} />
                </div>
                <div className="background-description">
                    {
                        state.sectionContent.map( (item, index) => {
                            return (
                                <div className="background-description-section" key={index}>
                                    <h2 className="background-description-section-title"> {item.title} </h2>
                                    <ul className='background-description-section-list'>
                                        {
                                            item.list.map( (v, k) => {
                                                return <li key={k}> { v } </li>
                                            } )
                                        }
                                    </ul>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className="background-images">
                    <Image className="background-image" src={config.imageFolder + state.backgroundImgPath[1]} />
                </div>
            </div>
        );
    }
}

export default Background;