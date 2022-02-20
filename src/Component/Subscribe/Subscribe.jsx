import React, {Component} from 'react';
import {Jumbotron, Row, Col, Form} from 'react-bootstrap';
import './Subscribe.scss';

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col lg={4} className="align-self-center my-5">
                        <h3 className="title">
                            Get Daily News
                        </h3>
                        <p className="desc text-justify">
                            Masukkan alamat email Anda dan Anda akan menerima ke buletin email kami.
                        </p>
                    </Col>
                    <Col lg={8} className="my-5">
                        <Form>
                            <Form.Group controlId="subscribe-input">
                                <Form.Label id="subscribe-label">Email</Form.Label>
                                <input id="subscribe-input" type="email" placeholder="name@domain.com" />
                                <button className="btn rednavi-btn-primary text-white"> Subscribe </button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Subscribe;