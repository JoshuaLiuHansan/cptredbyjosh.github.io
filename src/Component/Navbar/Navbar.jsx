import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Navbar.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

const RouteWithSubRoutes = (route) => {
    if( !(route.hasOwnProperty('component') && route.component) ) return '';

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
                logo: "",
                size: 0
            }
        }
    }

    getCurrentPath = (path) => {
        let state = this.state;
        let distance = null;

        if(path !== "") {
            distance = document.getElementById(path.replace("#", "")).offsetTop - 20;
        }

        if(distance != null) {
            window.scroll({
                top: distance ? distance : 0,
                behavior: 'smooth'
            });
        }

        this.setState(state);
        this.props.onChoose(path);
    }

    componentWillUnmount() {
        //
    }

    render() {
        return (
            <Router>
                <Navbar expand="lg" variant="dark" className='bg-custom'>
                    <Link to="#cptredbyjosh" className="navbar-brand" onClick={() => this.getCurrentPath("#cptredbyjosh")}>
                        @cptredbyjosh
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