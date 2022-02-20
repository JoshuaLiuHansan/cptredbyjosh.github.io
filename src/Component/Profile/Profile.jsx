import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import './Profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: {
                title: "Profile",
                name: "Joshua Liu Hansan",
                study: "Marketing Communication"
            },
            right: {
                profileImgPath: [
                    "project-photo1.jpeg",
                    "photo1.jpeg"
                ]
            },
            config: {
                imageFolder: "/assets/images/"
            }
        }
    }

    render() {
        let state = this.state;
        let leftContent = state.left;
        let rightContent = state.right;

        return (
            <Row id="profile" className="profile">
                <Col sm={3} className="profile-left-side">
                    <h2> { leftContent.title } </h2>
                    <h2> { leftContent.name } </h2>
                    <h4> { leftContent.study } </h4>
                </Col>
                <Col sm={9} className="profile-right-side">
                    <div className="profile-description">
                        <div id="first">
                            <Image src={state.config.imageFolder + rightContent.profileImgPath[0]} />
                        </div>
                        <div id="second">
                            <Image src={state.config.imageFolder + rightContent.profileImgPath[1]} />
                        </div>
                        <div id="third" className="profile-text">
                            I'm a fresh graduate of Bachelor of Marketing
                            Communication. Currently working as a freelance
                            photographer. I have an outstanding passion and
                            skills for Marketing and Communication industry, as
                            well as able to create innovative solutions to keep
                            your customer committed to your brand
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Profile;