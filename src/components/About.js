import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profile from '../pictures/abhishek.png'
import email from '../pictures/email.png'
import linkedin from '../pictures/linkedin.jfif'
import github from '../pictures/github.png'
import '../styles.css'

function About() {
    return (
        <Container id='About' className='about-container' fluid>

            <Row>
                <Col xs={12}>
                    <Image
                        className='profile-img shadow p-3 bg-white rounded'
                        src={profile}
                        roundedCircle
                        responsive
                    />
                </Col>
            </Row>

            <Row  className='pt-4'>
                <Col xs={{span: 8, offset: 2}}>
                    <h3>
                        <b>Abhishek Annappa Prabhu</b>
                    </h3>

                    <h5>
                        Front End Developer<br/>
                        Buffalo, New York
                    </h5>
                    <a
                        className='contact-links'
                        href='mailto:aannaappa@buffalo.edu'
                    >

                        <Image
                            className='about-contact-logos'
                            src={email}
                            rounded
                        />
                    </a>
                    <a
                        className='contact-links'
                        href='https://www.linkedin.com/in/abhishekap/'
                        target='_blank'
                    >
                        <Image
                            className='about-contact-logos'
                            src={linkedin}
                            rounded
                        />
                    </a>
                    <a
                        className='contact-links'
                        href='https://github.com/ap1495'
                        target='blank'
                    >
                        <Image
                            className='about-contact-logos'
                            src={github}
                            rounded
                        />
                    </a>

                    <br/><br/>

                    <p className='about-content'>
                        I'm a graduate student at the University at Buffalo majoring in Management
                        Information Systems.<br/>
                        <hr className='hr-about'/>
                        I love designing and building websites from scratch that are fast,
                        responsive and dynamic.<br/>
                        <hr className='hr-about'/>
                        I'm also passionate about Data Science & Machine Learning,
                        and their application in eclectic fields.<br/>
                        {/*<hr className='hr-about'/>
                        <b>Actively seeking full time opportunities in web development beginning in June 2020.</b> */}
                    </p>
                </Col>
            </Row>

        </Container>
    );
}

export default About
