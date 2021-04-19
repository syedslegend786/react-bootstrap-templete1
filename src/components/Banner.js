import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Mycss/Banner.css';

function Banner() {
    return (
        <div style={{
            background: `url(/images/banner.jpg) `,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
        }}>
            <Container>
                <Row>
                    <Col className='banner__text p-5' md={6}>
                        <h1>Some Text</h1>
                        <p className='text-light p-3 '  >I would love to know why this works. I tested my site with Chrome, Chromium, Safari, Firefox</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
