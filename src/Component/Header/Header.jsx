import React, {Component} from 'react';
import Init from '../../Init/Init';
import {Image} from 'react-bootstrap';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerImgPath: "/assets/profpics/profile-picture.jpeg"
        }
    }

    render() {
        let state = this.state;
        let FontAwesomeIcon = Init.FontAwesomeIcon;

        return (
            <div id="header" className="header">
                <div className="header-cover">
                    
                </div>
                <div className="header-background">
                    <h1 className="header-title">
                        Joshua Liu Hansan
                    </h1>
                    <div className="header-image absolute">
                        <Image src={state.headerImgPath} fluid />
                    </div>
                    <FontAwesomeIcon icon={['fas', 'camera']} className="header-icon" />
                </div>
            </div>
        );
    }
}

export default Header;