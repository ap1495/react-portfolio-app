import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container, Row, Col, Image } from 'react-bootstrap'
import email from '../pictures/email.png'
import linkedin from '../pictures/linkedin.jfif'
import github from '../pictures/github.png'
import '../styles.css'

function Contact() {
    return (
        <Container id='Contact' className='contact-container' fluid>
            <Row>
                <Col xs={12} className='section-header'>
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                    >
                        <h1><u>CONTACT</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='bounceInRight'
                animateOnce={true}
            >
                <Row className={'pt-5'}>
                    <Col xs={12} md={4} className='sub-contact-container'>
                            <a className='contact-links' href='mailto:aannaappa@buffalo.edu'>
                                <Image
                                    className='contact-logos'
                                    src={email}
                                    rounded
                                />
                                 <p>aannappa@buffalo.edu</p>
                            </a>
                    </Col>

                    <Col xs={12} md={4} className='sub-contact-container'>
                        <a
                            className='contact-links'
                            href='https://www.linkedin.com/in/abhishekap/'
                            target='_blank'
                        >
                            <Image
                                className='contact-logos'
                                src={linkedin}
                                rounded
                            />
                            <p>abhishekap</p>
                        </a>
                    </Col>

                    <Col xs={12} md={4} className='sub-contact-container'>
                        <a
                            className='contact-links'
                            href='https://github.com/ap1495'
                            target='blank'
                        >
                            <Image
                                className='contact-logos'
                                src={github}
                                rounded
                            />
                            <p>ap1495</p>
                        </a>
                    </Col>
                </Row>
            </ScrollAnimation>

            <Row className='padding-copyright'>
                <Col xs={12}>
                    <p className='copyright-style'>
                        ABHISHEK ANNAPPA PRABHU ©2020
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
