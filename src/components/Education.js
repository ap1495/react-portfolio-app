import React from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import {Element} from 'react-scroll';
import '../styles.css';

function Education() {
    return (
        <Container id='Education' className='education-container'>
            <Row>
                <Col className='section-header' xs={12}>
                    <h1><u>EDUCATION</u></h1>
                </Col>
            </Row>

            <Row className={'pt-5 padding-section'}>
                <Col xs={12} md={6}>
                    <h5><b>University at Buffalo, SUNY</b></h5>
                    <p>
                        Master of Science in Management Information Systems<br/>
                        2019 - 2020
                    </p><br/>
                    <Col md={12} className='padding-coursework padding-coursework-right'>
                        <p><b>Relevant Coursework</b></p>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>Web Analytics</ListGroup.Item>
                            <ListGroup.Item>Database Management Systems</ListGroup.Item>
                            <ListGroup.Item>Programming Databases with Python</ListGroup.Item>
                            <ListGroup.Item>System Analysis & Design</ListGroup.Item>
                            <ListGroup.Item>Data Visualization</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Col>

                <Col xs={12} md={6}>
                    <h5><b>BMS College of Engineering</b></h5>
                    <p>
                        Bachelor of Engineering in Information Science<br/>
                        2013 - 2017
                    </p><br/>
                    <Col md={12} className='padding-coursework-left'>
                        <p><b>Relevant Coursework</b></p>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>Web Programming</ListGroup.Item>
                            <ListGroup.Item>Data Structures</ListGroup.Item>
                            <ListGroup.Item>Analysis and Design of Algorithms</ListGroup.Item>
                            <ListGroup.Item>Object Oriented Programming with C++</ListGroup.Item>
                            <ListGroup.Item>Java Programming</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Education;
