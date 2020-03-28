import React from 'react'
import { ProgressBar, Container, Row, Col, Image } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import html5 from '../pictures/html5.png'
import react from '../pictures/react.png'
import redux from '../pictures/redux.png'
import css3 from '../pictures/css3.png'
import less from '../pictures/less.jfif'
import flask from '../pictures/flask.png'
import bootstrap from '../pictures/bootstrap.png'
import javascript from '../pictures/javascript.png'
import angular from '../pictures/angular.png'
import python from '../pictures/python.png'
import nodejs from '../pictures/nodejs.png'
import mysql from '../pictures/mysql.png'
import java from '../pictures/java.png'
import aws from '../pictures/aws.png'
import '../styles.css'

function Skills() {
    return (
        <Container className={'skill-container'} id='Skills'>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='slideInLeft'
                        animateOnce={true}
                    >
                        <h1><u>SKILLS</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='slideInLeft'
                animateOnce={true}
            >
                <Row className={'pt-5'}>
                    <Col xs={12} md={6} className='padding-section padding-skills-right'>
                        <h3>Front End</h3><br/>
                        <Image
                            className='skills-img'
                            src={html5}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={react}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={redux}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={css3}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={bootstrap}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={javascript}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={angular}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={less}
                            rounded
                        />

                    </Col>

                    <Col xs={12} md={6} className={'padding-section padding-skills-left'}>
                        <h3>Back End</h3><br/>
                        <Image
                            className='skills-img'
                            src={python}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={nodejs}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={mysql}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={java}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={flask}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={aws}
                            rounded
                        />

                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    )
}

export default Skills
