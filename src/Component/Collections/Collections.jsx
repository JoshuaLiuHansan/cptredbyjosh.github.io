import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import Init from '../../Init/Init';
import './Collections.scss';

class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: [
                "photo10.jpeg",
                "photo14.jpeg",
                "photo4.jpeg",
                "photo3.jpeg",
                "photo15.jpeg",
                "photo5.jpeg",
            ]
        }

        this.config = Init.config;
    }

    render() {
        let state = this.state;
        let config = this.config;

        return (
            <div className="collections">
                <div className="collection-cover"></div>

                <div className="collection-title collection-grid">
                    <h2>
                        Collections
                    </h2>
                </div>

                {
                    state.imagePath.map( (item, index) => {
                        return (
                            <div key={index} className="collection-image collection-grid" id={"collection-" + (index + 1)}>
                                <Image src={config.imageFolder + item} />
                            </div>
                        )
                    } )
                }
            </div>
        );
    }
}

export default Collections;