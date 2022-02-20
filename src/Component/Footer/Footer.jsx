import React, {Component} from 'react';
// import Init from '../../Init/Init';
import './Footer.scss';

import ComingSoon from '../ComingSoon/ComingSoon';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerMenu: [
                {href: "/about-us", label: "Tentang Kami"},
                {href: "/contact-us", label: "Hubungi Kami"},
                // {href: "", label: "Lowongan"},
                // {href: "", label: "Testimoni"},
                // {href: "", label: "API"},
                {href: "/terms-and-condition", label: "Syarat dan Ketentuan"},
                {href: "/privacy-and-policy", label: "Kebijakan dan Privasi"}
            ],
            footerProfile: [
                {href: "https://www.instagram.com/mypangan_id/", icon: ['fab', 'instagram']},
                {href: "https://www.facebook.com/MyPanganID", icon: ['fab', 'facebook-square']},
                {href: "https://www.linkedin.com/company/mypangan/", icon: ['fab', 'linkedin']}
            ]
        }
    }

    render() {
        return (
            <footer className={
                // "px-5 py-3" 
                // + 
                (this.props.show ? '' : ' d-none')
            }>
                <ComingSoon title="Contacts"></ComingSoon>
            </footer>
        );
    }
}

export default Footer;