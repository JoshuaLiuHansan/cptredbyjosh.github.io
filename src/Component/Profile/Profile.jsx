import React, {Component, Fragment} from 'react';
import Init from "../../Init/Init";
import {Col, Image} from 'react-bootstrap';
import './Profile.scss';

import ProfileDetail from "./ProfileDetail/ProfileDetail";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: {
                title: "Profile"
            },
            right: {
                profileImgPath: [
                    "photo11.jpeg",
                    "photo1.jpeg"
                ],
                description: `I'm a fresh graduate of Bachelor of Marketing
                Communication. Currently working as a freelance
                photographer. I have an outstanding passion and
                skills for Marketing and Communication industry, as
                well as able to create innovative solutions to keep
                your customer committed to your brand.`
            }
        };

        this.config = Init.config;
    }

    render() {
        let state = this.state;
        let config = this.config;
        let leftContent = state.left;
        let rightContent = state.right;

        return (
            <Fragment>
                <div id="profile" className="profile">
                    <Col md={3} className="profile-left-side">
                        <h2> { leftContent.title } </h2>
                    </Col>
                    <Col md={9} className="profile-right-side">
                        <div className="profile-description">
                            <div id="first">
                                <Image src={config.imageFolder + rightContent.profileImgPath[0]} />
                            </div>
                            <div id="second">
                                <Image src={config.imageFolder + rightContent.profileImgPath[1]} />
                            </div>
                            <div id="third" className="profile-text">
                                <span>
                                    { rightContent.description }
                                </span>
                            </div>
                        </div>
                    </Col>
                </div>
                <ProfileDetail />
            </Fragment>
        );
    }
}

export default Profile;