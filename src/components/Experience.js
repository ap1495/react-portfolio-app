import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Element } from 'react-scroll'
import university from '../pictures/university.png'
import greatwest from '../pictures/greatwest.png'
import juniper from '../pictures/juniper.png'
import '../styles.css'

function Experience() {
    return (
        <Container className='experience-container' id='Experience' fluid>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                        animateOnce={true}
                    >
                        <h1><u>EXPERIENCE</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='bounceInRight'
                animateOnce={true}
            >
                <Row className={'pt-5'}>
                    <Col xs={12} md={6} lg={4} className='card-container'>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={university} />
                            <Card.Body>
                            <Card.Title><b>Research Assistant</b></Card.Title>
                            <Card.Text>July 2019 - Present</Card.Text>
                            <a
                                href='http://www.buffalo.edu/'
                                target='_blank'
                            >
                                <Button variant="primary">Visit Website</Button>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4} className='card-container'>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={greatwest} />
                            <Card.Body>
                            <Card.Title><b>Web Developer</b></Card.Title>
                            <Card.Text>June 2017 - May 2018</Card.Text>
                            <a
                                href='https://www.empower-retirement.com/'
                                target='_blank'
                            >
                                <Button variant="primary">Visit Website</Button>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4} className='card-container'>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={juniper} />
                            <Card.Body>
                            <Card.Title><b>SDE Intern</b></Card.Title>
                            <Card.Text>January 2017 - June 2017</Card.Text>
                            <a
                                href='https://www.juniper.net/us/en/'
                                target='_blank'
                            >
                                <Button variant="primary">Visit Website</Button>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </ScrollAnimation>
            
        </Container>
    )
}

export default Experience
