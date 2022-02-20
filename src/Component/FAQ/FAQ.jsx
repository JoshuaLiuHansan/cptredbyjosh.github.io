import React, {Component} from 'react';
import { Card, Accordion, Row, Col } from 'react-bootstrap';
import Init from '../../Init/Init';
import './FAQ.scss';

const CollapseBox = (props) => {
    const toggleQuestion = () => {
        props.onToggle();
    }

    return(
        <Col lg={5}>
            <Accordion>
                <Card className="question-item">
                    <Accordion.Toggle as={Card.Header} className="question-box" eventKey="0" onClick={toggleQuestion}>
                        <span className="question-title">
                            {props.list.question}
                        </span>
                        <Init.FontAwesomeIcon icon={['fas', (props.list.open ? 'angle-up' : 'angle-down')]} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> {props.list.answer} </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
    );
}

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    question: "Apa itu MyPangan?", 
                    answer: "MyPangan merupakan mobile-based groceries e-commerce platform yang dibuat untuk mensejahterakan pedagang kelas menengah kebawah dan memudahkan masyarakat untuk berbelanja secara online",
                    open: false
                },
                {
                    question: "How does Workana assure me that I will be paid for my work?", 
                    answer: "MyPangan merupakan mobile-based groceries e-commerce platform yang dibuat untuk mensejahterakan pedagang kelas menengah kebawah dan memudahkan masyarakat untuk berbelanja secara online",
                    open: false
                },
                {
                    question: "Siapa saja yang bisa jadi Seller?", 
                    answer: "MyPangan merupakan mobile-based groceries e-commerce platform yang dibuat untuk mensejahterakan pedagang kelas menengah kebawah dan memudahkan masyarakat untuk berbelanja secara online",
                    open: false
                },
                {
                    question: "Can I have a stable income thanks to Workana?", 
                    answer: "MyPangan merupakan mobile-based groceries e-commerce platform yang dibuat untuk mensejahterakan pedagang kelas menengah kebawah dan memudahkan masyarakat untuk berbelanja secara online",
                    open: false
                },
                {
                    question: "Bagaimana cara mendaftar menjadi Seller?", 
                    answer: "MyPangan merupakan mobile-based groceries e-commerce platform yang dibuat untuk mensejahterakan pedagang kelas menengah kebawah dan memudahkan masyarakat untuk berbelanja secara online",
                    open: false
                },
                {
                    question: "Apa yang bisa Saya jual?", 
                    answer: "Anda dapat menjual bahan-bahan pangan yang sesuai dengan kategori yang telah tersedia.",
                    open: false
                }
            ]
        }
    }

    handleToggle(index) {
        let state = this.state;

        state.list[index].open = !state.list[index].open;

        this.setState(state);
    }

    render() {
        return (
            <div className="section-box">
                <div className="section-header">
                    <h1> Q&A </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <Row className="question-group">
                    {
                        this.state.list.map( (item, index) => {
                            return(
                                <CollapseBox key={index} list={item} onToggle={ () => this.handleToggle(index) } />
                            );
                        } )
                    }
                </Row>
            </div>
        );
    }
}

export default FAQ;