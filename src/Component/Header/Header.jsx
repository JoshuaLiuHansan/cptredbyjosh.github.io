import React from 'react';
import {Jumbotron, Row, Col, Button} from 'react-bootstrap';
import './Header.scss';

const Header = (props) => {
    let HeaderImage = "",
        HeaderWidth = 12;

    if(props.hasOwnProperty('bigScreen') && props.bigScreen) {
        HeaderImage = (
            <div className="header-image col-sm-4">
                <img className="" src="/assets/banner/Model.png" alt="" />
            </div>
        );
        
        HeaderWidth = 7;
    }

    return (
        <Jumbotron className="homepage-header">
            <Row>
                <Col sm={HeaderWidth}>
                    <h1 className="mb-4">
                    We Empower Indonesian Groceries Merchants
                    </h1>
                    <p className="">
                    MyPangan adalah sebuah perusahaan <strong>groceries marketplace</strong> dengan visi
                    kami sendiri menyejahterakan seluruh pelaku usaha pangan.
                    </p>
                    <Button variant="danger" className="rednavi-btn-secondary">
                        Download Aplikasi
                    </Button>
                </Col>
                { HeaderImage }
            </Row>
        </Jumbotron>
    );
}

export default Header;