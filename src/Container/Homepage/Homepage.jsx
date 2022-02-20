import React, {Component} from 'react';
import Header from '../../Component/Header/Header';
import Body from './Body/Body';
import './Homepage.scss';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bigScreen: window.innerWidth > 960
        }
    }

    componentDidMount() {
        let state = this;
        
        window.addEventListener('resize', function(event){
            state.bigScreen = this.innerWidth > 960;

            state.setState(state);
        });
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', function(){});
    }

    render() {
        return (
            <div className="homepage">
                <Header bigScreen={this.state.bigScreen}/>
                <Body />
            </div>
        );
    }
}

export default Homepage;