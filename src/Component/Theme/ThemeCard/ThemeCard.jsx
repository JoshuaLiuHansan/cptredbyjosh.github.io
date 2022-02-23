import React from "react";
import {Image} from 'react-bootstrap';
import './ThemeCard.scss';

const ThemeCard = (props) => {
    let metadata = props.metadata;
    let isWrapped = metadata.innerWidth < 1000 ? " element-card-mini" : "";

    return (
        <div className={"element-card" + isWrapped}>
            <div className="element-image">
                <Image src={props.imagePath} />
                <div className="element-explanation">
                    <h4 className="explanation-title">
                        { props.title }
                    </h4>
                    <div className="explanation-text">
                        { props.description }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThemeCard;