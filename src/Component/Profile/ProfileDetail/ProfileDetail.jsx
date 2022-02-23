import React, {Component} from 'react';
import Init from "../../../Init/Init";
import {Image} from 'react-bootstrap';
import './ProfileDetail.scss';

class ProfileDetail extends Component {
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
            profileDetailImgPath: [
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
            <div id="profile-detail" className="profile-detail">
                <div className="profile-detail-cover">
                </div>
                <div className="profile-detail-images">
                    <Image className="profile-detail-image" src={config.imageFolder + state.profileDetailImgPath[0]} />
                </div>
                <div className="profile-detail-description">
                    {
                        state.sectionContent.map( (item, index) => {
                            return (
                                <div className="profile-detail-description-section" key={index}>
                                    <h2 className="profile-detail-description-section-title"> {item.title} </h2>
                                    <ul className='profile-detail-description-section-list'>
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
                <div className="profile-detail-images">
                    <Image className="profile-detail-image" src={config.imageFolder + state.profileDetailImgPath[1]} />
                </div>
            </div>
        );
    }
}

export default ProfileDetail;