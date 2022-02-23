import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Background.scss';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.metadata = {
            innerWidth: 0
        }
    }

    render() {
        let isReversed = this.props.isReversed ? " flex-row-reversed" : " flex-row";
        let props = this.props;
        let ChildComponent = props.childComponent;
        let backgroundContent = props.backgroundContent;
        let titleContent = backgroundContent.titleContent;
        let infoContent = backgroundContent.infoContent;

        this.metadata.innerWidth = window.innerWidth;

        let metadata = this.metadata;

        return (
            <div id={backgroundContent.id} className={ "background" + isReversed}>
                <Col md={3} className="background-title">
                    <h2> { titleContent.title } </h2>
                </Col>
                <Col md={9} className="background-info">
                    <Row className="background-description">
                        <ChildComponent content={infoContent} metadata={metadata} />
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Background;