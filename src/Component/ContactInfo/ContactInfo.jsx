import React from 'react';
import Init from '../../Init/Init';

const ContactInfo = (props) => {
    let emailIcon = props.useIcon ? <Init.FontAwesomeIcon icon={['far', 'envelope']} /> : '',
        phoneIcon = props.useIcon ? <Init.FontAwesomeIcon icon={['fas', 'phone-square-alt']} /> : '';

    return (
        <div id={props.id} className={props.className}>
            <h5 className="my-4">
                Hubungi Kami
            </h5>
            <ul>
                <li className="contact-info mb-2">
                    { emailIcon } mypangan.id@gmail.com
                </li>
                <li className="contact-info mb-2">
                    { phoneIcon } 021 58903196
                </li>
            </ul>
        </div>
    );
}

ContactInfo.defaultProps = {
    id: "",
    className: "",
    useIcon: false
};

export default ContactInfo;