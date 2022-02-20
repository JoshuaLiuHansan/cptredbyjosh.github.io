import Homepage from '../Container/Homepage/Homepage';

import ErrorPage from '../Container/ErrorPage/ErrorPage';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

const Routes = () => {
    return [
        {
            path: "#profile",
            name: "Profile",
            exact: true,
            visibility: true,
            showFooter: true
        },
        {
            path: "#background",
            name: "Background",
            exact: true,
            visibility: true,
            showFooter: true,
        },
        {
            path: "#cptredbyjosh",
            name: "@cptredbyjosh",
            exact: true,
            visibility: false,
            showFooter: true
        },
        {
            path: "#projects",
            name: "Projects",
            exact: true,
            visibility: true,
            showFooter: faTemperatureLow
        },
        {
            path: "#contact",
            name: "Contact",
            exact: true,
            visibility: true,
            showFooter: true
        },
        
        {
            path: "/",
            name: "Homepage",
            exact: true,
            visibility: false,
            showFooter: true,
            component: Homepage
        },
        {
            path: "*",
            name: "Default",
            component: ErrorPage
        }
    ];
}

export default Routes;