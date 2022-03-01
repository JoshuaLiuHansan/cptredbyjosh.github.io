import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Background.scss';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.metadata = props.metadata
    }

    render() {
        let isReversed = this.props.isReversed;
        let props = this.props;
        let ChildComponent = props.childComponent;
        let backgroundContent = props.backgroundContent;
        let titleContent = backgroundContent.titleContent;
        let infoContent = backgroundContent.infoContent;

        let metadata = this.metadata;
        let innerWidth = metadata.innerWidth;
        

        return (
            <div id={backgroundContent.id} className={ "background" + (isReversed ? " flex-row-reversed" : " flex-row")}>
                <Col md={4} className={"background-title" + (isReversed || innerWidth < 1100 ? "" : " align-items-center")}>
                    <h2> { titleContent.title } </h2>
                </Col>
                <Col md={8} className="background-info">
                    <Row className="background-description">
                        <ChildComponent content={infoContent} metadata={metadata} />
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Background;