import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {Element} from 'react-scroll';
import profile from '../pictures/abhishek.png';
import '../styles.css';

function About() {
    return (
        <Element id='About' name='About' fluid>
        <br/><br/>
            <Container className='about-container' fluid>
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
                        <h3><b>Abhishek Annappa Prabhu</b></h3>
                        <h5>
                            Front End Developer, Data Scientist<br/>
                            Buffalo, New York
                        </h5>
                        <br/><br/>
                        <p className='about-content'>
                            I'm a graduate student at the University at Buffalo majoring in Management
                            Information Systems. I love designing and building websites from
                            scratch that are fast, responsive and dynamic. I'm also passionate about
                            Data Science & Machine Learning, and their application in eclectic fields.
                            Seeking full time opportunities in web development beginning in June 2020.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default About;
