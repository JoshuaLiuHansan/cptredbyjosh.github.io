import Homepage from '../Container/Homepage/Homepage';
import Privacy from '../Container/Privacy/Privacy';
import Terms from '../Container/Terms/Terms';

import ErrorPage from '../Container/ErrorPage/ErrorPage';

const Routes = () => {
    return [
        {
            path: "/privacy-and-policy",
            name: "Privacy And Policy",
            exact: true,
            visibility: false,
            showFooter: false,
            component: Privacy
        },
        {
            path: "/terms-and-condition",
            name: "Terms & Condition",
            exact: true,
            visibility: false,
            showFooter: false,
            component: Terms
        },
        {
            path: "/air-jordan",
            name: "Air Jordan",
            exact: true,
            visibility: true,
            showFooter: true,
            component: Homepage
        },
        {
            path: "/yeezy",
            name: "Yeezy",
            exact: true,
            visibility: true,
            showFooter: true,
            component: Homepage
        },
        {
            path: "/apparels",
            name: "Apparels",
            exact: true,
            visibility: true,
            showFooter: true,
            component: Homepage
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