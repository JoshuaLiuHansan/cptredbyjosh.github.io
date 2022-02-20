import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Navbar.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            { ...route.hasOwnProperty('exact') && route.exact ? 'exact' : '' }
            path={route.path}
            render={
                props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                )
            }
        />
    );
}

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: {
                logo: "/assets/logo/logo.jpeg",
                size: 30
            }
        }
    }

    componentDidMount() {
        // let state = this;
    }

    getCurrentPath = (path) => {
        let state = this.state;

        this.setState(state);
        this.props.onChoose(path);
    }

    componentWillUnmount() {
        //
    }

    render() {
        let state = this.state;

        return (
            <Router>
                <Navbar expand="lg" variant="dark" className='rednavi-bg-dark'>
                    <Link to="/" className="navbar-brand" onClick={() => this.getCurrentPath("/")}>
                        <img src={state.brand.logo} alt="Rednavi" width={state.brand.size} />
                    </Link>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="">
                            {
                                this.props.navList.map( (item, index) => {
                                    let navLinks = "";
                                    
                                    if( item.visibility ) navLinks = (
                                        <NavLink key={index} 
                                                to={item.path} 
                                                activeClassName="active" 
                                                className="nav-link mx-2" 
                                                onClick={() => this.getCurrentPath(item.path)}> {item.name} </NavLink>
                                    );

                                    return navLinks;
                                } )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* Render the first matched path */}
                <Switch>
                    {
                        this.props.navList.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))
                    }
                </Switch>
            </Router>
        );
    }
}

export default NavigationBar;