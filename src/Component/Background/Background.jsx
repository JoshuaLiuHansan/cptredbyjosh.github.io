import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Background.scss';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let isReversed = this.props.isReversed ? " flex-row-reversed" : " flex-row";
        let props = this.props.backgroundContent;
        let titleContent = props.titleContent;
        let infoContent = props.infoContent;

        return (
            <div id="background" className={ "background" + isReversed}>
                <Col md={3} className="background-title">
                    <h2> { titleContent.title } </h2>
                </Col>
                <Col md={9} className="background-info">
                    <Row className="background-description">
                        {
                            infoContent.exp.map( (item, index) => {
                                let length = infoContent.exp.length;
                                let colWidth = Math.floor(12/length);

                                return (
                                    <Col key={ index } md={colWidth} className="background-items">
                                        <h3 className="item-title"> {item.title} </h3>
                                        <ul className='item-list'>
                                            {
                                                item.list.map( (value, key) => {
                                                    return (
                                                        <li key={key}>
                                                            <h4 className="item-list-title"> { value.title } </h4>
                                                            <span className='item-list-time-range'> { value.time } </span>
                                                            <ul className='item-list-list'>
                                                                {
                                                                    value.list.map( (v, k) => {
                                                                        return (
                                                                            <li key={k}> { v } </li>
                                                                        )
                                                                    } )
                                                                }
                                                            </ul>
                                                        </li>
                                                    )
                                                } )
                                            }
                                        </ul>

                                    </Col>
                                )
                            } )
                        }
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Background;