import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
//
import '../Mycss/Footer.css';
function SubFooter() {
    return (
        <div className='subfooter'>
            <Container>
                <Row>
                    <Col xs={6}>@Copyright 2020</Col>
                    <Col xs={6} className='subfooter__icons'><FaInstagram className='subfooter__icon' /> <FaFacebookF className='subfooter__icon' /><FaTwitter className='subfooter__icon' /> </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubFooter
