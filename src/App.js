import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';

import Routes from './Routing/Routing';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: window.location.pathname
    }
  }

  render() {
    const routes = Routes();

    let hasFooterRoutes = routes.filter( (value, key) => {
      return value.showFooter;
    } ).map( (item) => {
      return item.path;
    } );

    const handleNavClick = (path) => {
      let state = this.state;
      state.currentRoute = path;
      this.setState(state);
    }

    return(
      <div className="App">
          <NavigationBar navList={routes} onChoose={(path) => handleNavClick(path)} />
          <Footer show={ hasFooterRoutes.includes(this.state.currentRoute) || window.location.pathname.includes("news-room") } />
      </div>
    );
  }
}

export default App;
