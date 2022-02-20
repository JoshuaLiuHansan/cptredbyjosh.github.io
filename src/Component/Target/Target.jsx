import React, {Component} from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import './Target.scss';

class Target extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: [
                {img: "/assets/icons/target/1.svg", desc: "100,000 Pedagang dirangkul MyPangan."},
                {img: "/assets/icons/target/2.svg", desc: "99.99% menjangkau Kecamatan DKI Jakarta."},
                {img: "/assets/icons/target/3.svg", desc: "Target 800,000 transaksi berhasil."},
                {img: "/assets/icons/target/4.svg", desc: "100% masyarakat dipuaskan."}
            ]
        }
    }

    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col lg={4} className="align-self-center my-5">
                        <h3 className="title">
                            Target Kami
                        </h3>
                        <p className="desc text-justify">
                            MyPangan adalah perusahaan teknologi dengan visi menyejahterakan seluruh pedagang bahan makanan dengan mendigitalisasi toko bahan makanan.
                        </p>
                    </Col>
                    <Col lg={8} className="target-list my-5">
                            {
                                this.state.target.map(function(item, index) {
                                    return (
                                        <div key={index} className="target-items pt-1 my-1">
                                            <img src={item.img} width="55" alt=""/>
                                            <p className="target-items-desc mt-3"> 
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })
                            }
                        {/* <div className="">
                        </div> */}
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Target;