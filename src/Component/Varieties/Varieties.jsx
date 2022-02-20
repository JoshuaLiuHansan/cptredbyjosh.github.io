import React, {Component} from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import './Varieties.scss';

class Varieties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: [
                {img: "/assets/icons/categories/fruits.svg", title: "Buah"},
                {img: "/assets/icons/categories/veggies.svg", title: "Sayur"},
                {img: "/assets/icons/categories/meat.svg", title: "Daging"},
                {img: "/assets/icons/categories/bahan pokok.svg", title: "Bahan Pokok"},
                {img: "/assets/icons/categories/bumbu masak.svg", title: "Bumbu Masak"},
                {img: "/assets/icons/categories/makanan laut.svg", title: "Makanan Laut"},
                {img: "/assets/icons/categories/minuman.svg", title: "Minuman"},
                {img: "/assets/icons/categories/makanan beku.svg", title: "Makanan Beku"},
                {img: "/assets/icons/categories/bahan adonan.svg", title: "Bahan Adonan"},
            ]
        }
    }

    render() {
        return (
            <Jumbotron className="transparent-section">
                <Row>
                    <Col lg={4} className="align-self-center my-5">
                        <h3 className="title">
                            Explore Varieties
                        </h3>
                        <p className="desc text-justify">
                            Kami menyediakan berbagai kategori bahan pangan yang dapat Anda jual dan belikan melalui MyPangan.
                        </p>
                    </Col>
                    <Col lg={8} className="variety-list my-5">
                        {
                            this.state.target.map(function(item, index) {
                                return (
                                    <div key={index} className="variety-items">
                                        <img src={item.img} alt={item.title} height="90" className="py-1 mb-4" />
                                        <span className="variety-name">
                                            {item.title}
                                        </span>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Varieties;