import React, {Component} from 'react';
import Init from '../../Init/Init';
import './Footer.scss';

import ContactInfo from '../ContactInfo/ContactInfo';
import AddressInfo from '../AddressInfo/AddressInfo';

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
            <footer className={"px-5 py-3" + (this.props.show ? '' : ' d-none')}>
                <div id="first-column" className="flex-item p-2">
                    <img className="py-2" src="/assets/images/mypangan-logo.png" alt="MyPangan" width="150" />
                    <p className="py-2"> We Are Empowering Indonesian Groceries Merchants By Providing Groceries Marketplace </p>
                    <div className="footer-icon-list">
                        {
                            this.state.footerProfile.map(function(item, index){
                                let url = item.hasOwnProperty('href') && item.href !== "" ? item.href : "#";

                                return (
                                    <a key={ index } className="footer-icon" target="_blank" rel="noreferrer" href={ url }> 
                                        <Init.FontAwesomeIcon icon={ item.icon } />
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>

                <div id="second-column" className="flex-item p-2">
                    <div className="footer-grid">
                        <div id="action" className="footer-grid-item">
                            <h5 className="my-4">
                                Company
                            </h5>
                            <ul>
                                {
                                    this.state.footerMenu.map(function(item, index){
                                        return (
                                            <li key={ index } className="mb-2">
                                                <a href={ item.hasOwnProperty('href') && item.href !== "" ? item.href : "#" }> { item.label } </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        <ContactInfo id="contact" className="footer-grid-item" useIcon={true} />

                        <AddressInfo id="address" className="footer-grid-item" />
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;