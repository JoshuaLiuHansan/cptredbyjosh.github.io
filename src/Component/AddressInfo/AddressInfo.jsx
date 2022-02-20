import React from 'react';
import Init from '../../Init/Init';

const AddressInfo = (props) => {
    let icon = props.useIcon ? <Init.FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> : '';

    return (
        <div id={props.id} className={props.className}>
            <h5 className="my-4">
                { icon } Alamat Kami
            </h5>
            <p className="address-info">
                Ruko Plaza Meruya Blok B No. 11, 
                Komp. Taman Meruya Ilir, 
                Jl. Permata Meruya I, Meruya Utara, 
                Kembangan, Jakarta Barat 11620
            </p>
        </div>
    );
}

AddressInfo.defaultProps = {
    id: "",
    className: "",
    useIcon: false
};

export default AddressInfo;