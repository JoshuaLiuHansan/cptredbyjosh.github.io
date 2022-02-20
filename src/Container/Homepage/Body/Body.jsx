import React, {Component, Fragment} from 'react';
import Target from '../../../Component/Target/Target';
import Varieties from '../../../Component/Varieties/Varieties';

class Body extends Component {
    render() {
        return (
            <Fragment>
                <Target />
                <Varieties />
            </Fragment>
        );
    }
}

export default Body;