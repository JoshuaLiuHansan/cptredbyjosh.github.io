import React, {Component} from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import Init from '../../Init/Init';
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerImagePath: "self-portrait-no-bg.png",
            footerProfile: [
                {
                    account: [
                        {href: "https://www.instagram.com/cptredbyjosh/", name: "@cptredbyjosh"},
                        {href: "https://www.instagram.com/joshliu1/", name: "@joshliu1"}
                    ],
                    icon: ['fab', 'instagram'],
                    title: "Instagram"
                },
                {
                    account: [
                        {href: "https://www.linkedin.com/in/joshua-liu-hansan-712030196/", name: "Joshua Liu Hansan"}
                    ],
                    icon: ['fab', 'linkedin'],
                    title: "LinkedIn"
                },
            ]
        };

        this.config = Init.config;
    }

    render() {
        let state = this.state;
        let config = this.config;
        let FontAwesomeIcon = Init.FontAwesomeIcon;

        return (
            <footer id="contact" className={
                "contact" 
                + 
                (this.props.show ? '' : ' d-none')
            }>
                <div id="contact-image-container" className="grid-item">
                    <Image src={config.imageFolder + state.footerImagePath} className="contact-image" width={500} />
                </div>
                <div id="contact-title" className="grid-item">
                    <h2>
                        Contact
                    </h2>
                </div>
                <Row id="contact-info" className="grid-item">
                    {
                        state.footerProfile.map( (item, index) => {
                            return (
                                <Col key={index} className="social-media" lg={6}>
                                    <h3> 
                                        <FontAwesomeIcon icon={ item.icon } className="social-media-icon" />
                                        { item.title } 
                                    </h3>
                                    {
                                        item.account.map( (v, k) => {
                                            return (
                                                <a key={k} href={v.href} className='social-media-account'>
                                                    { v.name }
                                                </a>
                                            )
                                        } )
                                    }
                                </Col>
                            );
                        } )
                    }
                </Row>
            </footer>
        );
    }
}

export default Footer;