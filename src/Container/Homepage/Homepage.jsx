import React, {Component} from 'react';
import Body from './Body/Body';
import './Homepage.scss';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // let state = this;
        
        window.addEventListener('resize', function(event){});
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', function(){});
    }

    render() {
        return (
            <div className="homepage">
                <Body />
            </div>
        );
    }
}

export default Homepage;