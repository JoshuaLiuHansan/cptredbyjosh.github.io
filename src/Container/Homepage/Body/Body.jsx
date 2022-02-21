import React, {Component, Fragment} from 'react';
import Header from "../../../Component/Header/Header";
import Profile from "../../../Component/Profile/Profile";
import Background from "../../../Component/Background/Background";

import ComingSoon from '../../../Component/ComingSoon/ComingSoon';

class Body extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Profile />
                <Background />
                {/* <ComingSoon title="Background"></ComingSoon> */}
                <ComingSoon title="@cptredbyjosh"></ComingSoon>
                <ComingSoon title="Projects"></ComingSoon>
            </Fragment>
        );
    }
}

export default Body;