import React from 'react';
import {Image} from 'react-bootstrap';
import Init from "../../Init/Init";
import './Photography.scss';

const Photography = (props) => {
    let content = props.content;
    let config = Init.config;

    let metadata = props.metadata;
    let isAbsolute = metadata.innerWidth > 1000 ? "absolute" : "";
    
    return (
        <div id="cptredbyjosh" className="photography">
            <div className="photography-media">
                <div className={"photography-feeds " + isAbsolute}>
                    {
                        content.imagePath.map( (item, index) => {
                            return (
                                <div key={index} className="photography-feed">
                                    <Image src={config.imageFolder + item.fileName}/>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
            <div className="photography-explanation">
                { content.description }
            </div>
        </div>
    );
}

export default Photography;