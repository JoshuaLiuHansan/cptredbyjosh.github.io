import React from 'react';
import {Col} from 'react-bootstrap';
import './Experience.scss';

const Experience = (props) => {
    let infoContent = props.content;

    return infoContent.exp.map( (item, index) => {
        let length = infoContent.exp.length;
        let colWidth = Math.floor(12/length);

        return (
            <Col key={ index } md={colWidth} className="experience-items">
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
    } );
}

export default Experience;