import React from 'react'
import { ProgressBar, Container, Row, Col, Image } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import html5 from '../pictures/html5.png'
import react from '../pictures/react.png'
import css3 from '../pictures/css3.png'
import bootstrap from '../pictures/bootstrap.png'
import javascript from '../pictures/javascript.png'
import angular from '../pictures/angular.png'
import python from '../pictures/python.png'
import tableau from '../pictures/tableau.png'
import mysql from '../pictures/mysql.png'
import googleanalytics from '../pictures/googleanalytics.png'
import pyspark from '../pictures/pyspark.png'
import aws from '../pictures/aws.png'
import '../styles.css'

function Skills() {
    return (
        <Container className={'skill-container'} id='Skills'>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                    >
                        <h1><u>SKILLS</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>
            <Row className={'pt-5'}>
                <Col xs={12} md={6} className='padding-section padding-skills-right'>
                    <Image
                        className='skills-img'
                        src={html5}
                        rounded
                    />
                    <ProgressBar now={90} label={90}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={react}
                        rounded
                    />
                    <ProgressBar now={85} label={85}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={css3}
                        rounded
                    />
                    <ProgressBar now={80} label={80}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={bootstrap}
                        rounded
                    />
                    <ProgressBar now={80} label={80}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={javascript}
                        rounded
                    />
                    <ProgressBar now={70} label={70}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={angular}
                        rounded
                    />
                    <ProgressBar now={60} label={60}/>
                    <br/>

                </Col>

                <Col xs={12} md={6} className={'padding-section padding-skills-left'}>
                    <Image
                        className='skills-img'
                        src={python}
                        rounded
                    />
                    <ProgressBar now={90} label={90}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={tableau}
                        rounded
                    />
                    <ProgressBar now={90} label={90}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={mysql}
                        rounded
                    />
                    <ProgressBar now={85} label={85}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={googleanalytics}
                        rounded
                    />
                    <ProgressBar now={80} label={80}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={pyspark}
                        rounded
                    />
                    <ProgressBar now={60} label={60}/>
                    <br/>

                    <Image
                        className='skills-img'
                        src={aws}
                        rounded
                    />
                    <ProgressBar now={60} label={60}/>
                    <br/>

                </Col>
            </Row>
        </Container>
    )
}

export default Skills
